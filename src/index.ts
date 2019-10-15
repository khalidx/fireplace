import { ScheduledHandler } from 'aws-lambda'
import { Lambda } from 'aws-sdk'

const lambda = new Lambda()

/**
 * 1) Gets the warming instructions from the event
 * 2) The warming instructions include the function name, payload, concurrency, and rate
 * 
 * Coming soon:
 * 3) It splits up the workload by function name and invokes itself to distribute the work
 * 
 * The Lambda functions being warmed are expected to be able to handle the provided payload and 
 *   sleep for 75 milliseconds upon receipt of the payload. Examples of this for different
 *   languages can be found in the ../README.md file.
 * 
 * @param event the CloudWatch ScheduledEvent
 * @param context the AWS Lambda Function Context
 */
export const handler: ScheduledHandler = async (event, context) => {
  try {
    let start = new Date()
    console.log('Starting the fireplace ...')
    console.log(JSON.stringify({ iso: start.toISOString(), locale: start.toLocaleString() }))

    let instructions = JSON.parse(event.detail) as Instructions

    let results = await Promise.all(instructions.map(instruction => lambda.invoke({
      InvocationType: 'Event',
      FunctionName: instruction.name,
      Payload: instruction.payload
    }).promise()))

    let errors = results.filter(result => result.StatusCode !== 202 || result.FunctionError)
    
    if (errors.length > 0) throw new Error(`Several invocation errors occurred during warming: ${JSON.stringify(errors, null, 2)}`)
    
    let end = new Date()
    console.log(`The fireplace was lit for ${end.valueOf() - start.valueOf()}ms.`)
  } catch (error) {
    console.error(error)
    throw error
  }
}

export type Instructions = Array<{
  name: string
  payload: string
  concurrency: number
  rate: number
}>

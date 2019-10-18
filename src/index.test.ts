import 'mocha'
import { expect } from 'chai'
import path from 'path'
import fs from 'fs'
import { handler, Event } from './index'

let event: Event

describe('the fireplace function handler', () => {

  before(async () => {
    event = JSON.parse(fs.readFileSync(path.resolve(__dirname, './event.json')).toString()) as Event
  })

  it('should fail with a message when given an invalid payload', async () => {
    try {
      await handler(undefined!, undefined!, undefined!)
    } catch (error) {
      expect(error.message).to.equal(`"value" is required`)
    }
  })
  
  it('should be able to warm 1 function with a concurrency of 1', async () => {

  })

  it('should be able to warm 10 functions with a concurrency of 25', () => {

  })

  it('should be able to warm 20 functions with a concurrency of 350', () => {
    
  })

})

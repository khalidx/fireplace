# Use the authorizer module from this repository
module "fireplace" {

  # When using any module in this repository in your own templates, you will need to use
  #   a Git URL with a ref attribute that pins you to a specific version of the module,
  #   such as the following example:
  # source = "github.com/khalidx/fireplace.git?ref=master"
  source = "../"

  # Here are some common options that you can provide to the module. For a full list of  
  #   options (and more information about each one) see the ../variables.tf file.
  instructions = [
    {
      name = "some-function",                      # the name of a Lambda Function
      payload = "{ \"type\": \"some-payload\" }",  # the payload to send to the Lambda Function during warming
      concurrency = 5,                             # the number of instances of the funciton that should be warm
      rate = 1                                     # the rate (in minutes) for running the warmer on a schedule
    }
  ]
}

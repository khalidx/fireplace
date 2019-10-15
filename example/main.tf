# Use the authorizer module from this repository
module "fireplace" {

  # When using any module in this repository in your own templates, you will need to use
  #   a Git URL with a ref attribute that pins you to a specific version of the module,
  #   such as the following example:
  # source = "github.com/khalidx/fireplace.git?ref=master"
  source = "../"

  # Here are some common options that you can provide to the module. For a full list of  
  #   options (and more information about each one) see the ../variables.tf file.
  functions = [

  ]
}

# fireplace

Keep your Lambdas warm!

- [fireplace](#fireplace)
  - [Introduction](#introduction)
  - [Usage](#usage)
  - [Developers](#developers)
    - [test](#test)
    - [build](#build)
    - [deploy-example](#deploy-example)
    - [undeploy-example](#undeploy-example)
  - [Support](#support)
  - [Thanks](#thanks)

## Introduction

This repository contains a Terraform module that can be imported into any Terraform file/project.

It will keep your Lambda functions warm at the specified concurrency and rate setting.

A quick three-step installation process with examples (for Node.js, Python, and Java) to get you rolling, fast.

## Usage

Three-step installation process.

1) Add the module configuration to your Terraform file.

    ```terraform
    module "fireplace" {
      source       = "github.com/khalidx/fireplace.git?ref=master"
      functions    = [
        
      ]
    }
    ```

2) Make sure your code can detect and handle a warming event (it should sleep for 75 milliseconds).

    > Example: Node.js

    ```javascript
    const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
     
    export const handler = async (event, context) => {
      if (event.type = "LambdaWarmerEvent") {
        await delay(75);
        return;
      }
      
      ...regular handler logic here...
    }
    ```

    > Example: Python

    ```python

    ```

    > Example: Java

    ```java

    ```

3) Initialize Terraform to install the module, and deploy! Your functions will stay nice and warm.

    ```sh
    terraform init
    terraform apply
    ```

## Developers

This section is for developers interested in modifying or extending this project.

The following commands are made available for your convenience when developing the code in this repository.

### test

Runs the tests defined in the `src/index.test.ts` file.

```sh
npm run test
```

### build

Builds the TypeScript code and outputs a JavaScript file to `dist/bundle.js`, then zips the `dist/` directory.

```sh
npm run build
```

### deploy-example

Deploys (applies) the example that leverages this module, using Terraform.

```sh
npm run deploy-example
```

### undeploy-example

Undeploys (destroys) the example that leverages this module, using Terraform.

```sh
npm run undeploy-example
```

## Support

Please open a GitHub issue for a quick response to your question, comment, concern, or suggestion.

## Thanks

Thanks for reading!

Also, a big thanks to Jeremy Daly and others for writing [great posts](https://www.jeremydaly.com/lambda-warmer-optimize-aws-lambda-function-cold-starts/) about the "intricacies" of warming AWS Lambda Functions.

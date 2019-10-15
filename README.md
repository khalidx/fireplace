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

## Introduction

This repository contains a Terraform module that can be imported into any Terraform file/project.

It will keep your Lambda functions warm at the specified concurrency and rate setting.

## Usage

Two-step installation process.

1) Add the module configuration to your Terraform file.

    ```terraform

    ```

2) Initialize Terraform to install the module, and deploy! Your functions will stay nice and warm.

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

Thanks for reading!

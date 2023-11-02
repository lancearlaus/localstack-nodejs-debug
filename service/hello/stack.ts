import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import _ from "lodash";
import { HelloServiceFunctions } from "./functions.js";
import { HelloServiceName } from "./api.js";


export class HelloServiceStack extends Stack {
  constructor(scope: Construct, props?: StackProps) {
    super(scope, _.kebabCase(HelloServiceStack.name.replace(/Stack$/, '')), props);

    new HelloServiceFunctions(this, 'functions', { serviceName: HelloServiceName });
  }
}

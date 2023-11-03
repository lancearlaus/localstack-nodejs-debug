import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import _ from "lodash";
import { GreetingFunction } from "./greeting.js";


export class LocalstackNodejsDebugStack extends Stack {
  constructor(scope: Construct, props?: StackProps) {
    super(scope, _.kebabCase(LocalstackNodejsDebugStack.name.replace(/Stack$/, '')), props);

    new GreetingFunction(this);
  }
}
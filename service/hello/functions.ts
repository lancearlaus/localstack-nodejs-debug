import { Duration } from "aws-cdk-lib";
import { Construct } from "constructs";
import { BankNodejsFunction, ServiceFunctions, ServiceFunctionsProps } from "../../constructs/index.js";
import { getMessage } from "./handler/getMessage.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";



export class HelloServiceFunctions extends ServiceFunctions {
  constructor(scope: Construct, id: string, props: ServiceFunctionsProps) {
    super(scope, id, props);

    const namePrefix = props.serviceName.replace(/-service$/, '');

    new BankNodejsFunction(this, getMessage.name, {
      entry: join(dirname(fileURLToPath(import.meta.url)), 'handler', `${getMessage.name}.ts`),
      handler: getMessage.name,
      functionName: `${namePrefix}-${getMessage.name}`,
      timeout: Duration.minutes(5),
    });
  }
}

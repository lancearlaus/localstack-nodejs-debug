import { Construct } from "constructs";


export interface ServiceFunctionsProps {
  readonly serviceName: string,
}

export class ServiceFunctions extends Construct {
  readonly serviceName: string;


  constructor(scope: Construct, id: string, props: ServiceFunctionsProps) {
    super(scope, id);
    this.serviceName = props.serviceName;
  }
}
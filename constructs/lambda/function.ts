import { Architecture } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction, NodejsFunctionProps, OutputFormat, SourceMapMode } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';


export class BankNodejsFunction extends NodejsFunction {
  constructor(scope: Construct, id: string, props: NodejsFunctionProps) {
    super(scope, id, {
      architecture: Architecture.ARM_64,
      bundling: {
        format: OutputFormat.ESM,
        sourceMap: true,
        sourceMapMode: SourceMapMode.BOTH,
        commandHooks: {
          beforeBundling: () => [],
          afterBundling(inputDir, outputDir) {
            return [ `echo "afterBundling: ${JSON.stringify({ inputDir, outputDir })}"`];
          },
          beforeInstall: () => [],
        },
      },
      environment: { 
        NODE_OPTIONS: '--enable-source-maps',
      },
      ...props,
    });
  }
}

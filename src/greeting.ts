import { Duration } from "aws-cdk-lib";
import { Architecture } from "aws-cdk-lib/aws-lambda";
import { NodejsFunction, OutputFormat, SourceMapMode } from "aws-cdk-lib/aws-lambda-nodejs";
import { Construct } from "constructs";
import { greeting } from "./greeting.handler.js";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

export class GreetingFunction extends NodejsFunction {
  constructor(scope: Construct) {
    super(scope, 'handler', {
    // super(scope, _.kebabCase(GreetingFunction.name.replace(/Function$/, '')), {
      entry: join(dirname(fileURLToPath(import.meta.url)), `${greeting.name}.handler.ts`),
      architecture: Architecture.ARM_64,
      bundling: {
        // For projects that are already ESM, keeping it as the output format produces far more readable, and compact, bundled code
        format: OutputFormat.ESM,
        sourceMap: true,
        // Source maps must be inlined for lambdas deployed via CDK since the debugger fails to find
        // the companion source map file using the default linked approach
        // INLINE mode is sufficient, but BOTH mode is useful to inspect the 'sources' field when troubleshooting
        // sourceMapMode: SourceMapMode.INLINE,
        sourceMapMode: SourceMapMode.BOTH,
      },
      environment: {
        // Enable useful runtime stack traces
        NODE_OPTIONS: '--enable-source-maps',
      },
      functionName: greeting.name,
      timeout: Duration.minutes(5),   // Long timeout only for debugging purposes
    });
  }
}

#!/usr/bin/env node
import { App, Environment } from 'aws-cdk-lib';
import { LocalstackNodejsDebugStack } from '../src/stack.js';

const env: Environment =  {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new LocalstackNodejsDebugStack(app, { env });

import * as cdk from '@aws-cdk/core';
import { CdkS3Stack } from './cdk-s3-stack';

export class CdkMasterStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const NewS3Bucket = new CdkS3Stack(this, 'andresbarreto', {
      stackName: 'andresbarreto'
    });
    // NewS3Bucket.
    
  }
}

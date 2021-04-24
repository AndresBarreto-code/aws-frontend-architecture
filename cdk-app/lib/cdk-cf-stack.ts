import * as cdk from '@aws-cdk/core';
import * as cloudfront from '@aws-cdk/aws-cloudfront';
import * as origins from '@aws-cdk/aws-cloudfront-origins';
import * as s3 from '@aws-cdk/aws-s3';

export class CdkCfStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const myBucket = new s3.Bucket(this, 'myBucket');
    // The code that defines your stack goes here
    const name = props && props.stackName ? props.stackName : 'StacksBucket';
    new cloudfront.Distribution(this, name, {
      defaultBehavior: { origin: new origins.S3Origin(myBucket) },
    });
  }
}

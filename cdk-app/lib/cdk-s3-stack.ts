import * as cdk from '@aws-cdk/core';
import * as s3 from '@aws-cdk/aws-s3';
import { BucketAccessControl, HttpMethods } from '@aws-cdk/aws-s3';

export class CdkS3Stack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const name = props && props.stackName ? props.stackName : 'StacksBucket';
    new s3.Bucket(this, name, {
      accessControl: BucketAccessControl.PUBLIC_READ,
      bucketName: name + "s3",
      cors: [{
        allowedHeaders: ['*'],
        allowedMethods: [
          HttpMethods.GET,
          HttpMethods.POST,
          HttpMethods.PUT,
          HttpMethods.HEAD ,
          HttpMethods.DELETE
        ],
        allowedOrigins: ['*']
      }],
      websiteIndexDocument: "index.html",
      websiteErrorDocument: "index.html",
      versioned: false
    });
  }
}

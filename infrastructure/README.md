# Cronos Website Infrastructure

This directory contains OpenTofu configuration for the Cronos website image storage infrastructure.

## Resources Created

- **S3 Bucket**: Secure bucket for storing website images with versioning and encryption enabled
- **CloudFront Distribution**: CDN for fast global image delivery with Origin Access Control (OAC)

## Prerequisites

- [OpenTofu](https://opentofu.org/docs/intro/install/) >= 1.6
- AWS CLI configured with appropriate credentials
- AWS account with permissions to create S3 and CloudFront resources

## Usage

### Initialize OpenTofu

```bash
cd infrastructure
tofu init
```

### Plan Changes

```bash
tofu plan
```

### Apply Configuration

```bash
tofu apply
```

### Customize Variables

You can customize the deployment by creating a `terraform.tfvars` file:

```hcl
aws_region              = "us-east-1"
environment             = "prod"
bucket_name             = "my-custom-bucket-name"
cloudfront_price_class  = "PriceClass_100"
```

Or pass variables via command line:

```bash
tofu apply -var="bucket_name=my-custom-bucket"
```

## Outputs

After applying, you'll get the following outputs:

- `s3_bucket_name`: Name of the created S3 bucket
- `cloudfront_domain_name`: CloudFront distribution domain name
- `cloudfront_url`: Full HTTPS URL to access images

## Uploading Images

Upload images to S3:

```bash
aws s3 cp /path/to/image.jpg s3://cronos-website-images/
```

Access via CloudFront:

```
https://<cloudfront-domain>/image.jpg
```

## Security Features

- S3 bucket blocks all public access
- CloudFront uses Origin Access Control (OAC) for secure S3 access
- HTTPS enforced on CloudFront
- Server-side encryption enabled on S3
- Versioning enabled for data protection

## Clean Up

To destroy all resources:

```bash
tofu destroy
```

**Note**: Ensure the S3 bucket is empty before destroying, or add `force_destroy = true` to the bucket resource.

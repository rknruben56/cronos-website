terraform {
  required_version = ">= 1.6"

  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region

  default_tags {
    tags = {
      Project     = "cronos-website"
      ManagedBy   = "OpenTofu"
      Environment = var.environment
      Application = "cronos"
    }
  }
}

provider "aws" {
  alias  = "us-east-1"
  region = "us-east-1"

  default_tags {
    tags = {
      Project     = "cronos-website"
      ManagedBy   = "OpenTofu"
      Environment = var.environment
      Application = "cronos"
    }
  }
}

# Home Remodeling Contractor Website

A modern, responsive website for AA Cronos General Contractor

## Project Setup

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone this repository or download the files
2. Install dependencies:

```bash
npm install
```

3. (Optional) Configure environment variables:

```bash
cp .env.example .env
```

Edit `.env` to set your CloudFront domain if different from the default.

### Development

To run the development server:

```bash
npm run serve
```

### Building for Production

To build the minified, production-ready site:

```bash
npm run build
```

This will create a `dist` directory with all optimized files.

## Project Structure

```
cronos-website/
├── css/              # CSS styles
│   └── styles.css    # Main stylesheet
├── js/               # JavaScript files
│   └── main.js       # Main script file
├── images/           # Image assets
├── infrastructure/   # AWS infrastructure as code (OpenTofu)
│   ├── s3.tf         # S3 bucket configuration
│   ├── cloudfront.tf # CloudFront distribution
│   └── README.md     # Infrastructure documentation
├── dist/             # Built files (generated)
├── index.html        # Main HTML file
├── package.json      # Project dependencies and scripts
├── postcss.config.js # PostCSS configuration
├── netlify.toml      # Netlify configuration
└── README.md         # Project documentation
```

## Environment Variables

The site uses environment variables for configuration. These are injected during the build process.

### Available Variables

- `CLOUDFRONT_DOMAIN`: The CloudFront domain where your images are hosted (default: `d2n23u1adoega9.cloudfront.net`)

### Local Development

For local development, create a `.env` file:

```bash
cp .env.example .env
```

Then edit `.env` with your values.

### Netlify Configuration

In Netlify, set environment variables in your site settings:

1. Go to Site settings → Build & deploy → Environment variables
2. Add the environment variable:
   - **Key**: `CLOUDFRONT_DOMAIN`
   - **Value**: Your CloudFront domain (e.g., `d2n23u1adoega9.cloudfront.net`)

The build process will automatically replace placeholders in the HTML with your environment variable values.

## Infrastructure

This project includes AWS infrastructure for image hosting:

- **S3 Bucket**: Secure storage for website images with versioning and encryption
- **CloudFront CDN**: Global content delivery network for fast image loading

See the [infrastructure/README.md](infrastructure/README.md) for detailed setup instructions.

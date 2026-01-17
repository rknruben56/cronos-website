#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Load environment variables from .env file if it exists
const envPath = path.join(__dirname, '..', '.env');
if (fs.existsSync(envPath)) {
  const envConfig = fs.readFileSync(envPath, 'utf8');
  envConfig.split('\n').forEach(line => {
    const match = line.match(/^([^#=]+)=(.*)$/);
    if (match) {
      const key = match[1].trim();
      const value = match[2].trim();
      // Only set if not already set (environment variables take precedence)
      if (!process.env[key]) {
        process.env[key] = value;
      }
    }
  });
}

// Get environment variables
const CLOUDFRONT_DOMAIN = process.env.CLOUDFRONT_DOMAIN;

console.log(`Building HTML with CloudFront domain: ${CLOUDFRONT_DOMAIN}`);

// Read the source HTML file
const htmlPath = path.join(__dirname, '..', 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Replace the placeholder with the actual CloudFront domain
html = html.replace(/\{\{CLOUDFRONT_DOMAIN\}\}/g, CLOUDFRONT_DOMAIN);

// Ensure dist directory exists
const distDir = path.join(__dirname, '..', 'dist');
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

// Write the processed HTML to a temporary file that will be minified
const processedHtmlPath = path.join(__dirname, '..', 'index.processed.html');
fs.writeFileSync(processedHtmlPath, html);

console.log('HTML processed successfully');

/*
  # Security Headers for Vercel Deployment
  
  # Content Security Policy - Prevent XSS attacks
  Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://challenges.cloudflare.com https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com data:; img-src 'self' data: https: blob:; connect-src 'self' https://challenges.cloudflare.com https://*.unsplash.com https://*.google-analytics.com; frame-src https://challenges.cloudflare.com; object-src 'none'; base-uri 'self'; form-action 'self' mailto:; frame-ancestors 'none'; upgrade-insecure-requests;
  
  # Prevent clickjacking attacks
  X-Frame-Options: DENY
  
  # Prevent MIME type sniffing
  X-Content-Type-Options: nosniff
  
  # Enable XSS protection in browsers
  X-XSS-Protection: 1; mode=block
  
  # Control referrer information
  Referrer-Policy: strict-origin-when-cross-origin
  
  # Enforce HTTPS
  Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
  
  # Permissions Policy - Control browser features
  Permissions-Policy: accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()

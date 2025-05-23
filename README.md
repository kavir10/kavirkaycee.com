# wr8

<p align="center">
  <a href="https://wr8.in/">
    <img alt="wr8.in landing page" src="https://res.cloudinary.com/verfasor/image/upload/v1664446565/wr8/wr8-ph-01_dwcgbw.png" width="auto">
  </a>
</p>

[wr8](https://wr8.in) lets you create a website in Notion with better SEO. It is a customized version of [nextjs-notion-starter-kit](https://github.com/transitive-bullshit/nextjs-notion-starter-kit), based on [NotionX](https://github.com/NotionX/react-notion-x).

## Introduction

The wr8 website template is minimal and SEO-focused, a combo many bloggers and writers prefer. You can set it up within 10 minutes if you have accounts on Notion (obviously), GitHub, and Vercel. Additionally, you can add any analytics scripts you prefer.

## Features, getting started, and more

Visit: [https://wr8.in/](https://wr8.in/)

## Local

This project requires a recent version of Node.js (>= 16).

1. Fork / clone this repo
2. Change a few values in site.config.ts
3. `npm install`
4. `npm run dev` to test locally

## Free wr8.in subdomain

I'd be happy to provide custom subdomain mapping. Feel free to point your Vercel project to <code>example.wr8.in</code> of your choice. Available on [request](https://tally.so/r/3Npa5l). wr8.in domain registration is valid till 2032, so you're in safe hands for at least ten years.

## Warranty

wr8 comes with no warranty whatsoever. I'm not a full-time developer and am not well versed in React. I've shown you what you can do with wr8. Take it up a notch if you like.

## Donations

I didn't create the original React renderer. You can fork the wr8 repo and do whatever with it. And if you really enjoy using wr8 out of the box, [donations](https://liberapay.com/verfasor/) are appreciated. Alternatively, you could consider buying my [music](https://signalsiren.bandcamp.com/) to show support. I make synthwave and electronica in general. Thank you.

## License
- MIT wr8 © [Verfasor](https://verfasor.com)
- MIT Next.js Notion Starter Kit © [Travis Fischer](https://transitivebullsh.it)

<p> 
  <a href="https://mp.mt/">
    <img src="https://img.shields.io/badge/whois-mp.mt-red" />
  </a>  
  <a href="https://verfasor.com/">
    <img src="https://img.shields.io/badge/blog-verfasor.com-blueviolet" />
  </a>        
  <a href="https://wr8.in/">
    <img src="https://img.shields.io/badge/start-wr8.in-green" />
  </a> 
  <a href="mailto:verfasor@deadauthor.org">
    <img src="https://img.shields.io/badge/contact-email-important" />
  </a>   
<a href="https://twitter.com/verfasor">
    <img src="https://img.shields.io/twitter/follow/verfasor?style=social" /> 
</a>
<a href="https://github.com/verfasor">
    <img src="https://img.shields.io/github/followers/verfasor?label=verfasor&logo=GitHub&style=social" />
</a>  
</p>

## Redis Configuration and Troubleshooting

### Redis Setup
This project supports Redis for caching preview images. To enable Redis:

1. **Enable Redis in site.config.ts:**
   ```typescript
   isRedisEnabled: true
   ```

2. **Configure Redis credentials in .env:**
   ```env
   REDIS_HOST=your-redis-host.com:port
   REDIS_PASSWORD=your-redis-password
   REDIS_USER=default
   REDIS_NAMESPACE=preview-images
   ```

### Redis Cloud Configuration
For Redis Cloud (RedisLabs), your configuration should look like:
```env
REDIS_HOST=redis-12345.c123.region.ec2.cloud.redislabs.com:12345
REDIS_PASSWORD=your-actual-password
REDIS_USER=default
```

### Troubleshooting Redis Authentication Errors

If you see `WRONGPASS invalid username-password pair` errors:

1. **Verify credentials:** Double-check your Redis password and username in your Redis Cloud dashboard
2. **Check host format:** Ensure REDIS_HOST includes the port (e.g., `hostname:port`)
3. **Test connection:** Use a Redis CLI tool to test the connection:
   ```bash
   redis-cli -h hostname -p port -a password ping
   ```
4. **Temporary disable:** Set `isRedisEnabled: false` in site.config.ts to run without Redis

### Environment Variables
The application supports these Redis environment variables:
- `REDIS_HOST` - Redis hostname with port (required)
- `REDIS_PASSWORD` - Redis password (required)  
- `REDIS_USER` - Redis username (default: "default")
- `REDIS_NAMESPACE` - Key namespace (default: "preview-images")
- `REDIS_URL` - Complete Redis URL (optional, overrides above)

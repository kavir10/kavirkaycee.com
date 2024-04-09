import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '02d7e8dabdc048f682724fba25bfc2c7',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Kavir Kaycee',
  domain: 'kavirkaycee.com',
  author: 'Kavir Kaycee',
  seotitle: 'Kavir Kaycee | Product Management',

  // open graph metadata (optional)
  description: 'Hi! I am Kavir, a Product Manager, Builder, Startup Advisor, and Writer. This is my small corner of the internet.',

  // social usernames (optional)
  twitter: 'kavkaycee',
  linkedin: 'kavirkaycee',
  newsletter: 'https://thediscourse.co', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Fcb5cda98-0a30-431a-bc0a-006e5d8770c3%2F0031064a-5312-41cf-bef6-551f9de3ff92%2FKavir_circle_notion_dp_profile.webp?table=block&id=02d7e8da-bdc0-48f6-8272-4fba25bfc2c7&spaceId=cb5cda98-0a30-431a-bc0a-006e5d8770c3&width=250&userId=74bd6286-8f72-4167-b6c4-af3c877a1fba&cache=v2',
  defaultPageCover: 'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faea24c45-d89d-44bc-9b0a-7f7864fcd23e%2FCoverV1.1.png?table=block&id=0972cf4b-f5f4-4698-aa72-78b8773a4fbd&cache=v2',
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: true,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  navigationStyle: 'custom',
  navigationLinks: [   
    {
      title: 'Posts',
      pageId: '9cecccc56cca48839ceff3dc442e65f2'
    },    
    {
      title: 'Projects',
      pageId: '7e24ec4b82004fbab4a68ccc02cbcf70'
    }
  ]
})

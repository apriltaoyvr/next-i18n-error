For https://github.com/vercel/next.js/issues/44346

## To Reproduce
1. Run create-next-app
2. Add `localeDetection: false` to next.config.js
3. Run dev server and see that it will not launch due to a console error (`Error: Specified i18n.locales should be an Array received undefined`)
4. Then try adding `locales: ['default', 'en', 'de', 'fr'], defaultLocale: 'default'` to the config
5. Run dev server
6. See that it is still being routed to a locale

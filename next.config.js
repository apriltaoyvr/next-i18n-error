/** @type {import("next").NextConfig} */
module.exports = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    /* Without the below 2 lines, dev server will not run.
      Returns "Error: Specified i18n.locales should be an Array received undefined" 
    */
    locales: ['default', 'en', 'de', 'fr'],
    defaultLocale: 'default',
  },
  /* Comment back in to see on app directory as well */
  // experimental: {
  //   appDir: true,
  // }
};

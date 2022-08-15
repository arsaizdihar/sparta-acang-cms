module.exports = ({ env }) => [
  "strapi::errors",
  env.bool("UPLOAD_S3", false)
    ? {
        name: "strapi::security",
        config: {
          contentSecurityPolicy: {
            useDefaults: true,
            directives: {
              "connect-src": ["'self'", "https:"],
              "img-src": [
                "'self'",
                "data:",
                "blob:",
                "dl.airtable.com",
                env("S3_BUCKET") + ".is3.cloudhost.id",
              ],
              "media-src": [
                "'self'",
                "data:",
                "blob:",
                "dl.airtable.com",
                env("S3_BUCKET") + ".is3.cloudhost.id",
              ],
              upgradeInsecureRequests: null,
            },
          },
        },
      }
    : "strapi::security",
  "strapi::cors",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
];

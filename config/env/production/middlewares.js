module.exports = [
    'strapi::errors',
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
    {
      name: 'strapi::security',
      config: {
        contentSecurityPolicy: {
          useDefaults: true,
          directives: {
            'connect-src': ["'self'", 'https:'],
            'img-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com/dizcasdok'],
            'media-src': ["'self'", 'data:', 'blob:', 'https://res.cloudinary.com/dizcasdok'],
            upgradeInsecureRequests: null,
          },
        },
      },
    },  
  ];
  
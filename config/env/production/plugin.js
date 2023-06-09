module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: 'dizcasdok',
          api_key: '625211673148671',
          api_secret: 'gGSsqCOggeTRaR-SFlqK5DQzYMY'
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    // ...
  });

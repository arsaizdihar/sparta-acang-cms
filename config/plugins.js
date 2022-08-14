module.exports = ({ env }) => ({
  upload: env.bool("UPLOAD_S3", false)
    ? {
        config: {
          provider: "aws-s3",
          providerOptions: {
            accessKeyId: env("S3_ACCESS_KEY_ID"),
            secretAccessKey: env("S3_ACCESS_SECRET"),
            params: {
              Bucket: env("S3_BUCKET"),
            },
            endpoint: "is3.cloudhost.id",
          },
          actionOptions: {
            upload: {},
            uploadStream: {},
            delete: {},
          },
        },
      }
    : undefined,
});

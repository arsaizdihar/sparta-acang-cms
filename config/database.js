const path = require("path");

module.exports = ({ env }) => ({
  connection: {
    client: env.bool("DATABASE_PG", false) ? "sqlite" : "postgres",
    connection: env.bool("DATABASE_PG", false)
      ? {
          filename: path.join(
            __dirname,
            "..",
            env("DATABASE_FILENAME", ".tmp/data.db")
          ),
        }
      : {
          host: env("DATABASE_HOST", "localhost"),
          port: env.int("DATABASE_PORT", 5432),
          database: env("DATABASE_NAME", "db"),
          user: env("DATABASE_USERNAME", "db"),
          password: env("DATABASE_PASSWORD", "db"),
          ssl: env.bool("DATABASE_SSL", false)
            ? {
                rejectUnauthorized: false,
              }
            : false,
        },
    useNullAsDefault: true,
  },
});

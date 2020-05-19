export default () => ({
  database: {
    host: process.env.DATABASE_HOST,
    db: process.env.DATABASE_db,
  },
  allowOrigin: process.env.ALLOW_ORIGINS,
  staticDir: process.env.STATIC_DIR,
});

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  database: {
    host: process.env.DATABASE_HOST,
    db: process.env.DATABASE_db,
  },
  corsOrigin: process.env.CORS_ORIGINS,
  staticDir: process.env.STATIC_DIR,
});

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  allowOrigin: process.env.ALLOW_ORIGINS,
  staticDir: process.env.STATIC_DIR,
});

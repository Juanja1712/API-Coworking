export default () => ({
  database: {
    type: process.env.DATABASE_TYPE || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
    username: process.env.DB_USERNAME || 'juanchy',
    password: process.env.DB_PASSWORD || 'juanchy123',
    db: process.env.DB_NAME || 'postgres',
  },
});

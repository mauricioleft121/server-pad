module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "entities": [
    "./dist/models/*.js"
  ],
  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  "synchronize": true,
  "ssl": true,
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
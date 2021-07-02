module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "extra": {
    ssl: true
  },
  "entities": [
    "./dist/models/*.js"
  ],
  "migrations": [
    "./dist/database/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
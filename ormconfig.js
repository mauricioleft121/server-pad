module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "ssl": true,
  "extra": {
    "ssl": {
      "rejectUnauthorized": false
    }
  },
  "entities": [
    "./dist/models/*.ts"
  ],
  "migrations": [
    "./dist/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
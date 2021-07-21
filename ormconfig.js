module.exports = {
  "type": "postgres",
  "url" : process.env.DATABASE_URL,
  "ssl": true,
  "entities": [
    "./src/models/*.ts"
  ],
  "migrations": [
    "./src/database/migrations/*.ts"
  ],
  "cli": {
    "migrationsDir": "./src/database/migrations"
  }
}
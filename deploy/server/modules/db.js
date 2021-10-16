const knex = require('knex');

module.exports = {
  db: knex({
    client: "pg", // pg for postgres
    connection: {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false }
    }
  })
};

const mysql = require('mysql');
const faker = require('faker');
const { config } = require('./config');

async function query(sql) {
  const conn = mysql.createConnection(config);
  
  for(let i =0; i < 10; i++) {
    const name = faker.name.findName()
    const insertCommand = `INSERT INTO people (name) VALUES ('${name.replace(/'/g, '')}')`;
    console.log(insertCommand);
    conn.query(insertCommand)
  }

  const queryPromise = new Promise((resolve, reject) => {
    conn.query(sql, function (error, results) {
      if (error) reject(error);

      resolve(results)
    })
  })

  const queryResults = await queryPromise;

  conn.end();
  return queryResults;
}

const Repository = {
  query
}

module.exports = { Repository }
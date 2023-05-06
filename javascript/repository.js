const mysql = require('mysql');
const faker = require('faker');
const { config } = require('./config');

async function query(sql) {
  const conn = mysql.createConnection(config);
  
  const createTable = `create table if not exists people (id int not null AUTO_INCREMENT, name varchar(255), PRIMARY KEY (id))`;
  conn.query(createTable);

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
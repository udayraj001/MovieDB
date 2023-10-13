const { Client } = require("pg");

const client = new Client("postgresql://udayraj:keOhP6ndc4N01bbkiBeyYw@dense-marten-6538.8nk.cockroachlabs.cloud:26257/uday?sslmode=verify-full");

    
(async () => {
  await client.connect();
  try {
    await client.query(`CREATE TABLE IF NOT EXISTS Users ( 
        email VARCHAR(50) PRIMARY KEY,    
        password VARCHAR(50)
      );`);
    const results = await client.query(`SELECT * FROM Users`);
    console.log(results.rows);
    console.log("Database Connection");
  } catch (err) {
    console.error("error executing query:", err);
  } finally {
    //client.end();
  }
})();
module.exports = client;
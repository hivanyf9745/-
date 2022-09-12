const { Pool, Client } = require('pg');
const connectionString =
  'postgresql://postgres:new_password@127.0.0.1:5432/xian';
const pool = new Pool({
  connectionString,
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});
const client = new Client({
  connectionString,
});
client.connect();
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  client.end();
});

const mysql = require('mysql');

module.exports = () => {
  return mysql.createConnection({
    host: '128.199.45.70',
    port:'33060',
    user: 'root',
    password: 'admin12345',
    database: 'Spotify'
  });
}

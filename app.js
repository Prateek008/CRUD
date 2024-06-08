const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/db.config.js');


const connection = mysql.createConnection({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

connection.connect(error => {
  if (error) throw error;
  console.log("Connected to MySQL database.");
});

const app = express();
app.use(bodyParser.json());


require('./routes/job.routes.js')(app);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

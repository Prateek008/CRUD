const sql = require("mysql").createConnection({
    host: require("../config/db.config.js").HOST,
    user: require("../config/db.config.js").USER,
    password: require("../config/db.config.js").PASSWORD,
    database: require("../config/db.config.js").DB
  });
  
  exports.create = (req, res) => {
    const newJob = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location
    };
  
    sql.query("INSERT INTO jobs SET ?", newJob, (err, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send({ message: "Some error occurred while creating the Job." });
      }
      res.send('Job created successfully!');
    });
  };
  
  exports.findAll = (req, res) => {
    sql.query("SELECT * FROM jobs", (err, results) => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send({ message: "Some error occurred while retrieving jobs." });
      }
      res.send(results);
    });
  };
  
  exports.findOne = (req, res) => {
    const jobId = req.params.id;
    sql.query("SELECT * FROM jobs WHERE id = ?", [jobId], (err, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send({ message: "Some error occurred while retrieving the job." });
      }
      res.send(result[0]);
    });
  };
  
  exports.update = (req, res) => {
    const jobId = req.params.id;
    const updatedJob = {
      title: req.body.title,
      description: req.body.description,
      location: req.body.location
    };
  
    sql.query("UPDATE jobs SET ? WHERE id = ?", [updatedJob, jobId], (err, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send({ message: "Some error occurred while updating the job." });
      }
      res.send('Job updated successfully!');
    });
  };
  
  exports.delete = (req, res) => {
    const jobId = req.params.id;
  
    sql.query("DELETE FROM jobs WHERE id = ?", [jobId], (err, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send({ message: "Some error occurred while deleting the job." });
      }
      res.send('Job deleted successfully!');
    });
  };
  
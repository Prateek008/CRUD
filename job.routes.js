module.exports = app => {
    const jobs = require("../controllers/job.controller.js");
  
    app.post("/create-job", jobs.create);
    app.get("/get-job-listing", jobs.findAll);
    app.get("/get-single-job/:id", jobs.findOne);
    app.put("/update-job/:id", jobs.update);
    app.delete("/delete-job/:id", jobs.delete);
  };
  
// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.post("/api/savebook", (res, req) => {
    db.Book.create(req.body).then(dbBooklist => {
      res.json(dbBooklist);
    });
  });
  app.get("/booklist", res => {
    db.Book.findAll({}).then(dbBooklist => {
      res.json(dbBooklist);
    });
  });
};

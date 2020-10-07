// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.post("/api/savebook", (res, req) => {
    db.Books.create(req.body).then(dbBooklist => {
      res.json(dbBooklist);
    });
  });
  app.get("/booklist", res => {
    db.Books.findAll({}).then(dbBooklist => {
      res.json(dbBooklist);
    });
  });
};

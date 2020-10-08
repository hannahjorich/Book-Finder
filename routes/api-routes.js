// Requiring our models and passport as we've configured it
const db = require("../models");

module.exports = function(app) {
  app.post("/savebook", (req, res) => {
    db.Book.create(req.body).then(dbBooklist => {
      res.json(dbBooklist);

      // req.body).then(dbBooklist => {
      // // res.json(dbBooklist);
    });
  });
  app.get("/booklist", (req, res) => {
    db.Book.findAll({}).then(dbBooklist => {
      res.json(dbBooklist);
    });
  });
  // app.delete("/api/booklist/:id", (req, res) => {
  //   db.User.destroy({
  //     where: {
  //       id: req.params.id
  //     }
  //   }).then(dbBooklist => {
  //     res.json(dbBooklist);
  //   });
  // });
};

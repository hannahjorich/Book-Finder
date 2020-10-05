const db = require("../models");

module.exports = function(app) {
  app.get("/api/users", (req, res) => {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Book
    db.User.findAll({
      include: [db.Book]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.get("/api/users/:id", (req, res) => {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Book
    db.User.findOne({
      where: {
        id: req.params.id
      },
      include: [db.Book]
    }).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.post("/api/users", (req, res) => {
    db.User.create(req.body).then(dbUser => {
      res.json(dbUser);
    });
  });

  app.delete("/api/users/:id", (req, res) => {
    db.User.destroy({
      where: {
        id: req.params.id
      }
    }).then(dbUser => {
      res.json(dbUser);
    });
  });
};

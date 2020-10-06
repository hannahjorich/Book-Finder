// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
// const isAuthenticated = require("../config/middleware/isAuthenticated");

// Routes

module.exports = function(app) {
  // index route loads view.html
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stylesheets/home.html"));
  });

  // top 100 route loads the NYT best sellers
  app.get("/top100.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stylesheets/top100.html"));
  });

  // findbooks route loads findbooks.html
  app.get("/findbooks.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stylesheets/findbooks.html"));
  });

  // booklist rout loads the booklist.html
  app.get("/booklist.html", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/stylesheets/booklist.html"));
  });
};

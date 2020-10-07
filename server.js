// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
app.use(
  session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

// Requiring our routes
require("./routes/html-routes.js")(app);
require("./routes/api-routes.js")(app);

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(
      "==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.",
      PORT,
      PORT
    );
  });
});
const fs = require("fs")
const inquirer = require("inquirer")
const generateMarkdown= require("./generateMarkdown")

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) throw err;
        console.log('Saved!');
    });
}
// function to initialize program
function init() {
  inquirer.prompt([
      {
          type: "input",
          name: "title",
          message: "what is the title?"
      },
      {
          type: "input",
          name: "description",
          message: "what is the description?"
      },
      {
          type: "input",
          name: "installation",
          message: "what is the installation?"
      },
      {
          type: "input",
          name: "userStory",
          message: "what is the user story"
      },
      {
          type: "input",
          name: "contributing",
          message: "how does one contribute?"
      },
      {
          type: "input",
          name: "features",
          message: "what are the features?"
      },
      {
          type: "list",
          name: "license",
          message: "what is license does your project use?",
          choices: ["MIT","GPLv2"]
      },
  ]).then(function (answers) {
      const mdText= generateMarkdown(answers)
      writeToFile("output.md",mdText)
  })
}

// function call to initialize program
init();

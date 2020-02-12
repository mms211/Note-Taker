// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------

  // app.get("/", function(req, res) {
  //   console.log("In / Route");
  //   res.sendFile(path.join(__dirname, "../html/index.html"));
  // });

  app.get("/notes", function(req, res) {
    console.log("In Notes Route");
    res.sendFile(path.join(__dirname, "../public/html/notes.html"));
  });

  // If no matching route is found default to home
  app.get("*", function(req, res) {
    console.log("In * Route");
    res.sendFile(path.join(__dirname, "../public/html/index.html"));
  });
};

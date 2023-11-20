// index.js
// where your node app starts

// init project
var express = require("express");
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use("/public", express.static(__dirname + "/public"));

// http://expressjs.com/en/starter/basic-routing.html
app.route("/").get((req, res) => {
  res.sendFile(__dirname + "/views/index.html");
});

// your first API endpoint...
app.route("/api/hello").get((req, res) => {
  res.json({ greeting: "hello API" });
});

app.route("/api").get((req, res) => {
  const currentDate = new Date();
  res.json({ unix: currentDate.getTime(), utc: currentDate.toUTCString() });
});

app.route("/api/:date").get((req, res) => {
  const dateString = req.params.date;
  const dateFormat = /^\d{4}-\d{2}-\d{2}$/;
  const numPattern = /^\d+-\d+-\d+$/;
  var dateObject = new Date(req.params.date);
  if (dateFormat.test(dateString)) {
    dateObject = new Date(dateString);
  } else if (numPattern.test(dateString)) {
    dateObject = new Date("Invalid Date");
  } else {
    var unixTimestamp = parseInt(dateString, 10);
    if (!isNaN(unixTimestamp) && unixTimestamp > 10000) {
      var unixDate = new Date(unixTimestamp * 1000);
      if (!isNaN(unixDate.getTime())) {
        dateObject = new Date(parseInt(dateString));
      }
    }
  }

  dateObject.toString() === "Invalid Date"
    ? res.json({ error: dateObject.toString() })
    : res.json({ unix: dateObject.getTime(), utc: dateObject.toUTCString() });
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log("Your app is listening on port " + listener.address().port);
});

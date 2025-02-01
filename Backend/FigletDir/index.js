const figlet = require("figlet");

console.log("Starting Figlet...");

figlet("Happy Anjali", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

console.log("Figlet execution done finally.");


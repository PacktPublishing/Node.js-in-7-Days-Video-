const argv = require("yargs").option("f", {
  alias: "file",
  demandOption: true,
  describe: "x marks the spoot",
  type: "string"
}).argv;

console.log(argv);

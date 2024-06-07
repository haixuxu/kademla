const Node = require("./");

const node = new Node();

node.bootstrap({
  host: "127.0.0.1",
  port: "4201",
  seeds: [
    "127.0.0.1:4202",
    "127.0.0.1:4203",
  ],
});

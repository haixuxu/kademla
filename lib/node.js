const Router = require("./router");

class Node {
  constructor() {
    this._router = new Router();
  }
  bootstrap(config) {
    this.host = config.host;
    this.port = config.port;
    this.seeds = config.seeds;
    
  }
  // sha1 key
  get(key) {
    // TODO
  }
  put(key, value) {
    // TODO
  }
}

module.exports = Node;

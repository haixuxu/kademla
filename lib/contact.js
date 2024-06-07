const crypto = require("crypto");

class Contact {
  constructor(addr, port) {
    this.addr = addr;
    this.port = port;
  }
  get NodeId() {
    // prettier-ignore
    return crypto.createHash("sha1").update(`${this.addr}:${this.port}`).digest("hex");
  }
}

module.exports = Contact;

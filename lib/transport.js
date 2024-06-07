const dgram = require("dgram");

class UdpTransport {
  constructor(host, port) {
    this.host = host;
    this.port = port;
  }
  open() {
    // 创建UDP套接字
    const socket = dgram.createSocket("udp4");
    // 监听消息事件
    socket.on("message", (msg, rinfo) => {
      console.log(
        `Received message: ${msg} from ${rinfo.address}:${rinfo.port}`
      );
    });
    // 监听错误事件
    socket.on("error", (err) => {
      console.error(`Socket error: ${err}`);
    });
    // 绑定套接字到指定端口
    socket.bind(this.port, this.host);
  }
}

module.exports = UdpTransport;

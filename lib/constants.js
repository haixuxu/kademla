// https://xlattice.sourceforge.net/components/protocol/kademlia/specs.html
module.exports = {
  ALPHA: 3,
  B: 160,
  K: 20,
  T_EXPIRE: 86400, // 密钥/值对到期的时间；这是从最初出版日期起的生存时间（TTL）
  T_REFRESH: 3600, // 之后，必须刷新一个未处理的bucket
  T_REPLICATE: 3600, // 当需要节点发布其整个数据库时，Kademlia复制事件之间的间隔
  T_REPUBLISH: 86400, // 原始发布者必须重新发布键/价值对的时间
  MESSAGE_TYPE:[
    "PING",
    "STORE",
    "FIND_NODE",
    "FIND_VALUE"
  ]
};

import { rpc, sc, u } from "@cityofzion/neon-core";

const url = "http://localhost:20332";

const rpcClient = new rpc.RPCClient(url);


const crypto = require('crypto');
export const hashed = (data) => {
  return crypto.createHmac('sha256', process.env.REACT_APP_HMAC_HASH_SALT ).update(data).digest('hex');
};
let server = {
  port: 3000
};

let mongoDb = {
  address: '127.0.0.1',
  port: 27017,
  dbName: 'sentinelSwixer'
};

let decimals = {
  'PIVX': 0,
  'SENT': 8,
  'ETH': 18,
  'BNB': 18
}

let pivxChain = `https://chainz.cryptoid.info/explorer/tx.raw.dws?coin=pivx&id=`

module.exports = {
  server,
  mongoDb,
  decimals,
  pivxChain
};
const {Blockchain,Transaction} = require('./blockchain');
const EC = require('elliptic').ec; 
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('1e08c9c1ff34335edaaea5c31cddcc2192ca07ca9064fcd9bedcd9437e1624b0');
const myWalletAddress = myKey.getPublic('hex');

let BTC = new Blockchain();

const tx1 = new Transaction(myWalletAddress,'public key goes here',10);
tx1.signTransaction(myKey);
BTC.addTransaction(tx1);

console.log('\n Strating the miner ... ');
BTC.miningPendingTransactions(myWalletAddress);

console.log('\nBalance of meesay is', BTC.getBalanceOfAddress(myWalletAddress));


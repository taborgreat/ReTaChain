/**
 @class
 @param

 * **/

 export default class Blockchain {
	constructor() {
	  this.chain = [];
	  this.pendingTransactions = [];
	}
  
	createNewBlock(previousBlockHash, hash) {
	  const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pendingTransactions,
		nonce: 0, //fill in once proof of... is established
		hash: hash,
		previousBlockHash: previousBlockHash,
	  };
  
	  this.pendingTransactions = [];
	  this.chain.push(newBlock);
  
	  return newBlock;
	}
  
	getLastBlock() {
	  return this.chain[this.chain.length - 1];
	}
  
	createNewTransaction(amount, sender, receiver) {
	  const newTransaction = {
		amount: amount,
		sender: sender,
		receiver: receiver,
	  };
	  this.pendingTransactions.push(newTransaction);
  
	  return this.getLastBlock()['index'] + 1;
	}
  }
  

  

/* PREVIOUS CODE

class Block{
constructor({previousHash,transactions = [],date}={}){
		this.previousHash = previousHash
		this.transactions = transactions
		this.date = date
		this.chainHash = hash(previousHash,transactions, date)
		this.nonce = 0
}

}

*/

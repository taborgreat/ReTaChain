import sha256 from 'sha256';


/**
 @class
 @param

 * **/

 export default class Blockchain {
	constructor() {
	  this.chain = [];
	  this.pendingTransactions = [];

	  this.createNewBlock(100, '0', '0'); // genesis block
	}
  
	createNewBlock(nonce, previousBlockHash, hash) {
	  const newBlock = {
		index: this.chain.length + 1,
		timestamp: Date.now(),
		transactions: this.pendingTransactions,
		nonce: nonce, //fill in once proof of... is established
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

	hashBlock(previousBlockHash, currentBlockData, nonce){
		const dataAsString = previousBlockHash + nonce.toString() + JSON.stringify(currentBlockData);
		const hash = sha256(dataAsString);
		return hash;
	}

	proofOfWork(previousBlockHash, currentBlockData){
		let nonce = 0;
		let hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
		while (hash.substring(0,4) !== '0000') {
			nonce++;
			hash = this.hashBlock(previousBlockHash,currentBlockData,nonce);
		}
		console.log("block returned with '0000' at: " + nonce + " nonce")
		return nonce;
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

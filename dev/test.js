import Blockchain from './classes/Blockchain.js';
import { ledgerBasic } from './ledger.js';

const RetaChain = new Blockchain();




//fill block with transactions from ledger
for(let tx in ledgerBasic){
  RetaChain.createNewTransaction(ledgerBasic[tx].amount, ledgerBasic[tx].sender, ledgerBasic[tx].receiver);
}




//create the new block by running proof of work method until nonce is '0000'. once found, pending transactions submitted and cleared
RetaChain.createNewBlock(RetaChain.proofOfWork('fdsfsdfsdfsdfsd', RetaChain.pendingTransactions), '0xff3f43dd', '0xjokfdsfsdf');


for(let tx in ledgerBasic){
    RetaChain.createNewTransaction(ledgerBasic[tx].amount, ledgerBasic[tx].sender, ledgerBasic[tx].receiver);
  }

RetaChain.createNewBlock(RetaChain.proofOfWork('43g434', RetaChain.pendingTransactions), '0x98f98439j443', '0x89j493jf3443');

console.log(RetaChain);
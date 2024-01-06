import express from 'express'
import Blockchain from './classes/Blockchain.js'

const retachain = new Blockchain();
const nodeAddress = "0x3232dk"

const app = express();
app.use(express.json());



app.get('/blockchain', (req,res)=>{
    res.send(retachain);
})

app.post('/transaction', (req,res)=>{
    const blockIndex = retachain.createNewTransaction(req.body.amount, req.body.sender, req.body.receiver);
    res.json({
        note: 'Transaction will be mined in block ${blockIndex}.'
    });
})

app.get('/mine', (req,res)=>{
    const lastBlock = retachain.getLastBlock();
    const previousBlockHash = lastBlock['hash'];
    const currentBlockData = {
        transaction: retachain.pendingTransactions,
        index: lastBlock['index'] + 1
    }
    const nonce = retachain.proofOfWork(previousBlockHash, currentBlockData);
    const blockHash = retachain.hashBlock(previousBlockHash, currentBlockData, nonce);

    //mine rewards
    retachain.createNewTransaction(100, "00", nodeAddress);

    const newBlock = retachain.createNewBlock(nonce, previousBlockHash, blockHash);
    res.json({
        note: "New block mined successfully",
        nonce: nonce,
        block:  newBlock
    })
})



app.listen(3000, ()=>
{
    console.log('listening')
})
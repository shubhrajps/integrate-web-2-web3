// To compile the demo.sol file
solc = require('solc');
// To read the demo.sol file
fs=require('fs');
// To connect the file to the blockchain
Web3 = require('web3');

let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

let fileContent = fs.readFileSync("demo.sol").toString();

console.log("File content: " + fileContent);

// Input format for solidity
var inputForSolc = {
    language: "Solidity",
    sources: {
        "demo.sol": {
            content: fileContent
        },
    },
    settings: {
        outputSelection: {
            "*": {
                "*": ["*"]
            },
        },
    },
};

// Output from solc compiler
var output = JSON.parse(solc.compile(JSON.stringify(inputForSolc)));
console.log("Output: " + output);

// Display the ABI and bytecode
ABI = output.contracts["demo.sol"]["demo"].abi;
bytecode = output.contracts["demo.sol"]["demo"].evm.bytecode;
console.log("ABI:", ABI);
console.log("Bytecode:", bytecode);
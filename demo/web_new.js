// To compile the demo.sol file
solc = require("solc");
// To read the demo.sol file
fs = require("fs");
// To connect the file to the blockchain
const { Web3 } = require("web3");

let web3 = new Web3("http://127.0.0.1:7545");

let fileContent = fs.readFileSync("demo.sol").toString();

console.log("File content: " + fileContent);

// Input format for solidity
var inputForSolc = {
  language: "Solidity",
  sources: {
    "demo.sol": {
      content: fileContent,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
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

// Deploy the contract to local ganache blockchain
const contractInstance = new web3.eth.Contract(ABI);
contractInstance.handleRevert = true;

async function deploy() {
  const providersAccounts = await web3.eth.getAccounts();
  const defaultAccount = providersAccounts[0];
  console.log("Deployer account:", defaultAccount);

  const contractDeployer = contractInstance.deploy({
    data: "0x" + bytecode.object,
    arguments: [1],
  });

  const gas = await contractDeployer.estimateGas({
    from: defaultAccount,
  });
  console.log("Estimated gas:", gas);

  try {
    const tx = await contractDeployer.send({
      from: defaultAccount,
      gas,
      gasPrice: 10000000000,
    });
    console.log("Contract deployed at address: " + tx.options.address);
  } catch (error) {
    console.error(error);
  }
}

deploy();

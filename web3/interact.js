const { Web3 } = require("web3");
const path = require("path");
const fs = require("fs");

const web3 = new Web3("http://127.0.0.1:7545/");

// Read the contract address from the file system
const deployedAddressPath = path.join(__dirname, "MyContractAddress.txt");
const deployedAddress = fs.readFileSync(deployedAddressPath, "utf8");

// Create a new contract object using the ABI and address
const abi = require("./MyContractAbi.json");
const myContract = new web3.eth.Contract(abi, deployedAddress);
myContract.handleRevert = true;

async function interact() {
  const accounts = await web3.eth.getAccounts();
  const defaultAccount = accounts[0];

  try {
    // Get the current value of my number
    const myNumber = await myContract.methods.myNumber().call();
    console.log("myNumber value: " + myNumber);

    // Increment my number
    const receipt = await myContract.methods
      .setMyNumber(BigInt(myNumber) + 1n)
      .send({
        from: defaultAccount,
        gas: 1000000,
        gasPrice: "10000000000",
      });
    console.log("Transaction Hash: " + receipt.transactionHash);

    // Get the updated value of my number
    const myNumberUpdated = await myContract.methods.myNumber().call();
    console.log("myNumber updated value: " + myNumberUpdated);
  } catch (error) {
    console.error(error);
  }
}

interact();

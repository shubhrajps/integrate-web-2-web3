# Web3 Frontend - Smart Contract Integration

This project demonstrates how to connect a frontend application to a smart contract using web3.js. The frontend is built with React, and it interacts with a Solidity smart contract deployed on the Ethereum blockchain.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Smart Contract](#smart-contract)
- [Frontend](#frontend)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js and npm installed on your machine
- Truffle or Hardhat for smart contract development and deployment
- An Ethereum development environment (e.g., Ganache, Infura, or a local Ethereum node)

## Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/shubhrajps/web3-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd web3-project
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

## Usage

1. Compile and deploy the smart contract using Truffle or Hardhat.

2. Update the contract address and ABI in the frontend code.

3. Start the development server:

    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000` to interact with the frontend.

## Smart Contract

The smart contract is written in Solidity and contains the following functionality:

- Function to store a value
- Function to retrieve the stored value

## Frontend

The frontend is built with React and uses web3.js to interact with the smart contract. It includes the following components:

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
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

3. Start the blockchain:

    ```bash
    node index.js
    ```
4. Run interact.js to update the number
   ```bash
   node interact.js
   ```

## Smart Contract

The smart contract is written in Solidity and contains the following functionality:

- Function to update the value

## Frontend

The front end is built with React and uses web3.js to interact with the smart contract. It includes the following components:

## Screenshots
Accessing the blockchain in the web console
![Screenshot 2024-08-26 at 2 17 59 PM](https://github.com/user-attachments/assets/0546e3db-5501-4397-93c9-c6577becd0fa)

Tracking the blockchain locally
![Screenshot 2024-08-26 at 5 03 56 PM](https://github.com/user-attachments/assets/83968f71-a51b-4c08-9870-9f5770af44be)
![Screenshot 2024-08-26 at 5 01 06 PM](https://github.com/user-attachments/assets/b91adb06-f59b-4a90-871d-c54203aaf0a9)

ABI and bytecode generated
![Screenshot 2024-08-26 at 5 01 14 PM](https://github.com/user-attachments/assets/16b226dc-ad33-44ed-8f14-7c494e9e86b4)

Updating the value via smart contract
![Screenshot 2024-08-26 at 5 01 20 PM](https://github.com/user-attachments/assets/9c64a858-74b7-44df-9246-45c7cc42ca4d)

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, please create a new issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

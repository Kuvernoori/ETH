# SolWallet - Ethereum Smart Contract Wallet

## Title

A simple Ethereum smart contract wallet deployed on a local blockchain (Ganache) for handling ETH deposits, balance checks, and withdrawals.

## Usage

This project includes a Solidity smart contract, `SolWallet`, which allows the contract owner to:
- Deposit ETH into the contract.
- Check the contract's balance.
- Withdraw ETH from the contract.

### Prerequisites

1. **Node.js**: Make sure you have [Node.js](https://nodejs.org/) installed.
2. **Ganache**: This project assumes you're using Ganache as a local Ethereum blockchain. Download and install it from [Ganache](https://www.trufflesuite.com/ganache).
3. **Web3.js**: This project uses Web3.js to interact with the Ethereum blockchain.
4. **Metamask**: This project can connect to metamask wallet through localhost and Ganache

## Features  
- **Transfer to External Wallet**: Send Ether directly to a Metamask or other external wallet. 
- **Ether Deposits**: The contract allows receiving and securely storing Ether.  
- **Balance Inquiry**: Easily view the contract's current Ether balance.  
- **Owner Withdrawals**: Only the contract owner can withdraw all stored Ether.  
 

  
## Examples

In code we have some functionality like deploying contract and interact with him like was stated above


# TrackX24/7

TrackX24/7 is a blockchain based decentralized application(DApp) for supplychain management of dual-use drugs from manfacturer to end-ser.

## Tech Stack
1. node.js
2. truffle
3. ganache
4. IPFS
5. web3
6. solidity
7. HTML/CSS/JS
8. Firebase
 
## Prerequisites

1. Node.js- to check if you have already installed node in your system run the command, node -v (Version v14.16.1)
2. Ganache Personal Blockchain(version)
3. Truffle Framework(version v5.3.0)
4. Install Metamask as Chrome extension

## Setup

To run this on your local system, follow these steps:

1. Clone this repository.
```
      https://github.com/Dharshini1810/supplychain_management_of_dual-drugs
```

2. Install all the dependencies.
```

      npm install
      npm install web3
      npm install -g truffle
      npm install -g truffle contracts
      npm install lite server --save
      
```
3. Open Ganache and connect metamask

4. Run the following command:
```
     run dev
      
```
You're all set! Head to localhost:7545 or http://127.0.0.1:7545 on your browser to check out 'TrackX24/7'.

## Start Development
1. Start new terminal tab and start compiling contract codes

```
    truffle compile

```
2. Test contract using truffle

```
    truffle test

```
3.If you want to test it using front end migrate contract to ganache local network and make sure you copy some addresses to MetaTask. hence, deployer will has all the roles and he is the only one can approve or give regulator role to another address.

```
    truffle migrate --reset

```
4. Locate to Frontend project and start development

```
    cd frontend_project_name && run dev

```

## Built With
1. Solidity - Ethereum's smart contract programming language
2. web3.js - Javascript library used to interact with the Ethereum blockchain

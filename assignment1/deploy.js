const fs = require('fs');
const solc = require('solc');

const Web3 = require('web3').default;
const web3 = new Web3('http://127.0.0.1:7545');

const source = fs.readFileSync('SolWallet.sol', 'utf8');
const input = {
    language: 'Solidity',
    sources: {
        'SolWallet.sol': {
            content: source,
        },
    },
    settings: {
        outputSelection: {
            '*': {
                '*': ['abi', 'evm.bytecode'],
            },
        },
    },
};

const compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));
const abi = compiledContract.contracts['SolWallet.sol'].SolWallet.abi;
const bytecode = compiledContract.contracts['SolWallet.sol'].SolWallet.evm.bytecode.object;
fs.writeFileSync('SolWallet_abi.json', JSON.stringify(abi, null, 2));

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    const result = await new web3.eth.Contract(abi)
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000' });

    console.log('Contract was deployed at adress:', result.options.address);
    console.log('ABI was successfuly saved to Solwallet_abi.json');
};

deploy();

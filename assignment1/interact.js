const abi = require('./SolWallet_abi.json');  
const contractAddress = '0xAd624aCBfbc1FD97551A487Cb87C468729abfeaD'; // must change after deploying 
const Web3 = require('web3').default;
const web3 = new Web3('http://127.0.0.1:7545'); 

const contract = new web3.eth.Contract(abi, contractAddress);
const checkBalance = async () => {
    const balance = await contract.methods.getBalance().call();
    console.log('Contract Balance:', web3.utils.fromWei(balance, 'ether'), 'ETH');
    return balance;
};

/**
 * 
 * @param {string} amount 
 */
const sendEther = async (amount) => {
    const accounts = await web3.eth.getAccounts();
    const valueInWei = web3.utils.toWei(amount, 'ether');
    if (parseFloat(amount) > 0) {
        console.log('Sending', amount, 'ether to the contract...');
        const tx = await web3.eth.sendTransaction({
            from: accounts[0],
            to: contractAddress,
            value: valueInWei,
            gas: 400000
        });
        console.log('Transaction hash:', tx.transactionHash);
        console.log(`${amount} ether was successfully sent to the address!`);
    } else {
        console.log("Amount should be greater than 0 ETH.");
    }
};

const withdrawFunds = async () => {
    const accounts = await web3.eth.getAccounts();
    try {
        await contract.methods.withdraw().send({
            from: accounts[0], 
            gas: 400000
        });
        console.log('Funds were successfully withdrawn by the owner');
    } catch (error) {
        console.error('Error during withdrawal:', error.reason || error.message);
    }
    const updatedBalance = await contract.methods.getBalance().call();
    console.log('Current contract balance after Withdrawal:', web3.utils.fromWei(updatedBalance, 'ether'), 'ETH');
};
const run = async () => {
    await checkBalance();  
    await sendEther('0.5'); 
    await withdrawFunds();   
};
run();

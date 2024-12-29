pragma solidity ^0.8.0;

contract SolWallet {
    address payable public owner;

    constructor() {
        owner = payable(msg.sender);
    }
    receive() external payable {}

    function withdraw() external {
        require(msg.sender == owner, "Only owner can withdraw!");
        payable(msg.sender).transfer(address(this).balance);
    }
    function getBalance() external view returns (uint) {
        return address(this).balance;
    }
}

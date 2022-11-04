//SPDX-License-Identifier: MIT
pragma solidity ^0.8.17;

contract Bank {

    mapping (address => uint256) public bankAccount;

    function deposit(uint256 ethDeposited) external payable{
        bankAccount[msg.sender] = bankAccount[msg.sender] + ethDeposited;
    } 

    function showBalance() external view returns (uint256) {
        return bankAccount[msg.sender];
    }

    function withdraw(uint256 ethWithdraw) external {
        require(bankAccount[msg.sender] >= ethWithdraw, "Not enough balance!");
        bankAccount[msg.sender] = bankAccount[msg.sender] - ethWithdraw;
    }
}
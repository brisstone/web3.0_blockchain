// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Transactions {
    uint256 transactionCount;

    // Function to make the transfer. Transfer is a keyword. 
    // It is later emmited after adding current transaction into the struct transaction array to be sent to the blockchain
    event Transfer(address from, address receiver, uint amount, string message, uint256 timestamp, string keyword);
  
    // Similar to schema of the object 
    struct TransferStruct {
        address sender;
        address receiver;
        uint amount;
        string message;  //additional data
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions;


    //doesn't return anything
    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public {
        transactionCount += 1;

        //msg.sender is gotten immediately a specific function is called in the blockchain, same as block

        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    //public function imply anyone can see it
    //return array of different structure. and this will be gotten from the memory
    function getAllTransactions() public view returns (TransferStruct[] memory) {
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) {
        return transactionCount;
    }
}
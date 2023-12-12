// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.23;

contract EtherFaucet {

    mapping(address => uint256) private lastRequest;

    address private owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(owner == msg.sender, "Not owner");
        _;
    }

    receive() external payable {

    }

    function requestEther() external {

        if(lastRequest[msg.sender] != 0){
            require(lastRequest[msg.sender] + 1 hours <= block.timestamp,"You can only request Ether once per hour");
        }

        require(address(this).balance > 0, "The faucet balance is insufficient.");

        lastRequest[msg.sender] = block.timestamp;

        payable(msg.sender).transfer(0.0001 ether); 
    }

    function withdrawEther() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function transferOwnership(address newOwner) external onlyOwner {
        owner = newOwner;
    }

    function getOwner() public view returns (address) {
        return owner;
    }

}

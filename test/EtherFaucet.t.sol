// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "forge-std/Test.sol";
import "../contracts/EtherFaucet.sol";

contract TestEtherFaucet is Test{
    EtherFaucet private etherFaucet;

    address admin = makeAddr("admin");
    address user = makeAddr("user");

    function setUp() public {
        vm.prank(admin);
        etherFaucet = new EtherFaucet();
    }

    function test_requestEther() external {
        vm.deal(address(etherFaucet), 10 ether);
        uint256 etherFaucetBalance = address(etherFaucet).balance;
        vm.startPrank(user);
        uint256 userBalance = user.balance;
        etherFaucet.requestEther();
        vm.stopPrank();
        assertEq(user.balance, userBalance + 0.0001 ether);
        assertEq(address(etherFaucet).balance, etherFaucetBalance - 0.0001 ether);
    }

    function test_userSpamRequestEther() external {
        vm.deal(address(etherFaucet), 10 ether);
        uint256 etherFaucetBalance = address(etherFaucet).balance;
        vm.startPrank(user);
        etherFaucet.requestEther(); 
        assertEq(user.balance, 0.0001 ether);
        assertEq(address(etherFaucet).balance, etherFaucetBalance - 0.0001 ether);

        etherFaucetBalance = address(etherFaucet).balance;
        vm.expectRevert();
        etherFaucet.requestEther();
        assertEq(user.balance, 0.0001 ether);
        assertEq(address(etherFaucet).balance, etherFaucetBalance);
        vm.stopPrank();
    }

    function test_etherFaucetBalanceInsufficient() external {
        uint256 etherFaucetBalance = address(etherFaucet).balance;
        vm.startPrank(user);
        vm.expectRevert();
        etherFaucet.requestEther();
        vm.stopPrank();
        assertEq(user.balance, 0 ether);
        assertEq(address(etherFaucet).balance, etherFaucetBalance);
    }

    function test_userRequestAndResquestAfterOneHours() external {
        vm.deal(address(etherFaucet), 10 ether);
        uint256 etherFaucetBalance = address(etherFaucet).balance;
        vm.startPrank(user);
        etherFaucet.requestEther(); 
        assertEq(user.balance, 0.0001 ether);
        assertEq(address(etherFaucet).balance, etherFaucetBalance - 0.0001 ether);

        vm.warp(block.timestamp + 1 hours);

        etherFaucetBalance = address(etherFaucet).balance;
        etherFaucet.requestEther();
        assertEq(user.balance, 0.0002 ether);
        assertEq(address(etherFaucet).balance, etherFaucetBalance - 0.0001 ether);
        vm.stopPrank();
    }

    function test_withdrawEther() external {
        vm.deal(address(etherFaucet), 10 ether);
        uint256 etherFaucetBalance = address(etherFaucet).balance;
        vm.startPrank(admin);
        etherFaucet.withdrawEther();
        vm.stopPrank();
        assertEq(address(etherFaucet).balance, 0 ether);
        assertEq(admin.balance, etherFaucetBalance);
    }
    
    function test_transferOwnership() external {
        vm.startPrank(admin);
        etherFaucet.transferOwnership(user);
        vm.stopPrank();
        assertEq(etherFaucet.getOwner(), user);
    }

}
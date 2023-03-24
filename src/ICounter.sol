// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface ICounter {
    event NumberSet(uint256 oldNum, uint256 newNum);

    function setNumber(uint256 newNumber) external;
    function increment() external;
}

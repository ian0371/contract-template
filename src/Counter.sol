// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import "forge-std/console.sol";
import "./ICounter.sol";

contract Counter is ICounter {
    uint256 public number;

    function setNumber(uint256 newNumber) public {
        uint256 oldNumber = number;
        number = newNumber;
        console.log("[Counter] Old=%d New=%d", oldNumber, newNumber);
        emit NumberSet(oldNumber, newNumber);
    }

    function increment() public {
        number++;
    }
}

// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

interface ILock {
    event Withdrawal(uint amount, uint when);

    function withdraw() external;
}

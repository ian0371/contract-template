import { ethers } from "hardhat";

async function setNumbers(counter: ethers.Contract, numList?: BigInt[]) {
  if (numList === undefined) {
    return;
  }
  for (const num of numList) {
    console.log("Setting number:", num);
    let tx = await counter.setNumber(num);
    await tx.wait();
    console.log("number set:", await counter.number());
  }
}

export { setNumbers };

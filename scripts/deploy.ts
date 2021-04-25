import { ethers } from "hardhat";
import { LotteryOnFire__factory, LotteryOnFire } from "../typechain";

async function main(): Promise<void> {
  const [deployer, signer] = await ethers.getSigners();
  console.log(`Deploying contracts with the account ${deployer.address}`);

  const balance = await deployer.getBalance();
  console.log(`Account balance: ${ethers.utils.formatEther(balance.toString())}`);

  const Lottery: LotteryOnFire__factory = (await ethers.getContractFactory("LotteryOnFire")) as LotteryOnFire__factory;
  const lottery: LotteryOnFire = await Lottery.deploy();
  await lottery.deployed();

  console.log("Lottery On Fire deployed to:", lottery.address);

  let tx = await lottery.transfer(signer.address, ethers.utils.parseEther("1"));
  console.log("Created transaction for transfer:", tx.hash);
  await tx.wait();
  console.log("Transaction mined");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error: Error) => {
    console.error(error);
    process.exit(1);
  });

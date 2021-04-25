import { expect } from "chai";
import { ethers } from "hardhat";

import { LotteryOnFire__factory, LotteryOnFire } from "../typechain";

const FEES = 90;

describe("Lotter On Fire", () => {
  let LotteryOnFire: LotteryOnFire__factory, lottery: LotteryOnFire, owner: any, signer1: any, signer2: any;

  beforeEach(async () => {
    const LotteryOnFire = (await ethers.getContractFactory("LotteryOnFire")) as LotteryOnFire__factory;

    [owner, signer1, signer2] = await ethers.getSigners();

    lottery = await LotteryOnFire.deploy();
  });

  describe("After deploy", () => {
    it("Should match inital supply", async () => {
      expect(parseFloat(ethers.utils.formatEther(await lottery.totalSupply()))).equal(10 ** 8);
    });

    it("Should match token name and symbol", async () => {
      expect(await lottery.name()).equal("LotteryOnFire");
      expect(await lottery.symbol()).equal("LOTT");
    });
  });

  describe("Transfer", () => {
    it("should transfer only", async () => {
      const amount = 1;
      const inital_balance = parseFloat(ethers.utils.formatEther(await lottery.balanceOf(signer1.address)));
      const initial_contract_balance = parseFloat(ethers.utils.formatEther(await lottery.balanceOf(lottery.address)));
      let tx = await lottery.transfer(signer1.address, ethers.utils.parseEther(String(1)));
      await tx.wait();
      const final_balance = parseFloat(ethers.utils.formatEther(await lottery.balanceOf(signer1.address)));
      const final_contract_balance = parseFloat(ethers.utils.formatEther(await lottery.balanceOf(lottery.address)));
      expect(final_balance - inital_balance).equal((amount * FEES) / 100);
      expect(final_contract_balance - initial_contract_balance).equal((amount * (100 - FEES)) / 100);
    });
  });
});

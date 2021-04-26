// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract LotteryOnFire is ERC20 {
    uint256 public constant FEES = 90;
    address public constant OWNER = 0x1B790D5d3f267fEb1534c9e6d94257F91aBaD94C;

    constructor() ERC20("LotteryOnFire", "LOTT") {
        // Initial token supply of 100mn
        _mint(OWNER, 10**8 * (10**uint256(decimals())));
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        uint256 transferAmount = (amount * FEES) / 100;
        uint256 devAmount = amount - transferAmount;
        super.transfer(OWNER, devAmount);
        super.transfer(recipient, transferAmount);
        return true;
    }
}

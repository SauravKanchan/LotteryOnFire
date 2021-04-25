// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// @author Saurav Kanchan <sauravnk30@gmail.com>
contract LotteryOnFire is ERC20 {
    uint256 public constant fees = 90;

    constructor() ERC20("LotteryOnFire", "LOTT") {
        // Initial token supply of 100mn
        _mint(msg.sender, 10**8 * (10**uint256(decimals())));
    }

    function transfer(address recipient, uint256 amount) public override returns (bool) {
        uint256 transferAmount = (amount * fees) / 100;
        uint256 devAmount = amount - transferAmount;
        super.transfer(address(this), devAmount);
        super.transfer(recipient, transferAmount);
        return true;
    }
}

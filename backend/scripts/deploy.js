const { ethers } = require("hardhat");

async function main() {
  const bankContract = await ethers.getContractFactory("Bank");
  const deployedBankContract = await bankContract.deploy();
  await deployedBankContract.deployed();
  console.log("Bank Contract Address:", deployedBankContract.address);

  await sleep(50000);
  await hre.run("verify:verify", {
    address: deployedBankContract.address,
    constructorArguments: [],
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

//Bank Contract Address: 0x1eaC271D8385F8141f8AEA78250B54A57Cc4fD34

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
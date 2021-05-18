const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const Teachain = await hre.ethers.getContractFactory("Teachain");
    const teachain = await Teachain.deploy();

    const Token = await hre.ethers.getContractFactory("Token");
    const token = await Token.deploy();

    await teachain.deployed();
    await token.deployed();

    console.log("Greeter deployed to:", teachain.address);
    console.log("Token deployed to:", token.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
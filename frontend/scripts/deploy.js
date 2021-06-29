const hre = require("hardhat");

async function main() {
    const [deployer] = await hre.ethers.getSigners();

    console.log(
        "Deploying contracts with the account:",
        deployer.address
    );

    const Teachain = await hre.ethers.getContractFactory("Teachain");
    const teachain = await Teachain.deploy();

    await teachain.deployed();

    console.log("TeaChain deployed to:", teachain.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
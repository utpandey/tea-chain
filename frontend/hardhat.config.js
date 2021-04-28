require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async() => {
    const accounts = await ethers.getSigners();

    for (const account of accounts) {
        console.log(account.address);
    }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
    solidity: "0.8.3",
    paths: {
        artifacts: './src/artifacts',
    },
    networks: {
        hardhat: {
            chainId: 1337
        },
        ropsten: {
            url: "https://ropsten.infura.io/v3/b64c1b1e360a40cd8338ca8e72b83db4",
            // accounts: [`0x${process.env.ACCOUNT_KEY}`]
            // accounts: ["1a05dad6f74f17415d7a1d6a7b026c6c28ead92ed0d6224035c68f51f834cc75"]
            accounts: ["37f669b41dfabedbe1d3a8f576315afb5ce46463019b306c3736b9ce95b95586"]
        }
    }
};
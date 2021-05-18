const { expect } = require("chai");

describe("Teachain", function() {
  it("Create and return batch id when created", async function() {
    const Teachain = await ethers.getContractFactory("Teachain");
    const [ addr1 ] = await ethers.getSigners();
    const teachain = await Teachain.deploy();
    
    await teachain.deployed();

    const triggerPromise = new Promise((resolve, reject) => {
      teachain.on('BatchCreated', (result) => {
        console.log('emitted', result.toNumber())
        const num = result.toNumber();
        teachain.updateFarmerEntry(num, addr1.address, 'Jack', "Camellia sinensis", "Darjeeling", Math.round(((new Date()).getTime())/10000), 1).then(test => {
          teachain.getBatches(addr1.address).then(test => {
            console.log(test)
            resolve(result);
          })
        });
      })
      setTimeout(()=> {
        reject(new Error("Request Timed Out"));
      }, 5000)
    })
    await triggerPromise

  });
});

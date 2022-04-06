// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

const main = async()=> {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');





  // We get the contract to deploy
  // Transactions is like a funtion factory or a class that is helps generate instances of that specific contract 
  const Transactions = await hre.ethers.getContractFactory("Transactions");
  //one specific instance of our contract
  const transactions = await Greeter.deploy();

  await greeter.deployed();

  
  console.log("Transactions deployed to:", transactions.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.

const runMain = async ()=>{
  try{
      await main();
      process.exit(0)
  }catch(err){
    console.log(err)
    process.exit(1)
  }
}


runMain();
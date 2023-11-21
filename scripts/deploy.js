// imports
require("dotenv").config({ path: process.env.MY_LOCAL_FILE_PATH });
const { ethers, run, network } = require("hardhat");

// async main
async function main() {
  const FundMeFactory = await ethers.getContractFactory("FundMe");
  console.log("Deploying contract...");
  const FundMe = await FundMeFactory.deploy(process.env.COINMARKETCAP_API_KEY);
  await FundMe.waitForDeployment();

  console.log(`Deployed contract to: ${FundMe.target}`);

  //wait for etherscan got the contract
  await FundMe.deploymentTransaction().wait(6);
  await verify(FundMe.target, [process.env.COINMARKETCAP_API_KEY]);
  console.log(`Varify contract done to: ${FundMe.target}`);
}

// async function verify(contractAddress, args) {
const verify = async (contractAddress, args) => {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!");
    } else {
      console.log(e);
    }
  }
};

// main
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

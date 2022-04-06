//https:eth-ropsten.alchemyapi.io/v2/EORD1fZXCT_drIFBNg1WaNFY4RrG_RVL

require("@nomiclabs/hardhat-waffle");
//  plugin to build smart contract tests using Waffle in Hardhat, taking advantage of both.

// This plugin adds a Hardhat-ready version of Waffle to the Hardhat Runtime Environment,
// and automatically initializes the Waffle Chai matchers (opens new window).

// #

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/EORD1fZXCT_drIFBNg1WaNFY4RrG_RVL",
      //Metamask Private key
      accounts: [
        "970047409121f3fde4d78afbc557b44e9b80329052e9db8a7180c78e15f918cc",
      ],
    },
  },
};

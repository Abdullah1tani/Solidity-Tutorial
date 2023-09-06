require("@nomicfoundation/hardhat-toolbox");

const infuraKey = /** INFURA KEY */ ;
const privateKey = /** PRIVATE KEY */ ;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [privateKey]
    }
  }
};

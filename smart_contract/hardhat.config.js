//https://eth-ropsten.alchemyapi.io/v2/RFsbC4N2nAaDg6hxI9x6Q7ItMHZQiTEg

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/RFsbC4N2nAaDg6hxI9x6Q7ItMHZQiTEg",
      accounts:["19d43f021763151997a2fadf8ad82ef8b3d523362f5423070d2a55b246019c27"]
    },
  },
};
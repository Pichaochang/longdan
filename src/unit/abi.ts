// 团队ABI
export const teamAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"CHILD1","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"CHILD2","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DIRECT_RECOMM_PARENT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"IS_BLACK","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MEMBER_LEVEL","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MEMBER_U","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"PARENT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TEAM_MEMBER_CNT","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_BONUS_LP","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_DIRECT_REC_REWARD_LP","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_POWER","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_TEAM_POWER","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"TOTAL_TEAM_REC_REWARD_LP","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"UNCLAIMED_BONUS_LP","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"USER_ADDRESS","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"incData","type":"uint256"}],"name":"addBonusLP","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"incData","type":"uint256"}],"name":"addDirectRecReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"incData","type":"uint256"}],"name":"addPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"incData","type":"uint256"}],"name":"addTeamReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"incData","type":"uint256"}],"name":"addTotalBuyUSDT","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"addrs","type":"address[]"},{"internalType":"address","name":"recAddr","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"batchSeat","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bfsMaxDeep","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"directRecList","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_key","type":"string"}],"name":"getAddressData","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getDirectRecInfo","outputs":[{"internalType":"address","name":"directRecAddr","type":"address"},{"internalType":"uint256","name":"directRecLevel","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getDirectRecList","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_key","type":"string"}],"name":"getIntData","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getMemberBuyU","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getMemberLevel","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getPowerUT","outputs":[{"internalType":"uint256","name":"uPower","type":"uint256"},{"internalType":"uint256","name":"tPower","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"root","type":"address"}],"name":"getTeamRoot","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTeamRoots","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getTeamTotalPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"num","type":"uint256"}],"name":"getTeamUpParentsAndLevels","outputs":[{"internalType":"address[]","name":"","type":"address[]"},{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUserInfo","outputs":[{"components":[{"internalType":"address","name":"userAddr","type":"address"},{"internalType":"address","name":"directRecAddr","type":"address"},{"internalType":"address","name":"parentAddr","type":"address"},{"internalType":"address","name":"c1Addr","type":"address"},{"internalType":"address","name":"c2Addr","type":"address"},{"internalType":"uint256","name":"totalPower","type":"uint256"},{"internalType":"uint256","name":"level","type":"uint256"},{"internalType":"uint256","name":"teamMemCnt","type":"uint256"},{"internalType":"uint256","name":"totalBounsLp","type":"uint256"},{"internalType":"uint256","name":"unClaimBounsLp","type":"uint256"},{"internalType":"uint256","name":"totalDirectRecRewardLp","type":"uint256"},{"internalType":"uint256","name":"totalTeamRewardLp","type":"uint256"},{"internalType":"uint256","name":"totalBuyU","type":"uint256"}],"internalType":"struct Team22Fall.UserInfo","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"initRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"isAlreadySeat","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"newLevel","type":"uint256"},{"internalType":"uint256","name":"incPower","type":"uint256"}],"name":"memberUpgrade","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"queueMaxSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"incData","type":"uint256"}],"name":"reducePower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recAddr","type":"address"},{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"seat","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"recAddr","type":"address"},{"internalType":"address","name":"parentAddr","type":"address"},{"internalType":"address","name":"_address","type":"address"},{"internalType":"uint256","name":"level","type":"uint256"}],"name":"seat","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_key","type":"string"},{"internalType":"address","name":"_value","type":"address"}],"name":"setAddressValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxDeep","type":"uint256"}],"name":"setBfsMaxDeep","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"},{"internalType":"string","name":"_key","type":"string"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"setIntValue","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setManagerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"size","type":"uint256"}],"name":"setQueueMaxSize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"root","type":"address"},{"internalType":"bool","name":"isRoot","type":"bool"}],"name":"setTeamRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"totalPower","type":"uint256"}],"name":"setTotalTeamPower","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"setWList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"teamRootKeys","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"teamRoots","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalTeamPower","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]

// 麒麟Abi
export const qiLinAbi = [
  {
      "type": "constructor",
      "inputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "buyPowerU",
      "inputs": [
          {
              "name": "recAddr",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "amountU",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "daoAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "daoRatio",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "decimals",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint8",
              "internalType": "uint8"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "directRecAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "directRecRewardRatio",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "doorLockFlag",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint8",
              "internalType": "uint8"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "extractErc20",
      "inputs": [
          {
              "name": "token",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "to",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "value",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "getAmounLpOut",
      "inputs": [
          {
              "name": "amountInU",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getAmountMaticOut",
      "inputs": [
          {
              "name": "amountInLp",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getAmountUFromMatic",
      "inputs": [
          {
              "name": "amountMatic",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getAmountUsdtOut",
      "inputs": [
          {
              "name": "amountInLp",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getCanBuyAmoutMatic",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "getDoorLockFlag",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint8",
              "internalType": "uint8"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "hourlyTotalAmount",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "lastHour",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "lastMinute",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "levelBuyArr",
      "inputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "levelUsdtArr",
      "inputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "marketingAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "maticAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "maxTeamDeep",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "minutelySellAmount",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "minutelyTotalAmount",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "nodeAddressList",
      "inputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "nodeAddressRatio",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "operationalAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "operationalRatio",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "purchase",
      "inputs": [
          {
              "name": "amounInputMatic",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "_hashedMessage",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "_v",
              "type": "uint8",
              "internalType": "uint8"
          },
          {
              "name": "_r",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "_s",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "outputs": [],
      "stateMutability": "payable"
  },
  {
      "type": "function",
      "name": "qlAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "renounceOwnership",
      "inputs": [],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "secureAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "secureRatio",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "sell",
      "inputs": [
          {
              "name": "amountLp",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "_hashedMessage",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "_v",
              "type": "uint8",
              "internalType": "uint8"
          },
          {
              "name": "_r",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "_s",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "sellFeeAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "sellFeeRatio",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "setDaoAddress",
      "inputs": [
          {
              "name": "_daoAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setDirectRecRatio",
      "inputs": [
          {
              "name": "ratio",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setDoorLockFlag",
      "inputs": [
          {
              "name": "_doorLockFlag",
              "type": "uint8",
              "internalType": "uint8"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setMAddress",
      "inputs": [
          {
              "name": "addr",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setMarketingAddress",
      "inputs": [
          {
              "name": "_marketingAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setMaxTeamDeep",
      "inputs": [
          {
              "name": "_maxTeamDeep",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setOperationalAddress",
      "inputs": [
          {
              "name": "_operationalAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setQlAddress",
      "inputs": [
          {
              "name": "_qlAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setSellFeeAddress",
      "inputs": [
          {
              "name": "_sellFeeAddress",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setSellFeeRatio",
      "inputs": [
          {
              "name": "sellRatio",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setTeamAddress",
      "inputs": [
          {
              "name": "team22FallContract",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "setWList",
      "inputs": [
          {
              "name": "addr",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "flag",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "string",
              "internalType": "string"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "teamAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
          {
              "name": "newOwner",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "uniswapV2Pair",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "uniswapV2Router",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "upgradeQL",
      "inputs": [
          {
              "name": "recAddr",
              "type": "address",
              "internalType": "address"
          },
          {
              "name": "amountU",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "memberLevel",
              "type": "uint256",
              "internalType": "uint256"
          },
          {
              "name": "_hashedMessage",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "_v",
              "type": "uint8",
              "internalType": "uint8"
          },
          {
              "name": "_r",
              "type": "bytes32",
              "internalType": "bytes32"
          },
          {
              "name": "_s",
              "type": "bytes32",
              "internalType": "bytes32"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "function",
      "name": "usdtAddress",
      "inputs": [],
      "outputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "wList",
      "inputs": [
          {
              "name": "",
              "type": "address",
              "internalType": "address"
          }
      ],
      "outputs": [
          {
              "name": "",
              "type": "bool",
              "internalType": "bool"
          }
      ],
      "stateMutability": "view"
  },
  {
      "type": "function",
      "name": "withdraw",
      "inputs": [
          {
              "name": "wad",
              "type": "uint256",
              "internalType": "uint256"
          }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
  },
  {
      "type": "event",
      "name": "OwnershipTransferred",
      "inputs": [
          {
              "name": "previousOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "newOwner",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "PurchaseQL",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "amountU",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "SellQLLP",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "amountLP",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          },
          {
              "name": "amountU",
              "type": "uint256",
              "indexed": true,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  },
  {
      "type": "event",
      "name": "UpgradeQL",
      "inputs": [
          {
              "name": "account",
              "type": "address",
              "indexed": true,
              "internalType": "address"
          },
          {
              "name": "amountU",
              "type": "uint256",
              "indexed": false,
              "internalType": "uint256"
          }
      ],
      "anonymous": false
  }
]
// lpAbi
export const lpAbi = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Burn","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1","type":"uint256"}],"name":"Mint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1In","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount0Out","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount1Out","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint112","name":"reserve0","type":"uint112"},{"indexed":false,"internalType":"uint112","name":"reserve1","type":"uint112"}],"name":"Sync","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"DOMAIN_SEPARATOR","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"MINIMUM_LIQUIDITY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"PERMIT_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"burn","outputs":[{"internalType":"uint256","name":"amount0","type":"uint256"},{"internalType":"uint256","name":"amount1","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"getReserves","outputs":[{"internalType":"uint112","name":"_reserve0","type":"uint112"},{"internalType":"uint112","name":"_reserve1","type":"uint112"},{"internalType":"uint32","name":"_blockTimestampLast","type":"uint32"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"_token0","type":"address"},{"internalType":"address","name":"_token1","type":"address"}],"name":"initialize","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"kLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"mint","outputs":[{"internalType":"uint256","name":"liquidity","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"permit","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"price0CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"price1CumulativeLast","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"skim","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount0Out","type":"uint256"},{"internalType":"uint256","name":"amount1Out","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"swap","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"sync","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"token0","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"token1","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"}]

// 分红ABI
export const fenHongAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"account","type":"address"},{"indexed":true,"internalType":"uint256","name":"amtLp","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amtU","type":"uint256"}],"name":"Claim","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"recAddr","type":"address"},{"indexed":false,"internalType":"uint256","name":"amountU","type":"uint256"}],"name":"FundQL","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"MineBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"MinePushUp","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"_address","type":"address"},{"indexed":false,"internalType":"uint256","name":"num","type":"uint256"}],"name":"TeamRootBonus","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"bonusAccount","type":"address"},{"indexed":true,"internalType":"address","name":"unClaimAccount","type":"address"},{"indexed":false,"internalType":"uint256","name":"lpBalance","type":"uint256"}],"name":"TransferDailyLPtoBonusAccountQL","type":"event"},{"inputs":[],"name":"TransferDailyLPtoBonusAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bonusAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_hashedMessage","type":"bytes32"},{"internalType":"uint8","name":"_v","type":"uint8"},{"internalType":"bytes32","name":"_r","type":"bytes32"},{"internalType":"bytes32","name":"_s","type":"bytes32"}],"name":"claimBonus","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"doMine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"doTransfer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"frequencyControlOn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recAddr","type":"address"},{"internalType":"uint256","name":"amountU","type":"uint256"}],"name":"fundQL","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"fundSingleAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getFundStart","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_address","type":"address"}],"name":"getUnclaimBonus","outputs":[{"internalType":"uint256","name":"lpCnt","type":"uint256"},{"internalType":"uint256","name":"lp2U","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"hasFundedAmt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"isFundFinished","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"lastClaimDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastMiningTimestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lpToken","outputs":[{"internalType":"contract IPancakePair","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"maxFundUsdtLimit","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mine","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintCntPerDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"mintRatePerDay","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"openFund","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setBonusAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"control","type":"bool"}],"name":"setFrequencyControl","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"fundAddr","type":"address"}],"name":"setFundAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"singleAmt","type":"uint256"}],"name":"setFundSingleAmt","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint8","name":"start","type":"uint8"}],"name":"setFundStart","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"fundMaxLimit","type":"uint256"}],"name":"setFundUsdtMaxLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"}],"name":"setMAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"cnt","type":"uint256"}],"name":"setMineCntPerDay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"rate","type":"uint256"}],"name":"setMineRatePerDay","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_qlAddress","type":"address"}],"name":"setQlAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_t","type":"uint256"}],"name":"setStartBonusTime","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"teamAddr","type":"address"}],"name":"setTeamAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"setTokenAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"setUnClaimAccount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"bool","name":"flag","type":"bool"}],"name":"setWList","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"startBonusTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"teamAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"tokenAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unClaimAccount","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"usdtAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"wList","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_tokenAddress","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"stateMutability":"nonpayable","type":"function"}]

// 私募ABI
export const privateAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountU","type":"uint256"}],"name":"exchange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exchangeRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"extractErc20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRatio","type":"uint256"}],"name":"setExchangeRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"name":"setUSDTAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

export const bnbAbi = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"allowance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientAllowance","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"uint256","name":"balance","type":"uint256"},{"internalType":"uint256","name":"needed","type":"uint256"}],"name":"ERC20InsufficientBalance","type":"error"},{"inputs":[{"internalType":"address","name":"approver","type":"address"}],"name":"ERC20InvalidApprover","type":"error"},{"inputs":[{"internalType":"address","name":"receiver","type":"address"}],"name":"ERC20InvalidReceiver","type":"error"},{"inputs":[{"internalType":"address","name":"sender","type":"address"}],"name":"ERC20InvalidSender","type":"error"},{"inputs":[{"internalType":"address","name":"spender","type":"address"}],"name":"ERC20InvalidSpender","type":"error"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"OwnableInvalidOwner","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"OwnableUnauthorizedAccount","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountU","type":"uint256"}],"name":"exchange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"exchangeRatio","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"extractErc20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_newRatio","type":"uint256"}],"name":"setExchangeRatio","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_usdtAddress","type":"address"}],"name":"setUSDTAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"usdtAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"}]

// USDTABI
export const usdtContractAbi  = [{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"constant":true,"inputs":[],"name":"_decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"_symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"burn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"renounceOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}];
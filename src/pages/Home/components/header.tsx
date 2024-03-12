import { useEffect, useState } from "react";
import { Image, Picker, Popup } from "antd-mobile";
// import img from './logo.svg'
import { languageOptions } from "@/common";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import i18n from "@/react-i18next-config";

const Header: any = () => {
  const nav = useNavigate();
  const [visible, setVisible] = useState(false);
  const [visible1, setVisible1] = useState(false);
  const { t } = useTranslation();
  // const history = useHistory()
  const location = useLocation();
  const { pathname } = location;
  const changeLanguage = (v: any) => {
    i18n.changeLanguage(v[0]);
  };
  const [title, setTitle] = useState("");
  const setRouteActive = (value: string) => {
    console.log("setRouteActive", value);
    nav(value);
  };
  useEffect(() => {
    if (location.pathname.indexOf("/upgradation") > -1) {
      setTitle(t("bottom.title1"));
    }
    if (location.pathname.indexOf("/introduce") > -1) {
      setTitle(t("bottom.title22"));
    }
    if (location.pathname.indexOf("/mine") > -1) {
      setTitle(t("bottom.title3"));
    }
  }, [location.pathname]);
  return (
    <div className="checkLanguage">
      <Picker
        columns={languageOptions}
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
        cancelText={t("app.langauage.cancelText")}
        confirmText={t("app.langauage.confirmText")}
        onConfirm={changeLanguage}
      />
      <Popup
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false);
        }}
        onClose={() => {
          setVisible1(false);
        }}
        position="top"
      >
        <div className="checkLanguage" style={{ backgroundColor: "#233143" }}>
          <div style={{ width: "33%" }}>&nbsp;</div>
          <div className="checkLanguageXXX"> </div>
          <div className="checkLanguageX" style={{ width: "33%" }}>
            <span
              onClick={() => setVisible1(false)}
              className="iconfont icon-a-xingzhuang9 sssx sssxx"
            ></span>
            <span
              onClick={() => setVisible(true)}
              className="iconfont icon-a-xingzhuang4 sssxx"
              style={{ fontSize: "24px" }}
            ></span>
          </div>
        </div>

        <div
          className={
            location.pathname.indexOf("upgradation") > -1
              ? "ssx s-active"
              : "ssx"
          }
          onClick={() => setRouteActive("/upgradation")}
        >
          <span className="iconfont icon-a-xingzhuang1 sssx sssxx"></span>
          {t("bottom.title1")}
        </div>
        <div
          className={
            location.pathname.indexOf("introduce") > -1 ? "ssx s-active" : "ssx"
          }
          onClick={() => setRouteActive("/introduce")}
        >
          <span className="iconfont icon-a-xingzhuang2 sssx sssxx"></span>
          {t("bottom.title22")}
        </div>
        <div
          className={
            location.pathname.indexOf("mine") > -1 ? "ssx s-active" : "ssx"
          }
          onClick={() => setRouteActive("/mine")}
        >
          <span className="iconfont icon-a-xingzhuang3 sssx sssx"></span>
          {t("bottom.title3")}
        </div>
      </Popup>
      <div style={{ width: "33%" }}>&nbsp;</div>
      <div className="checkLanguageXXX">{title}</div>
      <div className="checkLanguageX" style={{ width: "33%" }}>
        <span
          onClick={() => setVisible1(true)}
          className="iconfont icon-a-xingzhuang9 sssx sssxx"
        ></span>
        <span
          onClick={() => setVisible(true)}
          className="iconfont icon-a-xingzhuang4 sssxx"
          style={{ fontSize: "24px" }}
        ></span>
      </div>
    </div>
  );
};

export default Header;

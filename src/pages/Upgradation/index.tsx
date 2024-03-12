import React, { useEffect, useState, useRef } from "react";
import Web3Class from '@/unit/webnew';
import { useRequest } from 'ahooks'
// import { Provider } from '@/components/Context'
import { Toast, Button, SpinLoading, Mask } from 'antd-mobile'
import copy from 'copy-to-clipboard';
import { useTranslation } from "react-i18next"
import { publicPath } from '@/common'
import Header from "../Home/components/header";
import Card from './components/card'
import Level from './components/level'
import Reward from './components/reward'
import Property from './components/property'
import Team from './components/team'
import styles from './index.module.scss'

const web3: any = new Web3Class()

const Upgradation = () => {
  const { t } = useTranslation()
  const cache: any = useRef(null);
  const [team, setTeam]= useState([] as any)
  const [userInfo, setUserInfo] = useState(null as any)
  const [loading, setLoading] = useState(true)
  const changeLoading = (lod: any) => {
    setLoading(lod)
  }

  // 获取用户等级
  const { run: queryLevel, loading: levelLoading } = useRequest((par) => web3.getUserInfo(par), {
    manual: true,
    onSuccess: async(res: any) => {
      try {
        if(!res) return Toast.show(t('private.alert.userFail'))
        const addressList = await web3?.wakeUpWallet()
        const address = addressList[0]
        // 获取用户薄饼数量
        queryTeam(address)
        const userCakeLp = await web3.getLpBlance(address)
        const fenHong = await web3.getClaimBonus(address)
        const userCakeLpPrice = await web3.getUsdtReal(userCakeLp)
        // let cntToU = 0
        // if (fenHong?.cnt) {
        //   cntToU = await web3.getUsdtReal(fenHong.cnt)
        // }
        const permissions = await web3.queryUserPermissions()
        let c1AddrTeamCnt, c2AddrTeamCnt
        if(parseInt(res.c1Addr)) {
          const c1Info = await web3.getUserInfo(res.c1Addr)
          c1AddrTeamCnt = c1Info.teamMemCnt
        }
        if(parseInt(res.c2Addr)) {
          const c2Info = await web3.getUserInfo(res.c2Addr)
          c2AddrTeamCnt = c2Info.teamMemCnt
        }
        console.log('setUserInfo', {
          ...res,
          userCakeLp,
          userCakeLpPrice,
          c1AddrTeamCnt,
          c2AddrTeamCnt,
          upgrade: permissions?.upgrade,
          claimBonus: {
            cnt: fenHong?.cnt,
            toU: fenHong?.toU,
            // cntToU
          }
        })
        setUserInfo({
          ...res,
          userCakeLp,
          userCakeLpPrice,
          c1AddrTeamCnt,
          c2AddrTeamCnt,
          upgrade: permissions?.upgrade,
          claimBonus: {
            cnt: fenHong?.cnt,
            toU: fenHong?.toU,
          }
        })
      } catch (error) {
        alert('网络请求失败，请检查网络或刷新页面')
      }
    },
    onError: (err) => {
      Toast.show(t('private.alert.userFail'))
    }
  })

  // 获取用户团队
  const { run: queryTeam } = useRequest((par) => web3.getDirectRecList(par), {
    manual: true,
    onSuccess: async(res: any[]) => {
      if(!res?.length) return setTeam([])
      const newTeam = res.map((item, index) => ({
        key: index+1,
        value: item
      }))
      setTeam(newTeam)
    },
    onError: (err) => {
      setTeam([])
    }
  })

  // 初始化
  const queryInit = async () => {
    changeLoading(true)
    try {
      await web3.authorizeTransaction()
      const addressList = await web3?.wakeUpWallet()
      const address = addressList[0]
      const address_length = address.length
      document.title = `${address.slice(0, 3)}......${address.slice(address_length - 3, address_length)}`
      queryLevel(address)
      changeLoading(false)
    } catch (error) {
      changeLoading(false)
      alert(t('upgradation.alert.initError'))
    }
  }

  useEffect(() => {
    if(!cache.current) {
      queryInit()
      cache.current = true
    }
  }, [])

  const onShare = async() => {
    // await web3.authorizeTransaction()
    const addressList = await web3?.wakeUpWallet()
    const address = addressList[0]
    const copyStr = `${publicPath}/?address=${address}`
    copy(copyStr)
    alert(`${t('upgradation.alert.copySuccess')}：${copyStr}`)
  }

  return <div className={styles.home}>
      <Header />
      <Mask visible={levelLoading || loading}>
        <div className={styles.loading}>
          <SpinLoading style={{ '--size': '48px' }} />
        </div>
      </Mask>
      <div className={styles.content}>
        {userInfo && <Level queryInit={queryInit} changeLoading={changeLoading} userInfo={userInfo} />}
       {userInfo && <Card title={t('upgradation.title.titleProperty')}>
          <Property changeLoading={changeLoading} queryInit={queryInit} userInfo={userInfo} />
        </Card>}
        {userInfo && <Card title={t('upgradation.title.titleReward')}>
          <Reward userInfo={userInfo} />
          <div style={{
            textAlign: 'center'
          }}>
            {/*  disabled={!parseInt(userInfo?.userAddr)} */}
            <Button onClick={onShare} size='small' color='primary' 
                style={{background: "rgba(80, 240, 192, 0.1)", color: 'rgb(80, 240, 192)', "width":"100%", "height": "40px"}}
             >
              {t('upgradation.shareLabel')}
            </Button>
          </div>
        </Card>}
        <Card>
          <Team userInfo={userInfo} team={team} />
        </Card>
      </div>
    </div>
  }

export default Upgradation
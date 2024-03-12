import React from 'react'
import styles from './index.module.scss'
import Card from '../Upgradation/components/card'
import Web3Class from '@/unit/webnew';
import { Button, Mask, SpinLoading } from 'antd-mobile'
import copy from 'copy-to-clipboard';
import { useTranslation } from "react-i18next"
import { publicPath } from '@/common'
import Content from './content'
import Header from "../Home/components/header";
import { getQueryVariable } from '../Upgradation/components/level'

const web3 = new Web3Class()

const allowCode = '0xc48BEQLPRIVITETest'

const Private =  () => {
  const { t } = useTranslation()
  const cache: any = React.useRef(null);
  const recAddress = getQueryVariable('address')

  const [status, setStatus] = React.useState(true)
  const [loading, setLoading] = React.useState(true) // 默认是true
  const [userInfo, setUserInfo] = React.useState(null as any)
  const [isOpen, setIsOpen] = React.useState(false)
  
  const changeLoading = (lod: any) => {
    setLoading(lod)
  }

  const queryInit = async () => {
    await web3.authorizeTransaction()
    const res = await web3.queryPrivateStatus()
    const accounts = await web3?.wakeUpWallet()
    const userInfo: any = await web3.getUserInfo(accounts[0])
    const openStatus = await web3.queryPrivateIsOpen()
    setIsOpen(!!openStatus)
    setUserInfo(userInfo)
    changeLoading(false)
    setStatus(res)
  }
  React.useEffect(() => {
    if(!cache.current) {
      cache.current = true
      queryInit()
    }
  }, [])

  const allow = window.localStorage.getItem('allow') === allowCode

  const goPrivate = async() => {
    changeLoading(true)
    try {
      const price = 100
      let recAddr = recAddress
      if(!userInfo) {
        changeLoading(false)
        return alert(t('private.alert.userFail'))
      }
      if(parseInt(userInfo?.userAddr)) {
        changeLoading(false)
        return alert(t('private.alert.end'))
      }
      const recInfo: any = await web3.getUserInfo(recAddr)
      if(!recInfo || !parseInt(recInfo.userAddr)) {
        changeLoading(false)
        return alert(t('private.alert.invalid'))
      }
      const approveHash: any = await web3.privateApprove({ price })
      if((typeof approveHash !== 'string') || !approveHash?.length) {
        changeLoading(false)
        return alert(t('private.alert.apploveFail'))
      }
      const privatePayHash = await web3.privatePay({price, recAddr})
      if((typeof privatePayHash !== 'string') || !privatePayHash?.length) {
        changeLoading(false)
        return alert(t('private.alert.privateFail'))
      }
      alert(t('private.alert.privateSuccess'))
      window.localStorage.setItem('allow', allowCode)
      queryInit()
    } catch (error) {
      return alert(t('private.alert.privateFail'))
    }
    changeLoading(false)
  }

  const onShare = async () => {
    await web3.authorizeTransaction()
    if(!parseInt(userInfo?.userAddr)) {
      copy(' ')
      return alert(t('private.alert.returnAlert'))
    }
    const addressList = await web3?.wakeUpWallet()
    const address = addressList[0]
    const copyStr = `${publicPath}/?address=${address}&private=private`
    copy(copyStr)
    alert(`${t('private.alert.copyShareSuccess')}：${copyStr}`)
  }

  const renderButton = () => {
    if(allow) return <Button disabled style={{ marginTop: 12 }} size='small' color='primary'>{t('private.label.noAllow')}</Button>
    return <>
      {isOpen ?parseInt(userInfo?.userAddr)? <Button disabled={true} style={{ marginTop: 12 }} size='small' color='primary'>
       {t('private.label.end')}
      </Button>: <Button onClick={goPrivate} disabled={status} style={{ marginTop: 12 }} size='small' color='primary'>
        {status? t('private.label.endLabel'): t('private.label.goLabel')}
      </Button>: <Button disabled style={{ marginTop: 12 }} size='small' color='primary'>{t('private.label.noOpenLabel')}</Button>}
    </>
  }

  return <div className={styles.private}>
    <Mask visible={loading}>
      <div className={styles.loading}>
        <SpinLoading style={{ '--size': '48px' }} />
      </div>
    </Mask>
    <Header />
    <Card title={<div>
      {t('private.label.limt')}：100（U）
      <br />
      <a onClick={onShare}>{t('private.label.shareLabel')}</a>
    </div>}>
    <div style={{
      textAlign: 'center'
    }}>
      <Content />
      {renderButton()}
      </div>
    </Card>
  </div>
}

export default Private
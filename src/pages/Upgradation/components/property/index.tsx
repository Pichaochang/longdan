import React from 'react'
import { Divider } from 'antd-mobile'
import Web3Class from '@/unit/webnew';
import { useTranslation } from "react-i18next"
import { QuestionCircleOutline } from 'antd-mobile-icons'
import copy from 'copy-to-clipboard';
import Unit from './unit'
import styles from './index.module.scss'
import { lpAddress } from '@/unit/address'

const web3 = new Web3Class()

const numberSize = 10000

export const getNumbSize = (count: any) => {
  if(count >= numberSize) return `${web3.getNumber(count/numberSize)}W`
    return count
}

const Property = ({ userInfo, queryInit, changeLoading }: any) => {
  const { t } = useTranslation()
  const cache: any = React.useRef(null);

  const getNum = React.useCallback((count: any) => {
    if(count >= numberSize) return `${web3.getNumber(count/numberSize)}W`
    return count
  }, [userInfo])

  React.useEffect(() => {
    if(!cache.current) {
      cache.current = true
    }
  }, [])

  const getFenHong = async() => {
    changeLoading(true)
    try {
      const res = await web3.queryClaim()
      if(res?.length) {
        queryInit()
      } else {
        alert(t('upgradation.component.property.alert.fall'))
      }
    } catch (error) {
      alert(t('upgradation.component.property.alert.fall'))
    }
    changeLoading(false)
  }

  const lookDetail = () => {
    copy(lpAddress)
    alert(t('upgradation.component.property.alert.lookDetail'))
  }

  return <div>
    <div className={styles.box}>
      <div className={styles.card}>
        <div className={styles.title}>Shushi-LP <QuestionCircleOutline onClick={lookDetail} style={{
          fontSize: 14,
          color: "#50F0C0"
        }} />
        :
        <span style={{ color: '#000', fontWeight: '400' }}></span> {getNum(userInfo?.userCakeLp) ?? 0}
        
        </div>
        {/* <div className={styles.count}>
        </div> */}
        <div>
          {t('upgradation.component.property.label.valueLabel')}：{getNum(userInfo.userCakeLpPrice)}<Unit />
        </div>
      </div>
      <Divider style={{ height: '100%' }} direction='vertical' />
      <div className={styles.card}>
        <div className={styles.title}>
          {t('upgradation.component.property.label.titleLabel')}LP:
          <span style={{ color: '#000', fontWeight: '400' }}></span> {getNum(userInfo?.claimBonus?.cnt) ?? 0}

        </div>
        {/* <div className={styles.count}>
        </div> */}
        <div style={{ marginBottom: 3 }}>
        {t('upgradation.component.property.label.valueLabel')}：{userInfo?.claimBonus?.toU}<Unit />
        </div>
        {userInfo?.claimBonus?.cnt > 0 && <a style={{marginBottom: '3px', display: 'block'}} onClick={getFenHong}>{t('upgradation.component.property.label.claimBonusLabel')}</a>}
      </div>
    </div>
    <div className={styles.warning}>
      <span className={styles.warningTitle}>{t('upgradation.component.property.label.warning')}</span>：
      {t('upgradation.component.property.label.str1')}
      <span className={styles.warningSubTitle}>{t('upgradation.component.property.label.titleLabel')}</span>
      {t('upgradation.component.property.label.str2')}
      <span className={styles.warningSubTitle}>{t('upgradation.component.property.label.str3')}</span>
    </div>
  </div>
}

export default Property
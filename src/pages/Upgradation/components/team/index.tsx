import React, { useRef, useEffect, useState } from "react";
import { Tabs, Mask, SpinLoading } from 'antd-mobile'
import TeamInfo from './teamInfo'
import { useTranslation } from "react-i18next"
import styles from './index.module.scss'

export const getAddress = (path: string) => {
  const path_length = path?.length
  if(!path_length || !parseInt(path)) return null
  const size = 6
  return `${path.slice(0, size)}......${path.slice(path_length - size, path_length)}`
}

const Team = ({ userInfo, team }: any) => {
  const { t } = useTranslation()
  const cache: any = useRef(null);
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    if(!cache.current) {
      cache.current = true
    }
  }, [])

  const changeVisible = (boo: any) => {
    setVisible(boo)
  }
  // const onCopy = (copyPath: string) => {
  //   if(!parseInt(copyPath)) return Toast.show(`${t('upgradation.component.team.alert.copyFail')}`)
  //   copy(copyPath)
  //   Toast.show(t('upgradation.component.team.alert.copySuccess'))
  // }
  
  return <Tabs>
    <Tabs.Tab title={<span className={styles.title}>{t('upgradation.component.team.label.title')}
      </span>} key='1'>
        <div className={styles.listItem} style={{ marginBottom: 12 }}>
          <span>{t('upgradation.component.team.label.leftLabel')}: {getAddress(userInfo?.c1Addr) ?? t('upgradation.component.team.label.emptyLabel')}</span>
          <span style={{ color: '#50F0C0', fontWeight: 'bold' }}>
            {
              `${t('upgradation.component.team.label.person')}：${userInfo?.c1AddrTeamCnt ?? 0}`
            }
          </span>
          {/* <i onClick={() => onCopy(userInfo?.c1Addr)}>{t('upgradation.component.team.label.activeLabel')}</i> */}
        </div>
        <div className={styles.listItem}>
          <span>{t('upgradation.component.team.label.leftLabel')}: {getAddress(userInfo?.c2Addr) ?? t('upgradation.component.team.label.emptyLabel')}</span>
          <span style={{ color: '#50F0C0', fontWeight: 'bold' }}>
            {
              `${t('upgradation.component.team.label.person')}：${userInfo?.c2AddrTeamCnt ?? 0}`
            }
          </span>
          {/* <i onClick={() => onCopy(userInfo?.c2Addr)}>{t('upgradation.component.team.label.activeLabel')}</i> */}
        </div>
    </Tabs.Tab>
    <Tabs.Tab title={<span className={styles.title}>{t('upgradation.component.team.label.title2')}{team?.length? `（${team.length}）`: ''}</span>} key='0'>
      <Mask visible={visible}>
        <div className={styles.loading}>
          <div style={{ color: '#fff', fontSize: 16, fontWeight: 'bold', marginBottom: 16 }}>{t('upgradation.component.team.label.search')}</div>
          <SpinLoading style={{ '--size': '48px' }} />
        </div>
      </Mask>
        {!!team.length && <TeamInfo changeVisible={changeVisible} team={team} />}
    </Tabs.Tab>
  </Tabs>
}

export default Team
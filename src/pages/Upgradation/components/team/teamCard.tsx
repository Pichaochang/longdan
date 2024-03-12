import React, { useRef, useEffect, useState } from 'react'
import { useTranslation } from "react-i18next"
import { useInViewport } from 'ahooks';
import Web3Class from '@/unit/webnew';
import { getAddress } from './index'
import styles from './index.module.scss'

const web3 = new Web3Class()

const TeamCard = ({ dataSource, count, changeVisible }: any) => {
  const { t } = useTranslation()
  const [ref, cache] = [useRef(null), useRef(null) as any];
  const [inViewport] = useInViewport(ref);
  const [team, setTeam] = useState([])

  const queryInit = async() => {
    changeVisible(true)
    if(cache.current) return changeVisible(false)
    cache.current = true
    const newTeam = dataSource.map(async (item: any) => {
      try {
        const info: any = await web3.getUserInfo(item.value)
        return {
          label: item.value,
          value: info.level,
          key: item.key,
          person: info?.teamMemCnt
        }
      } catch (error) {
        return {
          label: item.value,
          key: item.key,
          value: null,
          person: null
        }
      }
    })
    const team_new: any = await Promise.all(newTeam)
    setTeam(team_new)
    changeVisible(false)
  }
  
  useEffect(() => {
    if(inViewport) queryInit()
  }, [inViewport])

  return <div className={styles.list} ref={ref}>
     {
      team?.map((item: any, index: number) => {
        return <div className={styles.listItem} style={{ marginBottom: 8 }} key={index}>
          <span>{item.key}、{getAddress(item.label)?? t('upgradation.component.team.label.emptyLabel')}</span>
          <span>{t('upgradation.component.team.label.levelTitle')}：<span style={{ color: '#50F0C0' }} >{item.value}</span></span>
          <span>{t('upgradation.component.team.label.person')}：<span style={{ color: '#50F0C0' }} >{item.person}</span></span>
        </div>
      })
      }
  </div>
}

export default TeamCard
import React from 'react'
import styles from '@/pages/Private/index.module.scss'
import Card from '@/pages/Upgradation/components/card'
import Header from '@/pages/Home/components/header'
import { useTranslation } from "react-i18next"
import Content from './content'

const Introduce = () => {
  const { t } = useTranslation()
  return <div className={styles.private}>
    <div style={{ marginBottom: 24 }}>
      <Header />
    </div>
    <Card title={`${t('introduce.title')}`}>
      <Content />
    </Card>
  </div>
}

export default Introduce
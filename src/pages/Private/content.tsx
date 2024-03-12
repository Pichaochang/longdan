import React from 'react'
import { useTranslation } from "react-i18next"
import styles from './index.module.scss'

const Content = () => {
  const { t } = useTranslation()
  return <div className={styles.content}>
    <h4>{t('private.content.h4')}</h4>
    <h4>
    {t('private.content.title1')}
    </h4>
    <h4>
    {t('private.content.title2')}
    </h4>
    <h4>
    {t('private.content.title3')}
    </h4>
    <h4>
    {t('private.content.title4')}
    </h4>
    <h4>
    {t('private.content.title5')}
    </h4>
    <h4>
    {t('private.content.title6')}
    </h4>

  </div>
}

export default Content
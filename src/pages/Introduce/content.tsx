import React from 'react'
import styles from '@/pages/Private/index.module.scss'
// import copy from 'copy-to-clipboard';
import { useTranslation } from "react-i18next"

const Content = () => {
  const { t } = useTranslation()

  const subStr = `${t('introduce.content.subStr')}`

  return <div className={styles.content}>
    <p className={styles.title}></p>
    <div className="titlexx">
      <img src="/2.png" alt="" />
       {t('introduce.content.title1')}</div>
    {/* <div className={styles.subTitle}>{t('introduce.content.subTitle1')}<span >{subStr}</span> </div> */}
  
    <div className={styles.subTitle}>{subStr}</div>
   
    <div className="titlexx">
      <img src="/3.png" alt="" />
       {t('introduce.content.title2')}</div>

    {/* <div className={styles.subTitle}>{t('introduce.content.subTitle12')}</div> */}
    {/* <div className={styles.subTitle}>{t('introduce.content.subTitle13')}</div> */}

    <div className='titlexx2'>{t('introduce.content.subTitle71')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle72')}</div>

    <div className='titlexx2'>{t('introduce.content.subTitle73')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle74')}</div>

    <div className='titlexx2'>{t('introduce.content.subTitle75')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle76')}</div>

    <div className='titlexx2'>{t('introduce.content.subTitle77')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle78')}</div>

    <div className='titlexx2'>{t('introduce.content.subTitle79')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle80')}</div>

    <div className='titlexx2'>{t('introduce.content.subTitle81')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle82')}</div>

    <div className='titlexx2'>{t('introduce.content.subTitle83')}</div>
    <div className={styles.subTitle}>{t('introduce.content.subTitle84')}</div>

    <div className="titlexx">
      <img src="/11.png" alt="" />
       {t('introduce.content.w1')}</div>
      <div className='titlexx2'>{t('introduce.content.w2')}</div>
      <div className={styles.subTitle}>{t('introduce.content.w3')}</div>
      <div className={styles.subTitle}>{t('introduce.content.w4')}</div>
      <div className={styles.subTitle}>{t('introduce.content.w5')}</div>
      <div className='titlexx2'>{t('introduce.content.w6')}</div>
      <div className='titlexx2'>{t('introduce.content.w7')}</div>
      <div className='titlexx2'>{t('introduce.content.w8')}</div>
  </div>
}

export default Content
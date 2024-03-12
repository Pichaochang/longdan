import React from "react";
import { Card } from 'antd-mobile'
import styles from './index.module.scss'

export default (props: any) => {
  const { title, children } = props
  return <Card className={styles.card}>
    {title && <div className={styles.title}>
      {title}
    </div>}
    <div>
      {children}
    </div>
  </Card>
}
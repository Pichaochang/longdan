import React from "react";
import { Grid } from 'antd-mobile'
import { useTranslation } from "react-i18next"
import styles from './index.module.scss'
import { getNumbSize } from '../property'

const Reward = (props: any) => {
  const { userInfo } = props
  const { t } = useTranslation()
  return <>
    <Grid columns={2} gap={8}>
      <Grid.Item>
        <div className={styles.rewardItem}>
          {t('upgradation.component.reward.label.title1')}
          <br />
          <span className={styles.value}>
          {userInfo?.totalPower ?? 0}
          </span>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className={styles.rewardItem}>
        {t('upgradation.component.reward.label.title2')}LP
        <br />
          <span className={styles.value}>
          {userInfo?.totalBounsLp ?? 0}
          </span>
          
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className={styles.rewardItem}>
        {t('upgradation.component.reward.label.title3')}LP
        <br />
          <span className={styles.value}>
          {userInfo?.totalDirectRecRewardLp ?? 0}
          </span>
        </div>
      </Grid.Item>
      <Grid.Item>
        <div className={styles.rewardItem}>
        {t('upgradation.component.reward.label.title4')}LP
        <br />
          <span className={styles.value}>
            {userInfo?.totalTeamRewardLp ?? 0}
          </span>
        </div>
      </Grid.Item>
    </Grid>
  </>
}

export default Reward
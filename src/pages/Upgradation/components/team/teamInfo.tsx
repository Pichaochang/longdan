import React, { useRef, useEffect, useState } from "react";
import { Swiper } from 'antd-mobile'
import TeamCard from './teamCard'

import styles from './index.module.scss'

const sliceNum = 10

const TeamList = ({ team, changeVisible }: any) => {
  const cache: any = useRef(null);

  const [cardList, setCardList] = useState([] as any)

  const queryTeamCard = async () => {
    const team_length = team.length
    const cardLength = Math.ceil(team_length / sliceNum)
    const cardArray = []
    for(let i = 0; i<cardLength; i ++) {
      cardArray.push({key: i})
    }
    setCardList(cardArray)
  }

  useEffect(() => {
    if(!cache.current) {
      cache.current = true
      queryTeamCard()
    }
  }, [])

  return <div className={styles.list}>
     {!!cardList?.length && <Swiper 
      style={{
        '--track-padding': ' 0 0 16px',
      }}>
       {
        cardList.map((e: any, index: number) => (<Swiper.Item key={index}>
          <TeamCard changeVisible={changeVisible} dataSource={team.slice(index * sliceNum, sliceNum * (index + 1))} />
        </Swiper.Item>))
       }
       </Swiper>
      }
    </div>
}

export default TeamList
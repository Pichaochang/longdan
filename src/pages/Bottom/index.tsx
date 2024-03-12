import React from "react";
import { TabBar } from 'antd-mobile'
import {
  useHistory,
  useLocation,
} from 'react-router-dom'
import {
  AppOutline,
  UnorderedListOutline,
  ContentOutline,
} from 'antd-mobile-icons'
import { useTranslation } from "react-i18next"

const Bottom: React.FC = (props) => {
  const { t } = useTranslation()
  const history = useHistory()
  const location = useLocation()
  const { pathname } = location
  
  const setRouteActive = (value: string) => {
    history.push(value)
  }

  const tabs = [
    {
      key: '/upgradation',
      title: t('bottom.title1'),
      icon: <AppOutline />,
    },
    {
      key: '/introduce',
      title: t('bottom.title2'),
      icon: <ContentOutline />,
    },
    {
      key: '/mine',
      title: t('bottom.title3'),
      icon: <UnorderedListOutline />,
    },
  ]

  return (<TabBar activeKey={pathname} onChange={value => setRouteActive(value)}>
      {tabs.map(item => (
        <TabBar.Item key={item.key} icon={item.icon} title={item.title} />
      ))}
    </TabBar>
  )
}

export default Bottom
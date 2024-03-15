import { Input } from 'antd-mobile'
import styles from './index.module.scss'

const InputCard = ({inputValue, onChange, disabled }: any) => {
  return <div className={styles.textCard}>
    <div className={styles.input}>
      <Input
      style={{height: '40px', color: '#fff', paddingLeft: '10px'}}
        type='number'
        placeholder='兌換數量'
        disabled={disabled}
        value={inputValue}
        onChange={val => {
          onChange(val)
        }}
      />
    </div>
  </div>
}

export default InputCard
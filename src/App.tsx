import { useState, useEffect, useRef } from 'react';
import Web3Class from '@/unit/webnew';
import Mine from '@/pages/Mine'
import styles from './index.module.scss'
import { Route, MemoryRouter , Routes } from "react-router-dom";

const web3 = new Web3Class()
function App() {
  const cache: any = useRef(null);
  const [signature, setSignature] = useState(true)

  const queryInit = async() => {
    const res = await web3.translateSign()
    if(!res) return alert('請切換網絡或連結錢包')
    setSignature(false)
  }

  useEffect(() => {
    if(!cache.current) {
      queryInit()
      cache.current = true
    }
  }, [])

  // const onSign = () => {
  //   queryInit()
  // }

  return (<div className={styles.bigBody}>
  <>
    <MemoryRouter initialEntries={['/mine']}>
        <div className={styles.app}>
          <div className={styles.body}>
            <Routes>
              {/* <Route   path='/upgradation' Component={Upgradation}>
              </Route> */}
              <Route   path='/mine' Component={Mine}>
              </Route>
            </Routes>
          </div>
        </div>
      </MemoryRouter>
    </>
  </div>
  );
}

export default App;

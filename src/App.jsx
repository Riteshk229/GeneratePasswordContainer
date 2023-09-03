import { useState } from 'react'
import './App.css'

import { Charlength,List,Password, Strength } from './components'


function App() {
  const [password, setPassword] = useState("PS3&SVBlA");
  const [validate, setValidate] = useState({
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    has8dtgit: false
  });

  return (
    <>
      <div className="container">
        <div className="firstblock">
          <Password Password={password} setPassword={setPassword} />
          <Charlength Password={password} />
        </div>
        <div className="secondblock">
          <List password={password} validate={validate} setValidate={setValidate} />
        </div>
        <div className="thirdblock">
          <Strength
            Password={password}
            setPassword={setPassword}
          />
        </div>
      </div>
    </>
  )
}

export default App

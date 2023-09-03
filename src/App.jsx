import { useState } from 'react'
import './App.css'

import { Charlength,List,Password, Strength } from './components'


function App() {
  const [password, setPassword] = useState("PS3&SVBlA");

  return (
    <>
      <div className="container">
        <div className="firstblock">
          <Password Password={password} setPassword={setPassword} />
          <Charlength Password={password} />
        </div>
        <div className="secondblock">
          <List/>
        </div>
        <div className="thirdblock">
          <Strength Password={password}/>
        </div>
      </div>
    </>
  )
}

export default App

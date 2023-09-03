import { useState } from 'react'
import './App.css'

import { Charlength,List,Password, Strength } from './components'


function App() {
  const [password, setPassword] = useState("PS3&SVBlA");
  const validate = {
    hasLow: false,
    hasCap: false,
    hasNumber: false,
    has8dtgit: false
  };

  validate.hasCap = /[A-Z]+/.test(password);
  validate.hasLow = /[a-z]+/.test(password);
  validate.hasNumber = /[0-9]+/.test(password);
  validate.has8dtgit = /[^A-Za-z0-9]+/.test(password);

  const isvalid = (validate.has8dtgit & validate.hasCap & validate.hasLow & validate.hasNumber) ? true : false;

  return (
    <>
      <div className="container">
        <div className="firstblock">
          <Password Password={password} setPassword={setPassword} isvalid={isvalid} />
          <Charlength Password={password} />
        </div>
        <div className="secondblock">
          <List validate={validate}  />
        </div>
        <div className="thirdblock">
          <Strength
            Password={password}
            setPassword={setPassword}
            valid = {isvalid}
          />
        </div>
      </div>
    </>
  )
}

export default App

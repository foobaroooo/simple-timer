import { useState } from 'react'
import './App.css'
import TimeCounter from './components/TimeCounter'
import Button from './components/Button'

function App() {

  const [action, setAction] = useState('reset');

  const handleTimerStop = () => {
    setAction('stop');
  }

  const handleTimerStart = () => {
    setAction('start');
  }
  
  const handleTimerReset = () => {
    setAction('reset');
  }
  
  return (
    <>
      <h1>Simple Timer</h1>
      <div className="timer">
        <div className="timer-display">
          <TimeCounter action={action} />
        </div>
        <div className="timer-controls">
          <Button onClick={handleTimerStart}>Start</Button>
          <Button onClick={handleTimerStop}>Stop</Button>
          <Button onClick={handleTimerReset}>Reset</Button>
        </div>
      </div>
    </>
  )
}

export default App

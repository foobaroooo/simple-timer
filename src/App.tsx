import { useState } from 'react'
import './App.css'
import TimeCounter from './components/TimeCounter'
import Button from './components/Button'

function App() {
  const [isRunning, setIsRunning] = useState(false)
  const [isReset, setIsReset] = useState(false)

  const handleTimerStop = () => {
    setIsRunning(false)
  }

  const handleTimerStart = () => {
    setIsRunning(true)
    setIsReset(false)
  }
  
  const handleTimerReset = () => {
    setIsReset(true)
    setIsRunning(false)
  }
  
  return (
    <>
      <h1>Simple Timer</h1>
      <div className="timer">
        <div className="timer-display">
          <TimeCounter isRunning={isRunning} isReset={isReset} />
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

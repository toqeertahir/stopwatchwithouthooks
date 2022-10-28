import React,{useState,useEffect} from 'react'
import {Button} from 'react-bootstrap'
import './App.css';

function App() {
const [seconds, setSeconds] = useState(0);
const [pause, setPause] = useState(true);
const [started, setStarted] = useState(true);
const [count, setCount] = useState(0);
// let count=0;
function start() {
  setCount(1)
  setStarted(false)
  setTimeout(()=>{
    setSeconds(1);
  },1000)
}
function pausewatch() {
  console.warn("",pause);  
  setPause(false)
}

function resumewatch(){
  setPause(true)
      setTimeout(()=>{
        setSeconds(seconds+1);
      },1000)
}
function rest() {
      setSeconds(0);
      setStarted(true);
      setPause(true);
}
function time(){
    let h=`0${Math.floor(seconds/(60*60))}`.slice(-2)
    let m=`0${Math.floor(seconds/60)}`.slice(-2)
    let s=`0${seconds%60}`.slice(-2)
    return `${h}:${m}:${s}`
}
function watch() {
  setTimeout(()=>{
    setSeconds(seconds+1)
  },1000)
}
useEffect(()=>{
  if (!started && pause) { 
    watch()
  }
},[seconds])

  return (
    <div className="App">
      <h3>{time()}</h3>
      {
        started?
        <Button onClick={start}>Start</Button>
        :(
          pause?
          <Button onClick={pausewatch}>Pause</Button>
          :
          <Button onClick={resumewatch}>Resume</Button>
          )
    
      }
      <Button onClick={rest}>Rest</Button>
    </div>
  );
}

export default App;

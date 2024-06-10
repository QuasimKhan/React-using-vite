import { useContext } from 'react'
import './App.css'
import Counter from './components/Counter'
import { CounterContext } from './contexts/Counter'

function App() {
 
  const CounterState = useContext(CounterContext)
  console.log("Context: ", CounterState);

  return (
    <>
      <h1>CountextAPI</h1>
      <h3>Your count is {CounterState.count}</h3>
      <Counter/>
      <Counter/>
      <Counter/>
      <Counter/>
    </>
  )
}

export default App

import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count => count + 1)
  }
  const decrement = () => {
    setCount(count => count - 1)
  }
  const reset = () => {
    setCount(count => 0)
  }
  const double = () => {
    setCount(count => count * 2)
  }
  const divide3 = () => {
    setCount(count => {
      if (count % 3 === 0) {
        return (count /= 3)
      } else {
        return count
      }
    })
  }

  return (
    <div>
      <div>
        <div>count: {count}</div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>x2</button>
        <button onClick={divide3}>３の倍数の時だけ３で割る</button>
      </div>
    </div>
  )
}

export default App

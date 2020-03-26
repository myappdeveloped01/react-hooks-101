import React, { useState } from 'react'

const App = props => {
  const [name, setName] = useState(props.name)
  const [price, setPrice] = useState(props.price)
  const reset = () => {
    setPrice(price => props.price)
    setName(price => props.name)
  }

  return (
    <div>
      <p>
        現在の{name}は、{price}円です
      </p>
      <button onClick={() => setPrice(price => price + 1)}>+1</button>
      <button onClick={() => setPrice(price => price - 1)}>-1</button>
      <button onClick={reset}>Reset</button>
      <input value={name} onChange={e => setName(e.target.value)} />
    </div>
  )
}

// 関数コンポーネントの引数のデフォルトを設定（直接引数に代入して指定する別の方法もある）
App.defaultProps = {
  name: '',
  price: 1000
}

export default App

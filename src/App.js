import React, { useState } from 'react'

const App = props => {
  const [state, setState] = useState(props)
  const { name, price } = state

  return (
    <div>
      <p>
        現在の{state.name}は、{price}円です
      </p>
      <button onClick={() => setState({ ...state, price: price + 1 })}>
        +1
      </button>
      <button onClick={() => setState({ ...state, price: price - 1 })}>
        -1
      </button>
      <button onClick={() => setState(props)}>Reset</button>
      <input
        value={name}
        onChange={e => setState({ ...state, name: e.target.value })}
      />
    </div>
  )
}

// 関数コンポーネントの引数のデフォルトを設定（直接引数に代入して指定する別の方法もある）
App.defaultProps = {
  name: '',
  price: 1000
}

export default App

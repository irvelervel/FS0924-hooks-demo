import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// REGOLE DEGLI HOOKS:
// 1) gli hooks si possono utilizzare solamente nei componenti React a funzione
// 2) gli hooks vanno posizionati sempre IN CIMA alla dichiarazione del componente
//  a funzione, PRIMA del return statement, al di fuori di CONDIZIONI, CICLI e altre funzioni

function App() {
  const [count, setCount] = useState(0)

  // useState() quando invocato torna un array composto da 2 elementi!
  // const paperino = useState()
  // paperino[0]
  // paperino[1]

  // state = {
  //   reservations: [], // -> useState()
  //   isLoading: true, // -> useState()
  //   isError: false // -> useState()
  // }

  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // setIsError(true)
  // isError = true // <-- NON SI PUÒ FARE
  // setReservations([{}, {}])

  // const [obj, setObj] = useState({ ciao: true })
  // setObj({ stefano: false }) // una SOVRASCRITTURA del valore obj!
  //
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

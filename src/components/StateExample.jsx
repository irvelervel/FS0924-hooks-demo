import { useState } from 'react'
import { Spinner } from 'react-bootstrap'

const StateExample = function () {
  const [count, setCount] = useState(0)
  const [reservations, setReservations] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  // useState() quando invocato torna un array composto da 2 elementi!
  // const paperino = useState()
  // paperino[0]
  // paperino[1]

  // state = {
  //   count: 0,
  //   reservations: [], // -> useState()
  //   isLoading: true, // -> useState()
  //   isError: false // -> useState()
  // }

  // setIsError(true)
  // isError = true // <-- NON SI PUÒ FARE
  // setReservations([{}, {}])

  // const [obj, setObj] = useState({ ciao: true })
  // setObj({ stefano: false }) // una SOVRASCRITTURA del valore obj!
  //
  return (
    <>
      <div className="card">
        <button
          onClick={() => {
            // setCount(100)
            setCount((currentCount) => {
              // in questa forma, dovete RITORNARE il nuovo valore da assegnare a
              // count
              return currentCount + 1 // incrementa di UNO ogni volta
            })
            // per cambiare il valore di isLoading da true a false
            // setIsLoading(false)
            setIsLoading((currentLoading) => {
              return !currentLoading // toggle, da true a false e viceversa
            })
          }}
        >
          count is {count} {/* sarebbe this.state.count */}
        </button>
        {isLoading && (
          <div>
            <Spinner animation="border" variant="success" />
          </div>
        )}
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

export default StateExample

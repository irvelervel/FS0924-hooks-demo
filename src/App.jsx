import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import StateExample from './components/StateExample'
import EffectExample from './components/EffectExample'

// REGOLE DEGLI HOOKS:
// 1) gli hooks si possono utilizzare solamente nei componenti React a funzione
// 2) gli hooks vanno posizionati sempre IN CIMA alla dichiarazione del componente
//  a funzione, PRIMA del return statement, al di fuori di CONDIZIONI, CICLI e altre funzioni

function App() {
  return (
    <>
      {/* <StateExample /> */}
      <EffectExample />
    </>
  )
}

export default App

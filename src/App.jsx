import './App.scss'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className="App">
      <Sidebar className="App__Sidebar" />
      <Home />
    </div>
  )
}

export default App

import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Footer, Loader, NavBar, Services, Transactions, Welcome} from './components'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <NavBar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      <div className="flex flex-row">
        <div>01</div>
        <div>02</div>
        <div>03</div>
      </div>
    </div>
  );
}

export default App

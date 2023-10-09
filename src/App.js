import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './Pages/Home/Home'
import Panier from './Pages/Panier/Panier'

const App = () => {

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/panier' element={<Panier />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;

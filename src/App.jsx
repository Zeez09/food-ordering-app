import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainApp from "./pages/MainApp";
import ConfirmOrder from "./pages/ConfirmOrder";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element = {<MainApp/>}></Route>
          <Route path='/ConfirmOrder' element = {<ConfirmOrder/>}></Route>
        </Routes>
      </Router>
      
    </div>
  )
}

export default App

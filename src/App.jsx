import { useState } from 'react';
// Importerer komponentene her
import Footer from './components/Footer/Footer';
import Sidebar from './components/Sidebar/Sidebar';
import Header from './components/Header/Header';
import Homepage from './components/Homepage/Homepage';

function App() {

  return (
    <div className="App">
     {/* Legg inn alle komponentene her. */}
      <Sidebar />
      <Header />
      <Homepage />
    </div>
  )
}

export default App;

import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount'


function App() {
  return (
    <div className="App">
        <NavBar />
        <CartWidget />
        <ItemListContainer />
        <ItemCount />
    </div>
  );
}

export default App;

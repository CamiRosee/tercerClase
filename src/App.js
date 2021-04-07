import React from 'react';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';



function App() {
  return (
    <div className="App">
        <NavBar />
        <CartWidget />
        <ItemListContainer />
    </div>
  );
}

export default App;

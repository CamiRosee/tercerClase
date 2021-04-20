import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import ItemCount from './components/ItemCount/ItemCount';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// importar views! 


function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <CartWidget />
        <ItemListContainer />
        <ItemCount />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />   //si tuviera carpetas de views, para cada uno
        </Switch>
      </div>
    </Router>
  );

}

export default App;

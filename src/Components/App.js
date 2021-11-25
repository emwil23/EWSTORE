import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Custom history tracker
import history from '../history';

//Components
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import HomePage from './Pages/Home';
import ProductSelect from './Pages/ProductSelect';
import About from './Pages/About';
import AccountInfo from './Pages/AccountInfo';
import Cart from './Pages/Cart';

function App() {
  return (
    <div className='ui containter'>
      <Router history={history}>
        <Auth />
        <Switch>
          <Route path='/EWSTORE' exact component={HomePage} />
          <Route path='/EWSTORE/dashboard' exact component={Dashboard} />
          <Route path='/EWSTORE/products/:id' exact component={ProductSelect} />
          <Route path='/EWSTORE/about' exact component={About} />
          <Route path='/EWSTORE/info' exact component={AccountInfo} />
          <Route path='/EWSTORE/cart' exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

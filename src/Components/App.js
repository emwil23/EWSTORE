import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Custom history tracker
import history from '../history';

//Components
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import Home from './Pages/Home';
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
          <Route path='/' exact component={Home} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/products/:id' exact component={ProductSelect} />
          <Route path='/about' exact component={About} />
          <Route path='/info' exact component={AccountInfo} />
          <Route path='/cart' exact component={Cart} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

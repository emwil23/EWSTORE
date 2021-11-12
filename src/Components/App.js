import React from 'react';
import { Router, Route } from 'react-router-dom';

//Custom history tracker
import history from '../history';

//Components
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';
import ProductSelect from './Pages/ProductSelect';

function App() {
  return (
    <div className='ui containter'>
      <Router history={history}>
        <>
          <Route path='/' exact component={Auth} />
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/products/:id' exact component={ProductSelect} />
        </>
      </Router>
    </div>
  );
}

export default App;

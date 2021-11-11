import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

//Components
import Auth from './Pages/Auth';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className='ui containter'>
      <BrowserRouter>
        <>
          <Route path='/' exact component={Auth} />
          <Route path='/dashboard' exact component={Dashboard} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;

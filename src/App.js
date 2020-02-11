import React from 'react';
import {  Route } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar';
import routes from './Routes';


function App() {
  
  const routeComponents = routes.map(({path, component, activeClassName}, key) => 
                                        <Route exact path={path} activeClassName={activeClassName ? activeClassName: ''} component={component} key={key} />
                                      );
  
  return (

    <div className="font-display container mx-auto px-4">
        <div className="flex flex-wrap">
           <Sidebar/>              
           <div className="w-full md:w-full lg:w-9/12">            
              <div className="w-full py-12 px-4 text-left">
                <Router>
                <Header/>
                { routeComponents }
                </Router>
            </div>
           </div>
        </div>
    </div>
  );
}

export default App;

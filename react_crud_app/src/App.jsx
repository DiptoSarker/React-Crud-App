import { useState } from 'react';
import {BrowserRouter as Router, Switch,Route,Link} from 'react-router-dom';

import './App.css'
import Delete from './Components/Delete/Delete';
import Home from './Components/Home/Home';
import { UserProvider } from './Components/UserContext/UserContext';

function App() {
 

  return (
   <div className='App'>
     <UserProvider>
      <Router>
       <Switch>

        <Route path="/delete/:id">
           <Delete/>
         </Route>

         <Route path="/">
           <Home/>
         </Route>

       </Switch>
      </Router>
     </UserProvider>
   </div>
     
  
  )
}

export default App

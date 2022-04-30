import { useState } from 'react';
import { Routes,Route,Link, BrowserRouter} from 'react-router-dom';

import './App.css'
import Delete from './Components/Delete/Delete';
import Home from './Components/Home/Home';
import { UserProvider } from './Components/UserContext/UserContext';

function App() {
 

  return (
   <div className='app'>
     <UserProvider>
      <BrowserRouter>
       <Routes>

        <Route path="/delete/:id" element={<Delete/>}/>
          

         <Route path="/" element={<Home/>}/>
         

       </Routes>
       </BrowserRouter>
      
     </UserProvider>
   </div>
     
  
  )
}

export default App

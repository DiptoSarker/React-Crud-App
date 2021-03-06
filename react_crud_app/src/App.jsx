import { useState } from 'react';
import { Routes,Route,Link, BrowserRouter} from 'react-router-dom';
import './App.css'
import Create from './Components/Create/Create';
import Delete from './Components/Delete/Delete';
import Home from './Components/Home/Home';
import Edit from './Components/Edit/Edit';
import Read from './Components/Read/Read';
import { UserProvider } from './Components/UserContext/UserContext';

function App() {
 

  return (
   <div className='app'>
     <UserProvider>
      <BrowserRouter>
       <Routes>

        <Route path="/edit/:id" element={<Edit/>}/>

        <Route path="/create/" element={<Create/>}/>

        <Route path="/read/:id" element={<Read/>}/>

        <Route path="/delete/:id" element={<Delete/>}/>
          
        <Route path="/" element={<Home/>}/>
         

       </Routes>
       </BrowserRouter>
      
     </UserProvider>
   </div>
     
  
  )
}

export default App

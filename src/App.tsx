import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import {

  RouterProvider, BrowserRouter as Router, Route, Routes
} from "react-router-dom";

import Login from './component/Login'
import Dashboard from './component/dashboard'
import AppScreen from './component/dashboard/screens/app'
import Machine from './component/dashboard/screens/machine'
import MachineType from './component/dashboard/screens/machinetype'
import MachineAttribute from './component/dashboard/screens/machineattributes'
function App() {
  

  return (
    // <div>
    //   <RouterProvider router={router} />
   
    // </div>

    <Router>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="app" element={<AppScreen/>} />
          <Route path="machine" element={<Machine/>} />
          <Route path="machinetype" element={<MachineType/>} />
          <Route path="machineattribute" element={<MachineAttribute/>} />
        </Route>
      </Routes>
    </Router>
         
  
     
     
       
    
  )
}

export default App

import React from 'react';
import ListUser from './ListUser';
import AddUser from './AddUser'; 
import UserEdit from './UserEdit';
import { NavLink ,Routes, Route } from 'react-router';
import '../App.css';

function App() {
  return (
    <>
      <h1>Router</h1>
       <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/add">Add User</NavLink></li>
            </ul>
      
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="Add" element={<AddUser />} />
        <Route path="/edit/:id" element= {<UserEdit />} />
      </Routes>
    </>
  );
}

export default App;

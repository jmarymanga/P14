import React from 'react'
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import NomComplet from './Component/Profile/NomComplet';
import Address from './Component/Profile/Address';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';



function App() {
  return (
    <div className="App">
      <h1 className="titre1">React Components Checkpoint</h1>
      <ProfilePhoto />
      <NomComplet  />
      <Address  />

    </div>
  );
}

export default App;

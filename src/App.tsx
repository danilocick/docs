import React from 'react';
import './App.css';
import DearDiary from './myself/DearDiary';
import Navigation from './components/navbar';
import PrinipalPage from './pages/PrincipalPage';

function App() {
  return (
    <div className="App">
      <Navigation/> 
      <PrinipalPage/>
      {/* <DearDiary/> */}
    </div>
  );
}

export default App;

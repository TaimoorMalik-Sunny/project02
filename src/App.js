import React from 'react';
import './App.css';
import Dinner from './dinner';

function App() {
  return (
    <div>
    <Dinner daystatus="Hot" daystatuspart2="Rush"/>
    <hr/>
    <Dinner daystatus="Cool" daystatuspart2="Awsome"/>
    </div>

  );
}

export default App;

import React from 'react';
import './App.css';
import ClassCounter01 from './components/ClassCounter01';
import HookCounter01 from './components/HookCounter01';
import HookCounterMulty from './components/HookCounterMulty';
import HookObject03 from './components/HookObject03';
import HookArray04 from './components/HookArray04';



function App() {
  return (
    <div className="App">
        <ClassCounter01 />
        <hr/>
        <HookCounter01 />
        <hr/>
        <HookCounterMulty />
        <hr/>
        <HookObject03 />
        <hr/>
        <HookArray04 />

    </div>
  );
}

export default App;

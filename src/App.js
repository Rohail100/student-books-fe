import React from 'react';
import Header from './components/Header';
import PageSwitch from './components/PageSwitch';
import './App.css';

function App() {
  const [page,setPage]=React.useState('students')

  return (
    <div className="App">
      <Header setPage={setPage}/>
      <PageSwitch page={page} setPage={setPage}/>
    </div>
  );
}

export default App;

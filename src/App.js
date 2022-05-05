import React from 'react';
import Header from './components/Header';
import PageSwitch from './components/PageSwitch';
import './App.css';

function App() {
  const [page,setPage]=React.useState('')

  return (
    <div className="App">
      <Header setPage={setPage}/>
      <PageSwitch page={page}/>
    </div>
  );
}

export default App;

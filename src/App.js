import React from 'react';
import Header from './components/Header';
import PageSwitch from './components/PageSwitch';
import './App.css';
const Context = React.createContext()

export const App= () => {
  const [page, setPage] = React.useState('students')
  const [curStudentid, setStudentId] = React.useState(null)
  const [curBookid, setbookId] = React.useState(null)


  return (
    <Context.Provider value={{curStudentid,curBookid,setPage,setStudentId,setbookId}} >
      <div className="App">
        <Header setPage={setPage} />
        <PageSwitch page={page}/>
      </div>
    </Context.Provider>

  );
}

export default Context;

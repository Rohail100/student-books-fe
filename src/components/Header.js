import React from 'react'
import {Button,ButtonGroup} from '@mui/material';

export default function Header({setPage}) {
  return (
    <header className="App-header">
          <ButtonGroup variant="contained" aria-label="outlined primary button group">
              <Button onClick={e => { setPage('students') }}>
                  Students
              </Button>
              <Button onClick={e => { setPage('books') }}>
                  Books
              </Button>
          </ButtonGroup>
    </header>
  )
}

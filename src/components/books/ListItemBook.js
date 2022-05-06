import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ListItemBook({book}) {
  return (
          <ListItem>
              <ListItemText sx={{textAlign:'center',cursor:'pointer'}} 
              primary={book.name+' by '+book.author+' borrowed by '+
              book.fullname+' date of borrow '+book.borrow_date+
              ' expected date of return '+book.return_date} />
          </ListItem>
  )
}

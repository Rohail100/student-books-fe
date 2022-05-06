import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Context from '../../App';

export default function ListItemBook({book}) {
  const { setPage } = React.useContext(Context)

  return (
          <ListItem>
              <ListItemText onClick={()=>{setPage('bookdetails')}} 
              sx={{textAlign:'center',cursor:'pointer'}} 
              primary={book.name+' by '+book.author} 
              secondary={book.borrowed_by ? ' borrowed by '+
              book.student_name+' date of borrow '+book.borrow_date+
              ' expected date of return '+book.return_date: 'Not Borrowed'}/>
          </ListItem>
  )
}

import React from 'react'
import Context from '../../App';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';

export default function BookDetails() {
  const { curBookid,setPage } = React.useContext(Context)
  const [book,setBook] = React.useState({})
  React.useEffect(()=>{
      fetch(`/api/books/${curBookid}`,{
          headers : { 
            'Content-Type': 'application/json',
           }
        })
          .then((response) => response.json())
          .then((data) => setBook(data))
  },[curBookid])

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
      subheader={
        <ListSubheader onClick={()=>{setPage('books')}} sx={{cursor:'pointer'}} component="div">
          Back
        </ListSubheader>
      }>
        <ListItem>
          {book.name}
        </ListItem>
    </List>

  )
}

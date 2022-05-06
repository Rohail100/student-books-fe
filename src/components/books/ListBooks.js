import React from 'react'
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemBook from './ListItemBook'


export default function ListBooks() {
    const [books,setBooks] = React.useState([])
    React.useEffect(()=>{
        fetch(`/api/books`,{
            headers : { 
              'Content-Type': 'application/json',
             }
          })
            .then((response) => response.json())
            .then((data) => setBooks(data))
    },[books])
    return (
        <List sx={{ width: '100%', maxWidth: 1100, bgcolor: 'background.paper', margin: 'auto' }}
            subheader={
                <ListSubheader component="div">
                    Books
                </ListSubheader>
            }>
            {books.map((book, index) => <ListItemBook key={index} book={book} />)}
        </List>
    )
}

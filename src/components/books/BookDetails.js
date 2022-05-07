import React from 'react'
import Context from '../../App';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

export default function BookDetails() {
  const { curBookid,setPage } = React.useContext(Context)
  const [book,setBook] = React.useState({
    name:'',
    author:'',
    borrowed_by:'',
    borrow_date:'',
    return_date:''
  })
  const [students,setStudents] = React.useState([])
  const [disabled,setDisabled] = React.useState(true)

  React.useEffect(()=>{
      fetch(`/api/books/${curBookid}`,{
          headers : { 
            'Content-Type': 'application/json',
           }
        })
          .then((response) => response.json())
          .then((data) => setBook(data))
  },[curBookid])

  React.useEffect(() => {
    fetch(`/api/students`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((response) => response.json())
      .then((data) => setStudents(data))
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault()

    //Validation
    const hasEmptyFields = Object.values(book).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
      return console.log("empty")
    }

    //Call api Update
    const res = await fetch(`/api/books/${curBookid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(book),
    })
    if(res.ok){
      setDisabled(true)
    }
  }


  const handleInputChange = (e) => {
    const { name, value } = e.target
    setBook({ ...book, [name]: value })
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
      subheader={
        <ListSubheader onClick={()=>{setPage('books')}} sx={{cursor:'pointer'}} component="div">
          Back
        </ListSubheader>
      }>
        <form onSubmit={handleSubmit} className='form'>
        <ListItem>
          <label htmlFor='name'>Book Name</label>
          <input
            type='text'
            id='name'
            name='name'
            value={book.name}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </ListItem>
        <ListItem>
          <label htmlFor='author'>Author</label>
          <input
            type='text'
            id='author'
            name='author'
            value={book.author}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </ListItem>
        <ListItem>
          <label htmlFor='borrowed_by'>Borrowed By</label>
          <Select
            sx={{width:'70%'}}
            id="borrowed_by"
            name="borrowed_by"
            value={book.borrowed_by ? book.borrowed_by:''}
            label="borrowed_by"
            onChange={handleInputChange}
            disabled={disabled}
          >
            {students.map((student, index) => 
            <MenuItem key={index} value={student.id}>{student.fname+' '+student.lname}</MenuItem>
            )}
          </Select>
        </ListItem>
        <ListItem>
          <label htmlFor='borrow_date'>Borrow Date</label>
          <input
            type='date'
            id='borrow_date'
            name='borrow_date'
            value={book.borrow_date ? book.borrow_date:''}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </ListItem>
        <ListItem>
          <label htmlFor='return_date'>Return Date</label>
          <input
            type='date'
            id='return_date'
            name='return_date'
            value={book.return_date ? book.return_date:''}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </ListItem>
        <ListItem>
          <input type='submit' value='Update' disabled={disabled}/>
          {disabled ? 
          <input onClick={()=>{setDisabled(false)}} type='button' value='Enable Edit' />
          :
          <input onClick={()=>{setDisabled(true)}} type='button' value='Disable Edit' />
          }
        </ListItem>
      </form>
    </List>

  )
}

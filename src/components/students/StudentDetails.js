import React from 'react'
import Context from '../../App';
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';

export default function StudentDetails() {
  const { curStudentid,setPage } = React.useContext(Context)
  const [student,setStudent] = React.useState({
    fname:'',
    lname:''
  })
  const [disabled,setDisabled] = React.useState(true)

  React.useEffect(()=>{
      fetch(`/api/students/${curStudentid}`,{
          headers : { 
            'Content-Type': 'application/json',
           }
        })
          .then((response) => response.json())
          .then((data) => setStudent(data))
  },[curStudentid])

  const handleSubmit = async (e) => {
    e.preventDefault()
    const res = await fetch(`/api/students/${curStudentid}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(student),
    })
    if(res.ok){
      setDisabled(true)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setStudent({ ...student, [name]: value })
  }

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
      subheader={
        <ListSubheader onClick={()=>{setPage('students')}} sx={{cursor:'pointer'}} component="div">
          Back
        </ListSubheader>
      }>
      <form onSubmit={handleSubmit} className='form'>
        <ListItem>
          <label htmlFor='name'>First Name</label>
          <input
            type='text'
            id='fname'
            name='fname'
            value={student.fname}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </ListItem>
        <ListItem>
          <label htmlFor='name'>Last Name</label>
          <input
            type='text'
            id='fname'
            name='fname'
            value={student.lname}
            onChange={handleInputChange}
            disabled={disabled}
          />
        </ListItem>
        <ListItem>
          <input type='submit' value='Update' disabled={disabled}/>
          {disabled ? 
          <input onClick={()=>{setDisabled(false)}} type='button' value='Enable' />
          :
          <input onClick={()=>{setDisabled(true)}} type='button' value='Disable' />
          }
        </ListItem>
      </form>
    </List>
  )
}

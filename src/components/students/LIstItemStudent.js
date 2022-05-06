import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Context from '../../App';

export default function ListItemStudent({student}) {
  const { setPage,setStudentId } = React.useContext(Context)

  return (
          <ListItem>
              <ListItemText onClick={()=>{setPage('studentdetails');setStudentId(student.id)}} 
              sx={{textAlign:'center',cursor:'pointer'}} 
              primary={student.fname+' '+student.lname} />
          </ListItem>
  )
}

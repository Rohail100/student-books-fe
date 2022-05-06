import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Context from '../../App';

export default function ListItemStudent({student}) {
  const { setPage } = React.useContext(Context)

  return (
          <ListItem>
              <ListItemText onClick={()=>{setPage('studentdetails')}} 
              sx={{textAlign:'center',cursor:'pointer'}} 
              primary={student.fname+' '+student.lname} />
          </ListItem>
  )
}

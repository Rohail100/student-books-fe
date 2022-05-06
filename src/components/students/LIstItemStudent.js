import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

export default function ListItemStudent({student}) {
  return (
          <ListItem>
              <ListItemText sx={{textAlign:'center',cursor:'pointer'}} primary={student.fname+' '+student.lname} />
          </ListItem>
  )
}

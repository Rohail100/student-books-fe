import React from 'react'
import List from '@mui/material/List';
import ListSubheader from '@mui/material/ListSubheader';
import ListItemStudent from './LIstItemStudent'

export default function ListStudents() {
    const [students,setStudents] = React.useState([])

    React.useEffect(()=>{
        fetch(`/api/students`,{
            headers : { 
              'Content-Type': 'application/json',
             }
          })
            .then((response) => response.json())
            .then((data) => setStudents(data))
    },[])
    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', margin: 'auto' }}
            subheader={
                <ListSubheader component="div">
                    Students
                </ListSubheader>
            }>
            {students.map((student, index) => <ListItemStudent key={index} student={student} />)}
        </List>
    )
}

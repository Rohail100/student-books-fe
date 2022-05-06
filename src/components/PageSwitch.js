import React from 'react'
import ListBooks from './books/ListBooks';
import ListStudents from './students/ListStudents';

export default function PageSwitch({page,setPage}) {
    switch(page) {
        case 'books':
          return <ListBooks/>;
        case 'students':
            return <ListStudents/>;
        default:
          return (<h1>404</h1>);;
      }
}

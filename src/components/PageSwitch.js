import React from 'react'
import ListBooks from './books/ListBooks';
import ListStudents from './students/ListStudents';
import BookDetails from './books/BookDetails';
import StudentDetails from './students/StudentDetails';

export default function PageSwitch({ page }) {
  switch (page) {
    case 'books':
      return <ListBooks />;
    case 'students':
      return <ListStudents />;
    case 'bookdetails':
      return <BookDetails />;
    case 'studentdetails':
      return <StudentDetails />;
    default:
      return (<h1>404</h1>);;
  }
}

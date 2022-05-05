import React from 'react'

export default function PageSwitch({page}) {
    switch(page) {
        case 'books':
          return (<h1>Books</h1>);
        default:
          return (<h1>404</h1>);;
      }
}

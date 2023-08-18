// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import * as React from 'react';
import './App.css'


// const welcome = {
//   title: 'React',
//   greeting: 'Hey',
// };

// function getTitle(title) {
//   return title;
// }

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search />

      <hr />

      <List />

    </div>
  );
}

function Search() {
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text"></input>
    </div>
  )
}

function List() {
  return (
    <ul>
    {list.map(function (item) {
      return (
        <li key={item.objectID}>
          <span>
            <a href={item.url}><i>{item.title}</i></a>
          </span>
          <ul>
            <li><span> by {item.author}</span></li>
            <li><span> Comments: {item.num_comments}</span></li>
            <li><span> Points: {item.points}</span></li>
          </ul>
          
        </li>
      );
    })}
  </ul>
  )
}

export default App

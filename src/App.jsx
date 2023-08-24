// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import * as React from 'react';
import './App.css';


const App = () => {
  console.log('App renders');
  const stories = [
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

  const handleSearch = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>My Hacker Stories</h1>

      <Search onSearch={handleSearch} />

      <hr />

      <List list={stories} />

    </div>
  );  
}

const Search = (props) => {
  let [searchTerm, setSearchTerm] = React.useState('initial state');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
    props.onSearch(event);
  };
  
  return (
    <div>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" onChange={handleChange}></input>

      <p>
        Searching for <strong> {searchTerm} </strong>
      </p>
    </div>
  );
}

const List = (props) => (
  <ul>
    {props.list.map((item) => (
      <Item key={item.objectID} item={item} />
    ))}
  </ul>
);


const Item = (props) => (
  <li>
    <span>
      <a href={props.item.url}><i>{props.item.title}</i></a>
    </span>
  <ul>
    <li><span> by {props.item.author}</span></li>
    <li><span> Comments: {props.item.num_comments}</span></li>
    <li><span> Points: {props.item.points}</span></li>
  </ul>
  
</li>
);

export default App

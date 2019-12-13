import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PeopleList from './components/PeopleList';


// Import styles
import './App.css';

const App = () => {
  const [page, setPage] = useState(1);
  const [people, setPeople] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people/?page=${page}`)
    .then(response => {
      setPeople(response.data.results);
      console.log(response.data)
    })
    .catch(error => {
      console.log(error)
  });

}, [page]);

  // Function to change page of people
  const changePage = () => {
    setPage(page => page + 1)
  }
  const changePage2 = () => {
    if (page > 1) {
      setPage(page => page - 1)
    } else {
      alert('You are on the first page')
    }
  }

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>

      <PeopleList
      people={people}
      changePage={changePage}
      changePage2={changePage2}
      />
    </div>
  );
}

export default App;

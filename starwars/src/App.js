import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Cards from './components/Cards'
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
      .get('https://swapi.co/api/people/')
      .then(response => {
        console.log(response.data)
        setData(response.data.results)
      })
      .catch(error => {
        console.log(error)
      })
    }, [])
  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">

      <h1 className="Header">React Wars</h1>

    <section className = 'CardContainer'>
    {data.map((character, index)=> {
      console.log(character);

      return (

        <Cards
        key={index}

        name={character.name}
        mass={character.mass}
        eye_color={character.eye_color}
        haircolor={character.hair_color}
        height={character.height}
        
        />
      )
      })}
    </section>
    </div>
  );
}

export default App;

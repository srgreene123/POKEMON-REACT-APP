import { useState } from "react";
export function SearchAndFetch () {
    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState("");

    //get full set of pokemon data
    const getPokemon = async(input) => {
        //get data from API
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const data = await response.json();
        console.log(data.results);
        setPokemons(data.results);
    }

    // const parseData = (e) => {
    //     console.log(e.target.value);
    //     setInput(e.target.value);
    //     console.log(input);
    // }

    return (
        <>
            <h1>Pokemon Finder</h1>
            <input value={input}/>
            <button onClick={getPokemon}>Search</button>
        </>
    );
}
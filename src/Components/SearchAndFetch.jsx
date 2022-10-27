import { useState } from "react";
export function SearchAndFetch () {
    const [pokemons, setPokemons] = useState([]);
    const [input, setInput] = useState("");
    //const [filteredPokemon, setFiltered] = useState([]);

    //get full set of pokemon data
    const getPokemon = async() => {
        //get data from API
        //const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await response.json();
        console.log(data.results);
        setPokemons(data.results);

    }

    //get input field and update state of that input
    const parseData = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <h1>Pokemon Finder</h1>
            <input type="text" placeholder="Search Pokemon" onChange={parseData} value={input}/>
            <button onClick={getPokemon}>Search</button>
            {/* <div>{filteredPokemon}</div> */}
        </>
    );
}
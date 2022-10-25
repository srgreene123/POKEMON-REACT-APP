import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";
export function SearchAndFetch () {
    const [pokemons, setPokemons] = useState([]);

    const getPokemon = async() => {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0");
        const data = await response.json();
        console.log(data.results);
        setPokemons(data.results);
    }

    return (
        <>
            <h1>Pokemon Finder</h1>
            <input></input>
            <button onClick={getPokemon}>Search</button>
        </>
    );
}
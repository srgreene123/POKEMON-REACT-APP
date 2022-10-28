import { useState } from "react";
export function SearchAndFetch () {
    const [pokemons, setPokemons] = useState([]);
    const [pokemon] = useState();
    const [input, setInput] = useState("");

    //get full set of pokemon data
    const getPokemon = async() => {
        //get data from API
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await response.json();
        console.log(data);
        setPokemons(data.species.name);
        console.log(pokemons);
;    }

    //get input field and update state of that input
    const parseData = (e) => {
        setInput(e.target.value);
        console.log(e.target.value);
    }

    //need to find a way to conditionally render the mapping of the pokemon result
    //map does not work because the api hasn't returned data yet by the time it's intially rendered
    return (
        <>
            <h1>Pokemon Finder</h1>
            <input type="text" placeholder="Search Pokemon" onChange={parseData} value={input}/>
            <button onClick={getPokemon}>Search</button>
            {/* <div>{pokemons.map((pokemon) => (<div key={pokemon.base_stat}>{pokemon}</div>
                ))}
            </div> */}
            <div>{JSON.stringify(pokemons, null, 2)}</div>
        </>
    );
}
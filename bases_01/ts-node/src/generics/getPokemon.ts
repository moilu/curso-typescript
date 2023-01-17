import axios from "axios";
import { Pokemon } from "../interfaces";

export const getPokemon = async( pokemonId: number ): Promise<Pokemon> =>{
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${ pokemonId }`);
    console.log(data);
    return data;
}
import { getPokemon } from "./generics/getPokemon";

getPokemon(4)
    .then(resp => console.log(resp.sprites.back_default))
    .catch(err => console.error(err))
    .finally(() => console.log('Fin del llamado'));

import getPokemon from 'json-pokemon/getPokemon';

export default (req, res) => {

    let result = {"error": "Could not find name."};

    let pokemon = getPokemon.getPokemonByTypeList(req.query.name);

    if(pokemon !== null) {
        result = pokemon;
    }

    res.json(result);

}
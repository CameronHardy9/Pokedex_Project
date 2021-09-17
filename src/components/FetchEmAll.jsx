function FetchEmAll() {
    let pokemon;
    fetch("https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json", {
        mode: "cors"
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        //data.pokemon -> 151 pokemon objects
        pokemon = data.pokemon;
    })
    .catch((err) => {
        console.error("Something went wrong: ", err);
    })
    console.log("FetchEmAll: ", pokemon)
    return pokemon;
}

export default FetchEmAll;
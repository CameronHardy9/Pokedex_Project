async function FetchEmAll() {
    let response = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
        {
            mode: "cors",
        }
    );
    let data = await response.json();
    return data.pokemon;
}

export default FetchEmAll;

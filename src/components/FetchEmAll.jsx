async function FetchEmAll() {
    try {
        let response = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
        {
            mode: "cors",
        }
    );
    let data = await response.json();
    return data.pokemon;
    } catch(err) {
        console.error(err);
    }
}

export default FetchEmAll;

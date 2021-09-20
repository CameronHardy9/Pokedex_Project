async function FetchEmAll() {
    try {
        let response = await fetch(
        "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json",
        {
            mode: "cors",
        }
    );
    let data = await response.json();
    for (let element of data.pokemon) {
        element.display = true;
    }
    return data.pokemon;
    } catch(err) {
        console.error(err);
    }
}

export default FetchEmAll;

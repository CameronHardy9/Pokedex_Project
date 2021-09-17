function Card(props) {
    let items = props.pokemon.map((item, idx) => {
        let { type, name, id } = item;
        if (name.includes(props.search) || !props.search)
            return (
                <li key={idx} id={id} className="pokeCardContainer">
                    <div className="pokeCard">
                        <span>{name}</span>
                        <span>{type}</span>
                    </div>
                </li>
            );
    });
    return <ul className="allCards">{items}</ul>;
}

export default Card;

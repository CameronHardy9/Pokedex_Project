import "./Card.css";

function Card(props) {
    let items = props.pokemon.map((item, idx) => {
        let { type, name, id, img, num, weaknesses } = item;
        if (name.includes(props.search) || !props.search) {
            return (
                <li key={idx} id={id} className="pokeCardContainer">
                    <div className="pokeCard">
                        <img className="profilePic" src={img} alt={name} />
                        <div>#{num}</div>
                        <div><strong>{name}</strong></div>
                        <div>{type}</div>
                        <div>{weaknesses}</div>
                    </div>
                </li>
            );
        }
    });
    return <ul className="allCards">{items}</ul>;
}

export default Card;

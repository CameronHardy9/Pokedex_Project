import "./Card.css"

function Card(props) {
    let items = props.pokemon.map((item, idx) => {
        let { type, name, id, img, num, weaknesses} = item;
        if (name.includes(props.search) || !props.search) {
            if(!props.type[0] || props.type.filter((i) => {type.includes(i)})) {        //Does not work
                if(!props.weakness[0] || weaknesses.forEach((e) => {props.weakness.includes(e)})) {     //Does not work
                    return (
                        <li key={idx} id={id} className="pokeCardContainer">
                            <div className="pokeCard">
                                <img className="profilePic" src={img} alt={name} />
                                <div>{num}</div>
                                <div>{name}</div>
                                <div>{type}</div>
                                <div>{weaknesses}</div>
                            </div>
                        </li>
                    );
                }
            }
        }
    });
    return <ul className="allCards">{items}</ul>;
}

export default Card;

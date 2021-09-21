import "./Card.css";
import { Link } from "react-router-dom";

function Card(props) {
    let items = props.pokemon.map((item, idx) => {
        let { type, name, id, img, num, weaknesses } = item;
        if (name.includes(props.search) || !props.search) {
            if (type.includes(...props.type) || !props.type[0]) {
                if (
                    weaknesses.includes(...props.weakness) ||
                    !props.weakness[0]
                ) {
                    return (
                        <li key={idx} id={id} className="pokeCardContainer">
                            <Link
                                style={{ textDecoration: "none" }}
                                to={`/${name}`}
                            >
                                <div className="pokeCard">
                                    <img
                                        className="profilePic"
                                        src={img}
                                        alt={name}
                                    />
                                    <div>#{num}</div>
                                    <div className="name">
                                        {name}
                                    </div>
                                    <div className="cardLower">
                                        <div>
                                            <label>Type</label>
                                            <ul>
                                                {type.map((item, idx) => {
                                                    return (
                                                        <li key={idx}>{item}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                        <div>
                                            <label>Weaknesses</label>
                                            <ul>
                                                {weaknesses.map((item, idx) => {
                                                    return (
                                                        <li key={idx}>{item}</li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    );
                }
            }
        }
    });
    return <ul className="allCards">{items}</ul>;
}

export default Card;

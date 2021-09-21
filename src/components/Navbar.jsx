import React from "react";
import "./Navbar.css";
import Type from "./Type"
import Weakness from "./Weakness"

class Navbar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            suggestion: "Pokémon name...",
        }
    }
    componentDidMount() {
        setInterval(this.searchSuggestion, 4000);
    }
    searchSuggestion = () => {
        let rand = Math.floor(Math.random() * this.props.pokemon.length);
        if(this.props.pokemon[rand].name) {
            this.setState({suggestion: this.props.pokemon[rand].name});
        }
    }
    render() {
        return (
            <nav>
                <ul>
                    <li><h1 className="pokedex">Pokédex</h1></li>
                    <li>
                        <input data-key="search" className="search" placeholder={this.state.suggestion} type="text" />
                    </li>
                    <li>
                        <details id="type">
                            <summary>Type</summary>
                            {Type(this.props.pokemon)}
                        </details>
                    </li>
                    <li>
                        <details id="weakness">
                            <summary>Weakness</summary>
                            {Weakness(this.props.pokemon)}
                        </details>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

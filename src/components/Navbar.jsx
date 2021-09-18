import React from "react";
import "./Navbar.css";
import Type from "./Type"

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pokemon: props.pokemon
        }
    }
    render() {
        console.log(this.state.pokemon)
        return (
            <nav>
                <ul>
                    <li>
                        <input data-key="search" className="search" placeholder="Pokemon name..." type="text" />
                    </li>
                    <li>
                        <details id="type">
                            <summary>Type</summary>
                            <Type pokemon={this.state.pokemon}/>
                        </details>
                    </li>
                    <li>
                        <details id="weakness">
                            <summary>Weakness</summary>
                            <ul>
                                <li>
                                    <input data-key="weakness" className="option" type="checkbox" name="ice" />
                                    Ice
                                </li>
                                <li>
                                    <input data-key="weakness" className="option" type="checkbox" name="rock" />
                                    Rock
                                </li>
                            </ul>
                        </details>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;

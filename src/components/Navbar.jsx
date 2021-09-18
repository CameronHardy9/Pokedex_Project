import React from "react";
import "./Navbar.css";
import Type from "./Type"
import Weakness from "./Weakness"

class Navbar extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li><h1>Pokédex</h1></li>
                    <li>
                        <input data-key="search" className="search" placeholder="Pokemon name..." type="text" />
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

import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <input data-key="search" className="search" placeholder="Pokemon name..." type="text" />
                    </li>
                    <li>
                        <details id="type">
                            <summary>Type</summary>
                            <ul>
                                <li>
                                    <input data-key="type" className="option" type="checkbox" name="fire" />
                                    Fire
                                </li>
                                <li>
                                    <input data-key="type" className="option" type="checkbox" name="water" />
                                    Water
                                </li>
                            </ul>
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

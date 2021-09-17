import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
    constructor() {
        super();
        this.state = {
            search: null,
        }
    }
    changeHandler = (e) => {
        this.setState({search: e.target.value})
    }
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <input className="search" onChange={this.changeHandler} placeholder="Pokemon name..." type="text" />
                    </li>
                    <li>
                        <details id="type">
                            <summary>Type</summary>
                            <ul>
                                <li>
                                    <input className="option" type="checkbox" name="fire" />
                                    Fire
                                </li>
                                <li>
                                    <input className="option" type="checkbox" name="water" />
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
                                    <input className="option" type="checkbox" name="earth" />
                                    Earth
                                </li>
                                <li>
                                    <input className="option" type="checkbox" name="shadow" />
                                    Shadow
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

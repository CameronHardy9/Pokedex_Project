import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import FetchEmAll from "./components/FetchEmAll";
import Card from "./components/Card";
import { Switch, Route, Link } from "react-router-dom";
import Profile from "./components/Profile"

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: [],
            fetchDone: false,
            search: null,
            suggestion: "Pokemon name...",
            type: [],
            weakness: [],
        };
    }
    componentDidMount = async () => {
        this.setState({
            pokemon: await FetchEmAll(),
            fetchDone: true,
        });
    };
    handleChange = (e) => {
        // could shorten by plugging type or weakness one iteration of the add/remove logic
        switch (e.target.dataset.key) {
            case "search":
                this.setState({ search: e.target.value.toLowerCase() });
                break;
            case "type":
                const typeBox = document.querySelectorAll(`[data-key="type"]`);
                if (e.target.checked) {
                    typeBox.forEach((item) => {
                        if(item.name !== e.target.name) {
                            item.disabled = true;
                        }
                    })
                    this.setState({
                        type: [...this.state.type, e.target.name],
                    });
                } else {
                    typeBox.forEach((item) => {
                        item.disabled = false;
                    })
                    this.setState({
                        type: this.state.type.filter(
                            (item) => item !== e.target.name
                        ),
                    });
                }
                break;
            case "weakness":
                const weakBox = document.querySelectorAll(`[data-key="weakness"]`);
                if (e.target.checked) {
                    weakBox.forEach((item) => {
                        if(item.name !== e.target.name) {
                            item.disabled = true;
                        }
                    })
                    this.setState({
                        weakness: [...this.state.weakness, e.target.name],
                    });
                } else {
                    weakBox.forEach((item) => {
                        item.disabled = false;
                    })
                    this.setState({
                        weakness: this.state.weakness.filter(
                            (item) => item !== e.target.name
                        ),
                    });
                }
                break;
            default:
                console.error("Something went wrong. Please try again.");
                break;
        }
    };
    render() {
        let mainDisplay;
        if (this.state.fetchDone) {
            mainDisplay = (
                <Card
                    pokemon={this.state.pokemon}
                    search={this.state.search}
                    type={this.state.type}
                    weakness={this.state.weakness}
                />
            );
        } else {
            mainDisplay = <h1 className="loader">Loading...</h1>;
        }
        return (
            <div onChange={this.handleChange} className="mainContainer">
                <Navbar pokemon={this.state.pokemon} />
                <main>
                    <Switch>
                        <Route exact path="/">
                            {mainDisplay}
                        </Route>
                        {this.state.pokemon.map((item, idx) => {
                            return (
                                <Route key={idx} path={`/${item.name}`}>
                                    <div className="back">
                                        <Link
                                            style={{ textDecoration: "none" }}
                                            exact
                                            to="/"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                height="24px"
                                                viewBox="0 0 24 24"
                                                width="24px"
                                                fill="#000000"
                                            >
                                                <path
                                                    d="M0 0h24v24H0V0z"
                                                    fill="none"
                                                />
                                                <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <Profile profile={item}/>
                                </Route>
                            );
                        })}
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;

import "./App.css";

import React from "react";
import Navbar from "./components/Navbar";
import FetchEmAll from "./components/FetchEmAll";
import Card from "./components/Card";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            pokemon: [],
            search: null,
            type: [],
            weakness: [],
        };
    }
    componentDidMount = async () => {
        this.setState({ pokemon: await FetchEmAll() });
    };
    searchSuggestion = () => {
        let names = this.state.pokemon; //randomize a selection directly from state
        console.log(names);
        return names;
    };
    changeHandler = (e) => {    // could shorten by plugging type or weakness one iteration of the add/remove logic
        switch (e.target.dataset.key) {
            case "search":
                this.setState({ search: e.target.value });
                break;
            case "type":
                if(e.target.checked) {
                    this.setState({ type: [...this.state.type, e.target.name] });
                } else {
                    this.setState({type: this.state.type.filter((item) => item != e.target.name)})
                }
                break;
            case "weakness":
                if(e.target.checked) {
                    this.setState({ weakness: [...this.state.weakness, e.target.name] });
                } else {
                    this.setState({weakness: this.state.weakness.filter((item) => item != e.target.name)})
                }
                break;
            default:
                console.error("Something went wrong. Please try again.");
                break;
        }
    };
    render() {
        return (
            <div onChange={this.changeHandler} className="mainContainer">
                <Navbar />
                <main>
                    <h1>{this.state.search}</h1>
                    <h1>{this.state.type}</h1>
                    <h1>{this.state.weakness}</h1>
                    <Card
                        pokemon={this.state.pokemon}
                        search={this.state.search}
                        type={this.state.type}
                        weakness={this.state.weakness}
                    />
                </main>
            </div>
        );
    }
}

export default App;

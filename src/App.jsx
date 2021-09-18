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
            fetchDone: false,
            search: null,
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
    searchSuggestion = () => {
        let names = this.state.pokemon; //randomize a selection directly from state
        console.log(names);
        return names;
    };
    handleChange = (e) => {    // could shorten by plugging type or weakness one iteration of the add/remove logic
        switch (e.target.dataset.key) {
            case "search":
                this.setState({ search: e.target.value });
                break;
            case "type":
                if(e.target.checked) {
                    this.setState({ type: [...this.state.type, e.target.name] });
                } else {
                    this.setState({type: this.state.type.filter((item) => item !== e.target.name)})
                }
                break;
            case "weakness":
                if(e.target.checked) {
                    this.setState({ weakness: [...this.state.weakness, e.target.name] });
                } else {
                    this.setState({weakness: this.state.weakness.filter((item) => item !== e.target.name)})
                }
                break;
            default:
                console.error("Something went wrong. Please try again.");
                break;
        }
    };
    render() {
        let mainDisplay;
        if(this.state.fetchDone) {
            mainDisplay = (
                <Card
                        pokemon={this.state.pokemon}
                        search={this.state.search}
                        type={this.state.type}
                        weakness={this.state.weakness}
                    />
            )
        } else {
            mainDisplay = <h1 className="loader">Loading...</h1>
        }
        return (
            <div onChange={this.handleChange} className="mainContainer">
                <Navbar pokemon={this.state.pokemon}/>
                <main>
                    {mainDisplay}
                </main>
            </div>
        );
    }
}

export default App;

import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import FetchEmAll from './components/FetchEmAll';

class App extends React.Component{
    constructor() {
        super();
        this.state ={
            pokemon: [],
        }
    }
    componentDidMount = () => {
        const pokemon = FetchEmAll();
        console.log("componentDidMount: ",pokemon)
        this.setState({pokemon: pokemon});
    }
    render() {
        console.log("App State: ",this.state.pokemon);
        return (
            <div className="mainContainer">
                <Navbar />
                <main>

                </main>
            </div>
        );
    }
}

export default App;

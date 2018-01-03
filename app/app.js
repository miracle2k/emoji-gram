// import deps
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Phrase from '../components/Phrase/Phrase.js';
import Customizer from '../components/Customizer/Customizer.js';
import Art from '../components/Art/Art.js';
import Copy from '../components/Copy/Copy.js';

import css from './app.css';

// main app that binds everything together
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'shading': '❄️',
            'fill': '❤️',
            'phrase': '',
            'art': '',
            zoom: 2
        };
    }

    _setState(obj) {
        this.setState(obj);
    }

    render() {
        const {phrase, fill, shading, art} = this.state;

        return (
            <div className="app">
                <input type="number" step="1"
                        value={this.state.zoom}
                        onChange={e => this.setState({zoom: e.target.value})}
                />
                <Phrase
                    phrase={phrase}
                    _setState={(e) => this._setState(e)}/>
                <div className="container">
                    <div className="fade-away"></div>
                    <Art
                        _setState={(e) => this._setState(e)}
                        phrase={phrase}
                        fill={fill}
                        shading={shading}
                        zoom={this.state.zoom}
                        fontSize={16 / this.state.zoom}
                    />
                    <Copy
                        phrase={phrase}
                        art={art}/>
                    <Customizer
                        _setState={(e) => this._setState(e)}
                        phrase={phrase}
                        fill={fill}
                        shading={shading}/>
                </div>
            </div>
        );
    }
}

// Bind main app to DOM
ReactDOM.render(
    <App />,
    document.getElementById('app')
);

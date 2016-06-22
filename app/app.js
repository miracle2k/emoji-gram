// import deps
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Phrase from '../components/Phrase/Phrase.js';
import Customizer from '../components/Customizer/Customizer.js';
import Art from '../components/Art/Art.js';
import Copy from '../components/Copy/Copy.js';

// main app that binds everything together
class App extends React.Component {
    constructor() {
        super();
        this.state = {
            'shading': '❄️',
            'fill': '❤️',
            'phrase': '',
            'art': ''
        };
    }

    _setState(obj) {
        this.setState(obj);
    }

    render() {
        const {phrase, fill, shading, art} = this.state;

        return (
            <div className="app">
                <Phrase
                    phrase={phrase}
                    _setState={(e) => this._setState(e)}/>
                <div className="container">
                    <div className="fade-away"></div>
                    <Art
                        _setState={(e) => this._setState(e)}
                        phrase={phrase}
                        fill={fill}
                        shading={shading}/>
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

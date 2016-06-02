import React from 'react';

class Art extends React.Component {
  render() {
    var that = this;
    //TODO Add all the patterns
    var patterns = {
      "-": "XXXXXXXX\n",
      "a": "XXOOOXXX\nXXXOOOXX\nXXOXOOXX\nXXOXXOOX\nXOOOOOOX\nXOXXXOOO\nOOOXOOOO\nXXXXXXXX\n",
      "b": "OOOOOOOX\nOOXXXXOO\nOOXXXXOO\nOOOOOOOX\nOOOOOOOX\nOOXXXXOO\nOOXXXXOO\nOOOOOOOX\n",
      "c": "XXOOOOXX\nXOOXXOOX\nOOXXXXXO\nOOXXXXXX\nOOXXXXXX\nOOXXXXXO\nXOOXXOOX\nXXOOOOXX\n",
      "d": "OOOOOOXX\nOOXXXOOX\nOOXXXXOO\nOOXXXXOO\nOOXXXXOO\nOOXXXXOO\nOOXXXOOX\nOOOOOOXX\n",
      "e": "OOOOOOOO\nOOXXXXXX\nOOXXXXXX\nOOOOOOOO\nOOXXXXXX\nOOXXXXXX\nOOOOOOOO\nOOOOOOOO\n",
      "f": "OOOOOOOO\nOOXXXXXX\nOOXXXXXX\nOOOOOXXX\nOOOOOXXX\nOOXXXXXX\nOOXXXXXX\nOOXXXXXX\n",
      "g": "XOOOOOOO\nOOOOOOOX\nOOOXXXXX\nOOXXXXXX\nOOXXOOOO\nOOXXXXOO\nXOOXXXOO\nXXOOOOOO\n",
      "h": "OOOXXOOO\nXOOXXOOX\nXOOXXOOX\nXOOOOOOX\nXOOXXOOX\nXOOXXOOX\nOOOXXOOO\nXXXXXXXX\n",
      "i": "OOOOOOOO\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nOOOOOOOO\n",
      "j": "XXXXXXOO\nXXXXXXOO\nXXXXXXOO\nXXXXXXOO\nXXXXXXOO\nOOXXXXOO\nOOXXXXOO\nXOOOOOOX\n",
      "k": "OOOOXOOO\nXOOXXOOX\nXOOXOOXX\nXOOOOXXX\nXOOXOOXX\nXOOXXOOX\nOOOOXOOO\nXXXXXXXX\n",
      "l": "OOXXXXXX\nOOXXXXXX\nOOXXXXXX\nOOXXXXXX\nOOXXXXXX\nOOXXXXXX\nOOOOOOOO\nOOOOOOOO\n",
      "m": "",
      "n": "OOOXXOOO\nXOOOXXOX\nXOOOXXOX\nXOXOOXOX\nXOXOOXOX\nXOXXOOOX\nOOOXOOOX\nXXXXXXXX\n",
      "o": "XXOOOOXX\nXOOXXOOX\nXOOXXOOX\nXOOXXOOX\nXOOXXOOX\nXOOXXOOX\nXXOOOOXX\nXXXXXXXX\n",
      "p": "",
      "q": "",
      "r": "",
      "s": "",
      "t": "OOOOOOOO\nOOXOOXOO\nOXXOOXXO\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXOOOOXX\nXXXXXXXX\n",
      "u": "OOOOXOOO\nXOOXXXOX\nXOOXXXOX\nXOOXXXOX\nXOOXXXOX\nXOOXXXOX\nXXOOOOXX\nXXXXXXXX\n",
      "v": "",
      "w": "",
      "x": "",
      "y": "XXXXXXXX\nOOOOXOOO\nXOOXXXOX\nXXOOXOXX\nXXXOOXXX\nXXXOOXXX\nXXXOOXXX\nXXOOOOXX\nXXXXXXXX\n",
      "z": ""
    };

    var art = '';
    var phrase = '-' + this.props.phrase.toLowerCase();
    if (phrase.length > 1) {
      phrase = phrase.replace(/ /gi, '-');
      art = phrase.split('').map(function (v, k) {
        return patterns[v].replace(/x/gi, that.props.shading).replace(/o/gi, that.props.fill);
      });
    }

    return (
      <div className="Art" hidden={this.props.phrase === ''}>
        <pre id="art" ref="art">{art}</pre>
      </div>
    );
  }
}

export default Art;

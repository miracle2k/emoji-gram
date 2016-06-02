import React from 'react';

class Phrase extends React.Component {

  constructor(){
    super();
    this.state = {
      tip: false
    };

    this.toggleTip = this.toggleTip.bind(this);
    this.clear = this.clear.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
    this._handlePaste = this._handlePaste.bind(this);
  }


  _handleKeyDown(e) {
    var allowed = [8, 32, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90];
    if (allowed.indexOf(e.which) < 0) {
      e.preventDefault();
    }
  }

  _handleChange(e) {
    this.props._setState({ 'phrase': e.target.value });
  }

  _handlePaste(e) {
    e.preventDefault();
  }

  clear(){
    this.props._setState({ 'phrase': '' });
    this.refs.editor.focus();
  }

  toggleTip(){
    this.setState({tip: !this.state.tip});
  }

  render() {
    const {phrase} = this.props;
    return (
      <div className="Phrase">
        <div className="field">
          <input type="text" name="phrase" id="phrase" autoFocus
                 ref="editor"
                 value={phrase}
                 placeholder="TYPE HERE"
                 onPaste={this._handlePaste}
                 onKeyDown={this._handleKeyDown}
                 onChange={this._handleChange} />
          <button className="clear"
                  onClick={this.clear} onMouseEnter={this.toggleTip} onMouseLeave={this.toggleTip}>&times;</button>
          {phrase && this.state.tip ? <div className="tip">Clear input</div> : null}
        </div>
      </div>
    );
  }
}

export default Phrase;

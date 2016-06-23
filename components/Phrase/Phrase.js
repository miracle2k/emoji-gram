import React from 'react';
import css from './Phrase.css';

class Phrase extends React.Component {

  constructor(){
    super();

    this.clear = this.clear.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handlePaste = this._handlePaste.bind(this);
  }
  

  _handleChange(e) {
    this.props._setState({ 'phrase': e.target.value });
    setTimeout( _ => {
         this.gotoBottom();
    }, 50);
  }

  _handlePaste(e) {
    e.preventDefault();
  }

  clear(){
    this.props._setState({ 'phrase': '' });
    this.refs.editor.focus();
  }

  gotoBottom(){
     var div = document.getElementsByClassName('Art')[0]
     div.scrollTop = div.scrollHeight; 
  }

  render() {
    const {phrase} = this.props;
    return (
      <div className="Phrase">
        <div className="field">
          <input type="text" name="phrase" id="phrase" autoFocus
                 autoComplete={false} 
                 ref="editor"
                 value={phrase}
                 placeholder="TYPE HERE"
                 onPaste={this._handlePaste}
                 onChange={this._handleChange} />
          <button className="clear"
                  onClick={this.clear}>&times;</button>
        </div>
      </div>
    );
  }
}

export default Phrase;

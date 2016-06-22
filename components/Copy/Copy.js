import React from 'react';
import Clipboard from 'clipboard';

import css from './Copy.css';

class Copy extends React.Component {
  constructor() {
    super();
    this.state = {
      showAlert: false
    }

    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick() {
    var that = this;
    that.setState({ showAlert: true });
    setTimeout(function() {
      that.setState({ showAlert: false });
    }, 3000);
    this.selectText('art');
  }

  selectText(elem) {
    if (document.selection) {
      const range = document.body.createTextRange();
      range.moveToElementText(document.getElementById(elem));
      range.select();
    } else if (window.getSelection) {
      var range = document.createRange();
      range.selectNode(document.getElementById(elem));
      window.getSelection().addRange(range);
    }
  }

  render() {
    new Clipboard('#copy');

    return (
      <div className="Copy" hidden={this.props.phrase === ''}>
        <button className="select-btn" type="button" id="copy" data-clipboard-target="#art" onClick={this._handleClick}>
          <span hidden={this.state.showAlert}>SELECT EMOJI</span>
          <span hidden={!this.state.showAlert}>Copied!</span>
        </button>
      </div>
    );
  }
}

export default Copy;

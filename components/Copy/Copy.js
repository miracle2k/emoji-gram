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
    this.showCopiedMessage = this.showCopiedMessage.bind(this);
  }

  componentDidMount(){
    var clipboard = this.clipboard = new Clipboard('#copy');

    clipboard.on('success', e =>  {
        e.clearSelection();
        this.showCopiedMessage();

    });

    clipboard.on('error', function(e) {
        //Safari
        var ele = document.getElementById('art');
        ele && ele.select();
    });
  }

  _handleClick() {
    var that = this;
    that.setState({ showAlert: true });
    setTimeout(function() {
      that.setState({ showAlert: false });
    }, 3000);
    
    //this.selectText('art');
  }

  showCopiedMessage(){
    this.setState({ showAlert: true });
    setTimeout( _ => {
      this.setState({ showAlert: false });
    }, 3000);
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
    return (
      <div className="Copy" hidden={this.props.phrase === ''}>
        <button className="select-btn" type="button" id="copy" data-clipboard-target="#art">
          <span hidden={this.state.showAlert}>SELECT EMOJI</span>
          <span hidden={!this.state.showAlert}>COPIED!</span>
        </button>
      </div>
    );
  }
}

export default Copy;

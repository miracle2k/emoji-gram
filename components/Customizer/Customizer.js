import React from 'react';
import emojis from './emojis';

class Customizer extends React.Component {
  constructor(props) {
    super();
    this.shading = props.shading;
    this.fill = props.fill;

    this.setEmoji = this.setEmoji.bind(this);
  }

  _handleKeyDown(e) {
    var allowed = [91, 17, 32, 8];
    if (allowed.indexOf(e.which) < 0) {
      e.preventDefault();
    }
  }


  _handleChange(e) {
    this[e.target.name] = e.target.value;
    this.props._setState({ 'shading': this.shading, 'fill': this.fill });
  }

  setEmoji(props){
      this.props._setState(props);
  }

  render() {
    return (
      <div className="Customizer">
        <div className="scrollers">
            <Scroller emojis={emojis.fills} onEmojiSelect={this.setEmoji} type="fill" className="left scroll" />
            <Scroller emojis={emojis.cover} onEmojiSelect={this.setEmoji} type="shading" className="right scroll"  />
        </div>
      </div>
    );
  }
}



class Scroller extends React.Component{

    constructor(){
        super();

        this.onScroll = this.onScroll.bind(this)
    }
    onScroll(e){
        let scrollTop = e.target.scrollTop;
        const itemIdx = Math.round(scrollTop/20);
        const {type, emojis, onEmojiSelect} = this.props;
        const em = emojis[itemIdx];

        if(em){
            onEmojiSelect({
                [type]: em
            });
        }

    }

    componentDidMount(){
        this.refs[this.props.type].addEventListener('scroll', this.onScroll, false);
    }

    componentWillUnmount(){
        this.refs[this.props.type].removeEventListener('scroll', this.onScroll);
    }

    render(){

        const emojisList = this.props.emojis.map((i, idx) => {
            return (
                <li onClick={this.props.onEmojiSelect.bind(this, {[this.props.type]: i})} key={idx}>{i}</li>
            )
        });

        return (
            <div className={this.props.className} ref={this.props.type}>
                <div className="roll-cover"/>
                <ul className="emoji-roll">
                    {emojisList}
                </ul>
            </div>
        )
    }
}

export default Customizer;

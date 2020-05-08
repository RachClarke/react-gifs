import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    if (this.props.updateSelectedGifId) {
      this.props.updateSelectedGifId(this.props.id);
    }
  }

  render () {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <div className="selected-gif">
        <img src={src} className="gif"
        onClick={this.handleClick}
        />
      </div>
    );
  }
}

export default Gif;

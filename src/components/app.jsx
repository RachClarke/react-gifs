import React, { Component } from 'react';
import Giphy from 'giphy-api';
import SearchBar from './search_bar';
import Gif from './gif';
import GifList from './gif_list';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: ""
    };
  }

  search = (query) => {
    Giphy("NUeHDCzRYRIQ7M18TYiXlb8E8vi25gow").search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  updateSelectedGifId = (id) => {
    this.setState({
      selectedGifId: id
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search}/>
          {this.state.selectedGifId && <Gif id={this.state.selectedGifId} />}
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} updateSelectedGifId={this.updateSelectedGifId} />
        </div>
      </div>
    );
  }
}

export default App;

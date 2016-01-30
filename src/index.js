import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
import YTSearch from "youtube-api-search";
const API_KEY = "AIzaSyDzhLqeZF6dl6MPiapm2FRtlUc9s4FvX8c";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };
  }

  componentDidMount() {
    YTSearch({key: API_KEY, term: "tony romo"}, (data) => {
      this.setState({ videos: data });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.videos[0]} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  } 
}

ReactDOM.render(<App />, document.querySelector(".container"));

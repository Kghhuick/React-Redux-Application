import React,{Component} from "react";
import ReactDom from "react-dom";
import SearchBar from "./components/search_bar";
import YTSearch from "youtube-api-search";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail"
const API_KEY = "AIzaSyDjDUf-O0zTHtR73Tme14AjqVlsuY3Bpjg";

class App extends Component {
  constructor(props){
    super(props);

      this.state = {
        videos:[],
         selectedVideo :null
       };

    YTSearch({key:API_KEY,term : "surfboards"},(videos) => {
      this.setState({videos});
    });
   }

  render(){
  return(
        <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
        </div>
      );
     }
}



ReactDom.render(<App />,document.querySelector(".container"));

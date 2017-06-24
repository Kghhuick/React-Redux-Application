import _ from "lodash";
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
       this.videoSearch("surfboards");
  }

   videoSearch(term){
     YTSearch({key:API_KEY,term : term},(videos) => {
       this.setState({videos:videos,
       selectedVideo: videos[0]
       });
     });

   }
 




  render(){
    const videSearch = _.debounce((term) =>{this.videSearch(term)},300);


   return(
        <div>
        <SearchBar onSearchTermChange = {video.Search} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo =>this.setState({selectedVideo})}
          videos={this.state.videos} />
        </div>
      );
     }
}



ReactDom.render(<App />,document.querySelector(".container"));

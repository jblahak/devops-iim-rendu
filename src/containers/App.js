import React, {Component} from 'react';
import SearchBar from '../components/search-bar';
import Video from '../components/video';
import VideoList from './video-list';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/style.css'

const API_GET = "https://www.googleapis.com/youtube/v3/";
const API_KEY = "key=AIzaSyBUsvL69XdqIlk150bG1y2eEbl_WHv2ZIk";
const OneVideoParam = "part=snippet,contentDetails";
const searchVideoParam = "part=snippet&maxResults=25";

let displayToggle = 'displayNone';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      videoList: {},
      currentVideo: {}
    }
  }

  applyVideoToCurrentVideo(){
    axios.get(`${API_GET}videos?${OneVideoParam}&id=${this.state.currentVideo}&${API_KEY}`)
      .then(function(response){
        const youtubeId = response.data.items[0];
        let newCurrentVideoState = this.state.currentVideo;
        newCurrentVideoState = youtubeId;
        this.setState({currentVideo : newCurrentVideoState});
      }.bind(this))
  }

  onClickSearch(searchText){
    if(searchText){
      axios.get(`${API_GET}search?${searchVideoParam}&q=${searchText}&type=video&${API_KEY}`)
        .then(function(response){
          if(response.data && response.data.items[0]){
            if(response.data.items[0].id.videoId !== this.state.currentVideo.id){
              displayToggle = 'displayBlock';
              this.setState({
                currentVideo: response.data.items[0].id,
                videoList: response.data.items.slice(0,5)
              })
            }
          }
        }.bind(this))
    }
  }

  onClickListItem(video){
    this.setState({currentVideo: video.id.videoId}, function(){
      this.applyVideoToCurrentVideo();
    })
  }

  render(){
    const renderVideoList = () => {
      if (this.state.videoList.length >= 1) {
        return (
          <VideoList videoList={this.state.videoList} callback={this.onClickListItem.bind(this)}/>
        )
      }
    }

    return (
      <div>
        <h1>Hello!</h1>
        <p id="text-presentation">Vous pouvez effectuer une recherche youtube juste en dessous. Enjoy :)!</p>
        <SearchBar callback={this.onClickSearch.bind(this)}/>
        <Video className={displayToggle} videoID={this.state.currentVideo}/>
        {renderVideoList()}
      </div>
    )
  }
} 

export default App;

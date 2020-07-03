import React from 'react';
import VideoListItem from '../components/video-list-item'

const VideoList = (props) => {
    const {videoList} = props;
    return (
        <div>
            <ul>
                {
                    videoList.map(video => {
                        return <VideoListItem key={video.id.videoId} video={video} callback={receiveCallBack}/>
                    })
                }
            </ul>
        </div>
    );

    function receiveCallBack(video){
        props.callback(video);
    }
}

export default VideoList 
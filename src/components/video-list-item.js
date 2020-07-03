import React from 'react';

const VideoListItem = (props) => {
    const {video} = props;
    return (
        <li onClick={handleOnClick} className="rounded col-lg-8 list-group-item">
            <div className="media">
                <div className="float-left">
                    <img className="rounded float-left" alt="test" src={video.snippet.thumbnails.default.url} />
                </div>
                <div className="media-body">
                    <h5 className="title_list_item">{video.snippet.title}</h5>
                </div>
            </div>
        </li>
    )

    function handleOnClick(){
       props.callback(video); 
    }
}

export default VideoListItem
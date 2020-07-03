import React from 'react';

const BASE_VIDEO_URL = 'https://www.youtube.com/embed/';

const Video = ({videoID, className}) => {
    if(videoID.hasOwnProperty('id')){
        return(
            <div className="col-lg-6 embed-responsive embed-responsive-16by9 marginAutoTopBot50px">
                <iframe src={`${BASE_VIDEO_URL}${videoID.id}`} className="embed-responsive-item" title="ma-video" allowFullScreen />
            </div>
        )    
    } else {
        return(
            <div className="col-lg-6 embed-responsive embed-responsive-16by9 marginAutoTopBot50px">
                <iframe src={`${BASE_VIDEO_URL}${videoID.videoId}`} className={className} title="ma-video" allowFullScreen />
            </div>
        )
    }
}

export default Video
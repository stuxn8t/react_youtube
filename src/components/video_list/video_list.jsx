import React from 'react';
import VideoItem from '../video_item/video_item';

const VideoList = (props) => (
    <ul>
        {props.videos.map(video => (
        <VideoItem key={video.id} video={video} /> // map함수로 videos에 있는 비디오들을 video에 담아 한바퀴 돌며 VideoItem을 통해 화면에 표시해줌
                                     // map으로 순환된 {video}를 video에 담음 
        ))}
    </ul>
);

export default VideoList;
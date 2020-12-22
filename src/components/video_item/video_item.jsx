import React from 'react';
import styles from './video_item.module.css';

const VideoItem = ({ video, video : { snippet }, onVideoClick, display }) => {
//<h1>{props.video.snippet.title}</h1>;
// 타이틀을 출력함
const displayType = display === 'list' ? styles.list : styles.grid;
return (
<li className={`${styles.container} ${displayType}`} onClick={() => onVideoClick(video)}>
    <div className={styles.video}>
        <img  className={styles.thumbnail} src={snippet.thumbnails.medium.url} 
        alt="video thumbnail"></img>
        <div className={styles.metadata}>
            <p className={styles.title}>{snippet.title}</p>
            <p className={styles.channel}>{snippet.channelTitle}</p>
        </div>
    </div>
</li>
)};

export default VideoItem;
import React, { useEffect, useState } from 'react';
import styles from './app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';
import VideoDetail from './components/video_detail/video_detail'

function App() {
  const [videos, setVideos] = useState([]); // 빈 배열이 videos에 할당됨
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  
  const selectVideo = (video) => {
    setSelectedVideo(video);
  }
  
  const search = query => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=AIzaSyCK6BW_hCtoAO9d2dKadk6Vciy4yWDTS2U`,
     requestOptions)
      .then(response => response.json())
      .then(result => result.items.map(item => ({...item, id:item.id.videoId })))
      .then(items => setVideos(items))
      .then(video_detail => setSelectedVideo(null)) // 디테일 화면에서 다른 비디오 검색 시 홈으로 돌아가기 
      .catch(error => console.log('error', error));
  };

  useEffect(() => {
    const requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyCK6BW_hCtoAO9d2dKadk6Vciy4yWDTS2U",
       requestOptions
    )
       .then(response => response.json()) // api 요청에 대한 응답을 json으로 받음
       .then(result => setVideos(result.items)) // setVideos 함수로 videos 업데이트 // console.log(result) result에 items이 포함되어 있고 아이템은 비디오들임
       .catch(error => console.log('error', error));
   }, []);
   return <div className="styles.app">
            <SearchHeader onSearch={search}/>
            <section className={styles.content}>
            {selectedVideo && ( 
            <div className={styles.detail}> 
                 <VideoDetail video={selectedVideo} />
              </div>
            )}
              <div className={styles.list}>
                <VideoList videos={videos} onVideoClick={selectVideo} display={ selectedVideo? 'list' : 'grid'} />; 
              </div>
            </section>
          </div>
 }
 //Line 36 : VideoList에 videos객체를 videos에 담아 전달해주고 VideoList에서는 props.videos로 접근이 가능해짐
 export default App;
 

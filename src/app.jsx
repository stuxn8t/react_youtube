import React, { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]); // 빈 배열이 videos에 할당됨

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
   return <VideoList videos={videos} />; //VideoList에 videos객체를 videos에 담아 전달해주고 VideoList에서는 props.videos로 접근이 가능해짐
   
 }
 
 export default App;
 

/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/03/2024 12:18:24
*/
import React, { FC, useEffect, useState } from 'react';
import './PlayList.css';
import { Video } from '../../models/Video';
import { getAllVideo } from '../../api/api-video';
import PlayListItem from '../PlayListItem/PlayListItem';


interface PlayListProps {
  videoId?: string
}


const PlayList : FC<PlayListProps> = ({videoId}) =>{

  const [videoDatas, setVideoDatas] = useState<Video[]>([])

  const runLocalData = async () => {

    const datas: any = await getAllVideo()
    if (datas.isSuccess) {
      datas.results?.map((data: Video)=>{
        // console.log(data);
        // data.poster =  convertBlobToUrl(data.poster as Blob)
        // data.link =  convertBlobToUrl(data.link as Blob)
        return data
  
      })
  
      setVideoDatas(datas.results)
    }
  
  
  }


  useEffect(() => {
    window.scrollTo(0,0)
   
    runLocalData()
  },[])


  return (
      <div className="PlayList">
          {
            videoDatas.map((video: Video)=>(<PlayListItem video={video} currenteVideoId={videoId}/>))
          }
      </div>
  );
}

export default PlayList;
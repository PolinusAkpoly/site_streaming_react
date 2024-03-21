/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/03/2024 10:09:08
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './MediaReader.css';
import { useParams } from 'react-router-dom';
import { getVideo } from '../../api/api-video';
import { Video } from '../../models/Video';
import { OuitubePlayer } from 'ouitube-player';
import PlayList from '../../components/PlayList/PlayList';


interface MediaReaderProps {
 
}


const MediaReader : FC<MediaReaderProps> = () =>{


    // const [state, setState] = useState<any>(null)
    // const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState('');
    const [video, setVideo] = useState<Video>();
    const {videoId} = useParams()



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        if (videoId) {
          let id = parseInt(videoId)
          const data = await getVideo(id)
          console.log(data);
          if (data.isSuccess) {
            setVideo(data.result as Video)
          }

        }

        // setLoading(false)
      }
      runLocalData()
    },[videoId])

  return (
    <Fragment>
   
     
      <div className="container-fluid">
         {
          video ?
          <div className="p-2">
            <div className="row">
              <div className="col-md-9">
                <OuitubePlayer src={video.link as string}/>
                <h2 className="col-md-8 col-lg-12 bg-primary p-2 text-white" >{video.title}</h2>
                <p>{video.description}</p>
              </div>
              <div className="col-md-3">
              <PlayList
              videoId={videoId}
              />
              </div>
            </div>
          </div>

          :
          null
         }
      </div>
    
    </Fragment>
  );
}

export default MediaReader;
/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/03/2024 13:54:32
*/
import React, { FC, useEffect } from 'react';
import './PlayListItem.css';
import { Video } from '../../models/Video';
import { OuitubePlayer } from 'ouitube-player';
import { Link } from 'react-router-dom';


interface PlayListItemProps {
  video: Video
  currenteVideoId?: String
}


const PlayListItem : FC<PlayListItemProps> = ({video, currenteVideoId}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    },[video])

  return (
      <div className="PlayListItem">
        <Link to={'/reader/'+ video._id} className={currenteVideoId == video._id ? "row border current": "row border"}>
         {/* <div > */}
          <div className="col-md-4">
          <img src={video.poster as string} alt={video.title} width={"100%"}/>
          </div>
          <div className="col-md-8"><strong>{video.title}</strong></div>
         {/* </div> */}
         </Link>
      </div>
  );
}

export default PlayListItem;
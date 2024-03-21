/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 21/03/2024 9:54:33
*/
import React, { FC, useEffect } from 'react';
import './VideoCard.css';
import { Video } from '../../models/Video';
import { Link } from 'react-router-dom';


interface VideoCardProps {
  video: Video
}


const VideoCard: FC<VideoCardProps> = ({ video }) => {



  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })

  return (
    
      <div key={video._id} className="col-lg-4 col-md-6 py-2 video-card">
        <Link to={'/reader/'+ video._id}>
          <div className="card">
            <img src={video.poster as string} height={250} className="card-img-top" alt={video.title} />
            <div className="card-body">
              <h5>{video.title}</h5>
              <p className="card-text">{video.created_at?.toDateString()}</p>
            </div>
          </div>
        </Link>
      </div>
    
  );
}

export default VideoCard;



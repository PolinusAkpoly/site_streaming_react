/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 18/03/2024 19:20:19
*/
import React, { FC, useEffect, useState } from 'react';
import './ViewVideoModal.css';
import { Modal } from 'react-bootstrap';
import { getVideo } from '../../api/api-video';
import { Video } from '../../models/Video';
import { OuitubePlayer } from 'ouitube-player';


interface ViewVideoModalProps {
  hideModal: ()=>void
  videId: number
}


const ViewVideoModal : FC<ViewVideoModalProps> = ({hideModal, videId}) =>{
  const [detailVideo, setdetailVideo] = useState<Video>()
// console.log(videId);
console.log(detailVideo);


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        const videoData = await getVideo(videId)
        console.log(videoData);
        if (videoData.isSuccess) {
          setdetailVideo(videoData.result as Video)
        }




      }
      runLocalData()
    },[])

  return (
      <div className="ViewVideoModal">
         <Modal show={true} onHide={hideModal} size='lg' scrollable>
        <Modal.Header closeButton>
          <Modal.Title> <h2>{detailVideo?.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
          {
            detailVideo ?
                  <table className="table table-bordered">
                  <tbody>
                  <tr>
                    <th>Title</th>
                    <td>{detailVideo.title}</td>
                  </tr>
                  <tr>
                    <th>Description</th>
                    <td>{detailVideo.description}</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>{detailVideo.category}</td>
                  </tr>
                  <tr>
                    <th>Poster</th>
                    <td>
                      <img src={detailVideo.poster as string} width={"100%"} alt={detailVideo.title} className="img-fluid" />
                    </td>
                  </tr>
                  <tr>
                    <th>Video</th>
                    <td>
                      <div className="video">
                      <OuitubePlayer src={detailVideo.link as string} />
                      {/* <video controls src={detailVideo.link as string} width={'100%'}></video> */}
                      </div>
                    </td>
                  </tr>

                  </tbody>
        </table>
            :
            null
          }
       

        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default ViewVideoModal;
/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/03/2024 15:33:12
*/
import React, { FC, useEffect, useState } from 'react';
import './DeleteVideoModal.css';
import { Modal } from 'react-bootstrap';
import { deleteVideo, getVideo } from '../../api/api-video';
import { Video } from '../../models/Video';


interface DeleteVideoModalProps {
  hideModal: ()=>void
  idVideoDelete: number
  actualiseContainer: any
}


const DeleteVideoModal : FC<DeleteVideoModalProps> = ({hideModal, idVideoDelete, actualiseContainer}) =>{
  const [detailVideo, setdetailVideo] = useState<Video>()



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {
        const videoData = await getVideo(idVideoDelete)
        console.log(videoData);
        if (videoData.isSuccess) {
          setdetailVideo(videoData.result as Video)
        }

      }
      runLocalData()
    },[detailVideo, idVideoDelete, actualiseContainer])

    const handleCancel = () =>{
      hideModal();
    }
    
    const handleDelete = async () =>{
      
      await deleteVideo(idVideoDelete)
      hideModal();
      actualiseContainer()
     
    }
  return (
      <div className="DeleteVideoModal">
         <Modal show={true} onHide={hideModal} size='lg' scrollable>
        <Modal.Header closeButton>
          <Modal.Title> <h2>Confirm Delete</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Are you sure you want to delete this video : <strong> {detailVideo?.title} </strong>?</p>
         
        <button className="btn btn-primary m-1" onClick = {()=>{handleCancel()}}>Cancel</button>
        <button className="btn btn-danger m-1"  onClick = {()=>{handleDelete()}}>Confirm Delete</button>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default DeleteVideoModal;
/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 18/03/2024 19:20:19
*/
import React, { FC, useEffect } from 'react';
import './ViewVideoModal.css';
import { Modal } from 'react-bootstrap';


interface ViewVideoModalProps {
  hideModal: ()=>void
  videId: number
}


const ViewVideoModal : FC<ViewVideoModalProps> = ({hideModal, videId}) =>{

console.log(videId);


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="ViewVideoModal">
         <Modal show={true} onHide={hideModal} size='lg' scrollable>
        <Modal.Header closeButton>
          <Modal.Title> <h2>{video?.title}</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          

        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default ViewVideoModal;
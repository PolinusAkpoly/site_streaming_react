/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 15:31:30
*/
import React, { FC, useEffect } from 'react';
import './UploadModal.css';
import { Modal } from 'react-bootstrap';
import FileDrop from '../FileDrop/FileDrop';


interface UploadModalProps {
  hideModal: ()=>void
  actualiseContainer: any
}


const UploadModal : FC<UploadModalProps> = ({hideModal, actualiseContainer}) =>{



    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="UploadModal">
           <Modal show={true} onHide={hideModal} size='lg' scrollable centered>
        <Modal.Header closeButton>
          <Modal.Title> <h2 className='text-danger'>Upload  Video</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FileDrop/>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default UploadModal;
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
import { generateFileUrl } from '../../helpers/utils';
import { Video } from '../../models/Video';

import { addVideo } from '../../api/api-video';


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

const handleFileDrop = (files: File[])=>{
// console.log(files);
files.forEach( async (file: File) => {
const fileNameParts = file.name.split('.')
// const extension = fileNameParts.pop()
const title = fileNameParts.join(" ")
const videoLink = await generateFileUrl(file)
const image = window.origin + '/assets/images/Apprendre_HTML5.webp'

const video: Video={
  title: title,
  description: title,
  link: videoLink as any,
  poster: image,
  category: 'Divers',
  isAvailable: false,
  created_at: new Date()
}
console.log(video);
await addVideo(video)
actualiseContainer()
hideModal()
});


}

  return (
      <div className="UploadModal">
           <Modal show={true} onHide={hideModal} size='lg' scrollable centered>
        <Modal.Header closeButton>
          <Modal.Title> <h2 className='text-danger'>Upload  Video</h2></Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <FileDrop 
          onFileDrop={handleFileDrop}
          />
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
      </div>
  );
}

export default UploadModal;
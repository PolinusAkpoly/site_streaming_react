/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 13:46:18
*/
import React, { FC, useEffect, useState } from 'react';
import './VideoFormModal.css';
import { Button, Modal } from 'react-bootstrap';
import { Video } from '../../models/Video';


interface VideoFormModalProps {
  hideModale: () => void
}


const VideoFormModal: FC<VideoFormModalProps> = ({ hideModale }) => {

  const [formData, setFormData] = useState<Video>({
    title: "",
    description: "",
    poster: null,
    link: null,
    isAvailable: false,
    category: ""
  })

  useEffect(() => {
    window.scrollTo(0, 0)
    const runLocalData = async () => {

    }
    runLocalData()
  })


  const handleInputChange = (event: any) => {
    const { name, value, type, files, checked } = event.target
    console.log({ name, value, type, files, checked });

    const newValue: any = { ...formData }
    if (type === "checkbox") {
      newValue[name] = checked
    } else if (type === "file") {
      newValue[name] = files[0]
    } else {
      newValue[name] = value
    }
    console.log(newValue);

    setFormData(newValue)

  }




  return (
    <div className="VideoFormModal">
      <Modal show={true} onHide={hideModale} size='lg'>
        <Modal.Header closeButton>
          <Modal.Title>Video Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form action="">
            <div className='form-group'>
              <label htmlFor="title">Title : </label>
              <input type="text"
                id='title'
                name='title'
                className='form-control'
                defaultValue={formData.title}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="description">Description : </label>
              <textarea
                name='description'
                id='description'
                className='form-control'
                defaultValue={formData.description}
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="poster">Image (poster) : </label>
              <input
                type='file'
                name='poster'
                id='poster'
                className='form-control'
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="video">Video : </label>
              <input
                type='file'
                name='link'
                id='video'
                className='form-control'
                onChange={handleInputChange}
              />
            </div>
            <div className='form-group'>
              <label htmlFor="category">Category : </label>
              <select onChange={handleInputChange} defaultValue={formData.category} name="category" id="category" className='form-control' >
                <option value="Politique">Politique</option>
                <option value="Education">Education</option>
                <option value="Culture">Culture</option>
                <option value="Foramtion">Foramtion</option>
              </select>
            </div>
            <div className="form-check form-switch">
              <label htmlFor="isAvailable">Is Available :</label>
              <input
                name="isAvailable"
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="isAvailable"
                checked={formData.isAvailable}
                onChange={handleInputChange}
              />
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={hideModale}>
            Cancel
          </Button>
          <Button variant="success" >
            Save Video
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoFormModal;
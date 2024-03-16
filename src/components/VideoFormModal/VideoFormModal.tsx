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
import { generateFileUrl } from '../../helpers/utils';


interface VideoFormModalProps {
  hideModal: () => void
}


const VideoFormModal: FC<VideoFormModalProps> = ({ hideModal }) => {

  const [formData, setFormData] = useState<Video>({
    title: "",
    description: "",
    poster: null,
    link: null,
    isAvailable: false,
    category: ""
  });
  // console.log(formData);
  
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // Código relacionado con la carga de datos locales
    };
    runLocalData();
  }, []);
  
  
  
  const handleInputChange = (event: any) => {
    const { name, value, type, files, checked } = event.target
    // console.log({ name, value, type, files, checked });

    const newValue: any = { ...formData }
    if (type === "checkbox") {
      newValue[name] = checked
      formErrors[name] = '';
    } else if (type === "file") {
      const file = files[0]
      const fileUrl = generateFileUrl(file)
      console.log(fileUrl);
       if (name === "poster") {
        newValue[name] = fileUrl
       }
       if (name === "link") {
        newValue[name] = fileUrl
       }
      formErrors[name] = '';
    } else {
      newValue[name] = value
      formErrors[name] = '';
    }
    console.log(newValue);

    setFormData(newValue)

  }
  const validate = (): boolean => {
    const error: Record<string, string> = {};
    if (!formData.title.trim()) {
      error.title = 'Title is required';
    }
    if (!formData.description.trim()) {
      error.description = 'Description is required';
    }
    if (!formData.category.trim()) {
      error.category = 'Please select one Category';
    }
    if (!formData.poster) {
      error.poster = 'Poster is required';
    }
    if (!formData.link) {
      error.link = 'Video is required';
    }
  // console.log(error);
  
    setFormErrors(error);
  
    return Object.keys(error).length === 0;
  };
  
  const handleSubmit = (event: any) => {
    event.preventDefault();
    if (!validate()) {
      return;
    }
  };
  
  return (
    <div className="VideoFormModal">
      <Modal show={true} onHide={hideModal} size='lg' scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Video Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} >
            <div className='form-group'>
              <label htmlFor="title">Title : </label>
              <input
                type="text"
                id='title'
                name='title'
                className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                value={formData.title}
                onChange={handleInputChange}
              />
              {formErrors.title && <div className="invalid-feedback">{formErrors.title}</div>}
            </div>
            <div className='form-group'>
              <label htmlFor="description">Description : </label>
              <textarea
                name='description'
                id='description'
                className={`form-control ${formErrors.description ? 'is-invalid' : ''}`}
                defaultValue={formData.description}
                onChange={handleInputChange}
              />
              {
                formErrors.description ? <div className="invalid-feedback">{formErrors.description}</div> : null
              }
            </div>
            <div className='form-group'>
              <label htmlFor="poster">Image (poster) : </label>
              <input
                type='file'
                name='poster'
                id='poster'
                className={`form-control ${formErrors.poster ? 'is-invalid' : ''}`}
                onChange={handleInputChange}
              />
              {
                formErrors.poster ? <div className="invalid-feedback">{formErrors.poster}</div> : null
              }
              <div className='previewsimage m-2'>
                <img src={`${formData.poster}`} alt="" width={'100%'}/>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="video">Video : </label>
              <input
                type='file'
                name='link'
                id='video'
                className={`form-control ${formErrors.link ? 'is-invalid' : ''}`}
                onChange={handleInputChange}
              />
               {
                formErrors.link ? <div className="invalid-feedback">{formErrors.link}</div> : null
              }
              <div className='previewsimage m-2'>
                <video controls src={`${formData.link}`} width={'100%'}/>
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="category">Category : </label>
              <select onChange={handleInputChange} defaultValue={formData.category} name="category" id="category" className={`form-control ${formErrors.category ? 'is-invalid' : ''}`} >
                <option value="Politique">Politique</option>
                <option value="Education">Education</option>
                <option value="Culture">Culture</option>
                <option value="Foramtion">Foramtion</option>
              </select>
              {
                formErrors.category ? <div className="invalid-feedback">{formErrors.category}</div> : null
              }
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
          <Button variant="primary" onClick={hideModal}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleSubmit} >
            Save Video
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default VideoFormModal;
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
import { convertFileToBlob, generateFileUrl } from '../../helpers/utils';
import { addVideo, getVideo, updateVideo } from '../../api/api-video';


interface VideoFormModalProps {
  hideModal: () => void
  videoId?: number
  actualiseContainer: any
}


const VideoFormModal: FC<VideoFormModalProps> = ({ hideModal, videoId, actualiseContainer }) => {

  const [formData, setFormData] = useState<Video>({
    title: "",
    description: "",
    poster: '',
    link: '',
    isAvailable: false,
    category: ""
  });
  // const [videoUpdating, setVideoUpdating] = useState<Video>()
  // const [formData, setFormData] = useState<Video>(videoUpdating as Video);

  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  const [formSubmitError, setFormSubmitError] = useState<string>("")
  // console.log(formData);

  // console.log(videoUpdating);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      if (videoId) {
        const videoData = await getVideo(videoId)
        console.log(videoData);
        if (videoData.isSuccess) {
          // setVideoUpdating(videoData.result as Video)
          setFormData(videoData.result as Video)

        }

      }


    };
    runLocalData();
  }, [videoId]);



  const handleInputChange = async (event: any) => {
    const { name, value, type, files, checked } = event.target
    // console.log({ name, value, type, files, checked });

    const newValue: any = { ...formData }
    if (type === "checkbox") {
      newValue[name] = checked
      formErrors[name] = '';
    } else if (type === "file") {
      const file = files[0]
      const fileUrl = await generateFileUrl(file)
      // console.log(fileUrl);
      if (name === "poster") {
        if (!file.type.startsWith('image/')) {
          return;
        }
        // newValue[name] = fileUrl
      }
      if (name === "link") {
        if (!file.type.startsWith('video/')) {
          return;
        }
        // newValue[name] = fileUrl
      }
      newValue[name] = fileUrl
      formErrors[name] = '';
    } else {
      newValue[name] = value
      formErrors[name] = '';
    }
    // console.log(newValue);

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

  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   if (!validate()) {
  //     return;
  //   }

  //   try {
  //     if (videoId) {
  //       const video: Video = formData
  //       video.created_at = new Date()
  //       const result = await updateVideo(video)

  //       if (result.isSuccess) {
  //         setFormData({
  //           title: '',
  //           description: '',
  //           poster: '',
  //           link: '',
  //           category: '',
  //           isAvailable: true
  //         })

  //         hideModal()


  //       } else {
  //         const video: Video = formData
  //         video.created_at = new Date()
  //         //  video.poster =  await convertFileToBlob(video.poster as File)
  //         //  video.link =  await convertFileToBlob(video.link as File)
  //         console.log(video);

  //         const result = await addVideo(video)

  //         if (result.isSuccess) {
  //           setFormData({
  //             title: '',
  //             description: '',
  //             poster: '',
  //             link: '',
  //             category: '',
  //             isAvailable: true
  //           })

  //           hideModal()


  //         }
  //       }
  //     }
  //       } catch (error) {
  //         setFormSubmitError('Error, please try again later !')
  //       }






  //     };
  // const handleSubmit = async (event: any) => {
  //   event.preventDefault();
  //   if (!validate()) {
  //     return;
  //   }

  //   try {
  //     const video: Video = formData;
  //     let result

  //     if (videoId) {

  //       video.updated_at = new Date()
  //       video.poster = await convertFileToBlob(video.poster as File)
  //       video.link = await convertFileToBlob(video.link as File)
  //       result = await updateVideo(video);



  //     } else {

        
  //       video.poster = await convertFileToBlob(video.poster as File)
  //       video.link = await convertFileToBlob(video.link as File)
  //       video.created_at = new Date()
  //       result = await addVideo(video);

  //     }

  //     if (result.isSuccess) {
  //       setFormData({
  //         title: '',
  //         description: '',
  //         poster: '',
  //         link: '',
  //         category: '',
  //         isAvailable: true
  //       });


  //       hideModal();
  //       actualiseContainer()
  //     }

  //   } catch (error) {
  //     setFormSubmitError('Error, please try again later!');
  //   }
  // };
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    if (!validate()) {
      return
    }

    try {
      
      const video: Video = formData

      let result
      if (videoId) {
       
        // if(video.poster instanceof File){
        //   video.poster = await convertFileToBlob(video.poster as File)
        // }
        // if(video.link instanceof File){
        //   video.link = await convertFileToBlob(video.link as File)
        // }
        
        video.updated_at = new Date()

        result = await updateVideo(video)


      } else {
       
        // video.poster = await convertFileToBlob(video.poster as File)
        // video.link = await convertFileToBlob(video.link as File)
        video.created_at = new Date()
        console.log(video);
        
        result = await addVideo(video)
      }


      if (result?.isSuccess) {
        setFormData({
          title: '',
          description: '',
          poster: null,
          link: null,
          category: '',
          isAvailable: true
        })
        // actualiseContainer()
        hideModal()
        actualiseContainer()
      }


    } catch (error) {
      setFormSubmitError('Error, please try again later !')

    }
 
  }

  return (
    <div className="VideoFormModal">
      <Modal show={true} onHide={hideModal} size='lg' scrollable>
        <Modal.Header closeButton>
          <Modal.Title>Video Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit} >
            {
              formSubmitError ? <div className="text-danger">{formSubmitError}</div> : null
            }
            <div className='form-group'>
              <label htmlFor="title">Title : </label>
              <input
                type="text"
                id='title'
                name='title'
                className={`form-control ${formErrors.title ? 'is-invalid' : ''}`}
                defaultValue={formData.title}
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
                defaultValue={formData.poster as string}
              />
              {
                formErrors.poster ? <div className="invalid-feedback">{formErrors.poster}</div> : null
              }
              <div className='previewsimage m-2'>
                <img src={`${formData.poster}`} alt="" width={'100%'} />
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
                defaultValue={formData.link as string}
              />
              {
                formErrors.link ? <div className="invalid-feedback">{formErrors.link}</div> : null
              }
              <div className='previewsimage m-2'>
                <video controls src={`${formData.link}`} width={'100%'} />
              </div>
            </div>
            <div className='form-group'>
              <label htmlFor="category">Category : </label>
              <select onChange={handleInputChange} defaultValue={formData.category} name="category" id="category" className={`form-control ${formErrors.category ? 'is-invalid' : ''}`} >
                <option value="Politique">Politique</option>
                <option value="Education">Education</option>
                <option value="Culture">Culture</option>
                <option value="Foramtion">Foramtion</option>
                <option value="Cinema">Cinema</option>
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
                defaultChecked={formData.isAvailable}
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
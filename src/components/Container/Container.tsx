/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 10:07:15
*/
import React, { FC, useEffect, useState } from 'react';
import './Container.css';
import VideoFormModal from '../VideoFormModal/VideoFormModal';
import { convertBlobToUrl} from '../../helpers/utils';
import { Video } from '../../models/Video';

import { deleteVideo, getAllVideo } from '../../api/api-video';
import ViewVideoModal from '../ViewVideoModal/ViewVideoModal';
import DeleteVideoModal from '../DeleteVideoModal/DeleteVideoModal';


interface ContainerProps {
 
}


const Container : FC<ContainerProps> = () =>{

const [displayModal, setDisplayModal] = useState<boolean>(false)
const [displayViewModal, setDisplayViewModal] = useState<boolean | number>(false)
const [videoDatas, setVideoDatas] = useState<Video[]>([])
const [idVideoUpdate, setIdVideoUpdate] = useState<number | null>()
const [idVideoDelete, setIdVideoDelete] = useState<number>()
const [displayDeleteVideoModal, setDisplayDeleteVideoModal] = useState<boolean>(false)
// console.log(videoDatas);

const runLocalData = async () => {

  const datas: any = await getAllVideo()
  if (datas.isSuccess) {
    datas.results?.map((data: Video)=>{
      // console.log(data);
      // data.poster =  convertBlobToUrl(data.poster as Blob)
      // data.link =  convertBlobToUrl(data.link as Blob)
      
      
      return data

    })

    setVideoDatas(datas.results)
  }


}

    useEffect(() => {
      window.scrollTo(0,0)
     
      runLocalData()
    },[])

  const handleAddVideo = () =>{
    setDisplayModal(true)
    setIdVideoUpdate(null)
  }

const handleView = (id: number) =>{
setDisplayViewModal(id)
console.log(id);
}

const handleEdite = (id: number) =>{
  setIdVideoUpdate(id)
  setDisplayModal(true)

}

const handleConfirmDelete = async (id: number) =>{
  setIdVideoDelete(id);
  setDisplayDeleteVideoModal(true)
  // await deleteVideo(id)
  // videoDatas.filter((videoData)=>videoData._id !=id )

}

  return (
      <div className="container">
         <button className="btn btn-primary my-2" onClick={handleAddVideo}>
          Add Video
         </button>

         {
          displayModal?
          < VideoFormModal
          hideModal= {()=>setDisplayModal(false)}
          videoId= {idVideoUpdate as number}
          actualiseContainer={runLocalData()}
          />
          :
          null
         }
         {
          displayViewModal?
          < ViewVideoModal
          hideModal= {()=>setDisplayViewModal(false)}
          videId ={displayViewModal as number}
          />
          :
          null
         }
         {
          displayDeleteVideoModal && idVideoDelete?
          < DeleteVideoModal
          hideModal= {()=>setDisplayDeleteVideoModal(false)}
          idVideoDelete ={idVideoDelete}
          actualiseContainer={runLocalData()}
          />
          :
          null
         }
         <div className="video-list">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Title</th>
                <th scope="col">Poster</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
                {
                  videoDatas.map((videoData: Video)=>{
                    return <tr  key={videoData._id}>
                              <th scope="row">{videoData._id}</th>
                              <td>{videoData.title}</td>
                              <td> <img src={videoData.poster as string} width={80} alt={videoData.title} /></td>
                              <td>
                                <button className="btn btn-success m-1" onClick = {()=>{handleView(videoData._id!)}}>View</button>
                                <button className="btn btn-primary m-1" onClick = {()=>{handleEdite(videoData._id!)}}>Edit</button>
                                <button className="btn btn-danger m-1"  onClick = {()=>{handleConfirmDelete(videoData._id!)}}>Delete</button>
                              </td>
                          </tr>
                  })

                  
                }


              
              
              
            </tbody>
          </table>

         </div>
      </div>
  );
}

export default Container;
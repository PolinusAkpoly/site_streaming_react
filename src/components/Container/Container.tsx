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

import { getAllVideo } from '../../api/api-video';
import ViewVideoModal from '../ViewVideoModal/ViewVideoModal';


interface ContainerProps {
 
}


const Container : FC<ContainerProps> = () =>{

const [displayModal, setDisplayModal] = useState<boolean>(false)
const [displayViewModal, setDisplayViewModal] = useState<boolean | number>(false)
const [videoDatas, setVideoDatas] = useState<Video[]>([])
console.log(videoDatas);

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        const datas: any = await getAllVideo()
        if (datas.isSuccess) {
          datas.results?.map((data: Video)=>{
            // data.poster =  convertBlobToUrl(data.poster as Blob)
            // data.link =  convertBlobToUrl(data.link as Blob)
            return data

          })

          setVideoDatas(datas.results)
        }


      }
      runLocalData()
    },[])

const handleView = (id: number) =>{
setDisplayViewModal(id)
console.log(id);


}




  return (
      <div className="container">
         <button className="btn btn-primary my-2" onClick={()=>setDisplayModal(true)}>
          Add Video
         </button>

         {
          displayModal?
          < VideoFormModal
          hideModal= {()=>setDisplayModal(false)}
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
                                <button className="btn btn-primary m-1">Edit</button>
                                <button className="btn btn-danger m-1">Delete</button>
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
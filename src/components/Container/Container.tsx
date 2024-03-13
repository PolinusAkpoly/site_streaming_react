/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 13/03/2024 10:07:15
*/
import React, { FC, useEffect, useState } from 'react';
import './Container.css';
import VideoFormModal from '../VideoFormModal/VideoFormModal';


interface ContainerProps {
 
}


const Container : FC<ContainerProps> = () =>{

const [displayModal, setDisplayModal] = useState<boolean>(true)

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

  return (
      <div className="container">
         <button className="btn btn-primary my-2" onClick={()=>setDisplayModal(true)}>
          Add Video
         </button>

         {
          displayModal?
          < VideoFormModal
          hideModale= {()=>setDisplayModal(false)}
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
              <tr>
                <th scope="row">1</th>
                <td>Formation React Js</td>
                <td> <img src="assets/images/Apprendre_CSS.webp" width={80} alt="Formation React Js" /></td>
                <td>
                  <button className="btn btn-success m-1">View</button>
                  <button className="btn btn-primary m-1">Edit</button>
                  <button className="btn btn-danger m-1">Delete</button>
                </td>
              </tr>
              
              
            </tbody>
          </table>

         </div>
      </div>
  );
}

export default Container;
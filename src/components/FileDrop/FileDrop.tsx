/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 22/03/2024 16:19:02
*/
import React, { FC, useEffect, useState } from 'react';
import './FileDrop.css';


interface FileDropProps {
 
}


const FileDrop : FC<FileDropProps> = () =>{
const [dragging, setDragging]=useState<boolean>(false)


    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

      }
      runLocalData()
    })

const handleDragEnter = (event: any) =>{
event.preventDefault()
setDragging(true)

}

const handleDragLeave = () =>{



}
const handleDragOver = () =>{



}
const handleDrop = (event: any) =>{
  event.preventDefault()
  setDragging(false)
  const files = event.dataTransfer.files
  console.log(files);
  

}

  return (
      <div className="FileDrop">
          <div className="upload-zone"
          onDragEnter={handleDragEnter}
          onDragLeave={handleDragLeave}
          onDragOver={handleDragOver}
          onDrag={handleDrop}
          >
            <p>Glissez dépossez vos fichiers videos !</p>
          </div>
      </div>
  );
}

export default FileDrop;
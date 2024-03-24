/*
  Author: Mudey Formation
  Website: https://mudey.fr/
  App Name: E-commerce with React.Js
  Created At: 22/03/2024 16:19:02
*/
import React, { FC, useEffect, useState } from 'react';
import './FileDrop.css';

interface FileDropProps {
  onFileDrop: (files: File[])=>void
}

const FileDrop: FC<FileDropProps> = ({onFileDrop}) => {
  const [dragging, setDragging] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const runLocalData = async () => {
      // Code asynchrone ici si nécessaire
    };
    runLocalData();
  }, []); // Ajout des crochets vides pour exécuter useEffect une seule fois

  const handleDragEnter = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(true);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragging(false);
    const files = Array.from(event.dataTransfer.files) ;
    // console.log(files);
    onFileDrop(files)
  };

  return (
    <div className="FileDrop">
      <div
        className={`upload-zone ${dragging ? 'dragging' : ''}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop} // Changement de l'événement à onDrop
      >
        <p>Glissez et déposez vos fichiers vidéos !</p>
      </div>
    </div>
  );
};

export default FileDrop;

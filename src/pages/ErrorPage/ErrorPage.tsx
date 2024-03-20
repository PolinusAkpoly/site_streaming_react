/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/03/2024 19:11:06
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './ErrorPage.css';


interface ErrorPageProps {
 
}


const ErrorPage : FC<ErrorPageProps> = () =>{


    

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

        
      }
      runLocalData()
    },[])

  return (
    <Fragment>
    
      <div className="ErrorPage">
          <h2>404</h2>
          <p>Page not found</p>
      </div>
   
    </Fragment>
  );
}

export default ErrorPage;
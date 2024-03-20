/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/03/2024 17:25:34
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';


interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)
    // const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState('');

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

       
      }
      runLocalData()
    },[])

  return (
    <Fragment>
    
      <div className="Home">
          Home Component
      </div>
    
    </Fragment>
  );
}

export default Home;
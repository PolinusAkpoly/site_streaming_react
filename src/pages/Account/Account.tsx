/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/03/2024 17:25:33
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Account.css';
import Container from '../../components/Container/Container';


interface AccountProps {
 
}


const Account : FC<AccountProps> = () =>{


    // const [state, setState] = useState<any>(null)
    

    useEffect(() => {
      window.scrollTo(0,0)
      const runLocalData = async () => {

    
      }
      runLocalData()
    },[])

  return (
    <Fragment>
  
  <Container/>
   
    </Fragment>
  );
}

export default Account;
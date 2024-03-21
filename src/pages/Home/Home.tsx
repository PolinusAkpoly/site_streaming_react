/*
  Author : Mudey Formation
  Website : https://mudey.fr/
  App Name : E-commerce with React.Js
  Created At : 20/03/2024 17:25:34
*/
import React, { FC, useEffect,Fragment, useState } from 'react';
// import Loading from '../Loading/Loading';
import './Home.css';
import { Video } from '../../models/Video';
import { getAllVideo } from '../../api/api-video';
import VideoCard from '../../components/VideoCard/VideoCard';



interface HomeProps {
 
}


const Home : FC<HomeProps> = () =>{


    // const [state, setState] = useState<any>(null)
    // const [loading, setLoading] = useState(true);
    // const [value, setValue] = useState('');
    const [videoDatas, setVideoDatas] = useState<Video[]>([])




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

  return (
    <Fragment>
    
      <div className="container py-2">
          <div className="row">
            {
               videoDatas.map((video: Video)=>(
                
                  <VideoCard
                  video={video}
                  />
                
                  ))
                
            }
            
          </div> 
      </div>
    
    </Fragment>
  );
}

export default Home;
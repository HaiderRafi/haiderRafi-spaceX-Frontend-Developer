import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ONE_CAPSULE_DATA } from '../utils/constant';
import Shimmer from './Shimmer';

const CardInfo = () => {
    let params= useParams();
    let paramsID=params.id;

    let[apiData,setApiData]=useState([]);

    async function apiFunc(){
        let temp = await fetch(ONE_CAPSULE_DATA+paramsID);
        let data= await temp.json();
        // console.log(data);
        setApiData(data)
    }

    useEffect(()=>{
        apiFunc();
    },[])

    if(apiData.length===0){
        return <Shimmer/>
    }
    
  return (
    <>
     <div className=" flex flex-col w-full h-full">
      <div className="flex justify-evenly pt-5">
        <button
          onClick={() => window.history.back()}
          className=" p-2 m-4 font-bold border border-orange-500 hover:shadow-lg hover:border-orange-600"
        >
          BACK
        </button>
       
      </div>
      <div className="flex flex-col justify-center items-center pb-6">
        <div className=" flex flex-col border border-dotted shadow-lg  w-[50%] h-[100%]">
          <h1 className="font-semibold text-3xl p-2 m-2 ">Capsule: {paramsID}</h1>
         
          <hr></hr>

          {/* <h1 className="font-semibold text-3xl p-2 m-2">Capsule Details</h1> */}
          <img className='w-full h-[500px]' src='https://www.nasa.gov/images/content/703187main_icap_SpaceX_Falcon.jpg' />
          <div className="flex justify-around pt-2 pb-2 m-1">
            <div>
              <h1 className="font-semibold">Capsule ID</h1>
              <h1 className="font-semibold">Status</h1>
              <h1 className="font-semibold">Original Launch</h1>
              
              <h1 className="font-semibold">Original Launch Unix</h1>
              <h1 className="font-semibold">Landing</h1>
              <h1 className="font-semibold">Details</h1>
              <hr></hr>
              <h1 className="font-bold">Mission Name</h1>
              <h1 className="font-bold">Mission Flight</h1>
              
              
            </div>
            <div>
              <h1 className="font-semibold">{apiData?.capsule_id}</h1>
              <h1 className="font-semibold">{apiData?.status}</h1>
              <h1 className="font-semibold">{apiData?.original_launch}</h1>
              <h1 className="font-semibold">{apiData?.original_launch_unix}</h1>
              <h1 className="font-semibold">{apiData?.landings}</h1>
              <h1 className="font-semibold">{apiData?.details}</h1>
              <hr></hr>
              <h1 className="font-bold">{apiData?.missions[0]?.name}</h1>
              <h1 className="font-bold">{apiData?.missions[0]?.flight}</h1>
              
            </div>
          </div>
        </div>
        
       
      </div>
    </div>
    </>
  )
}

export default CardInfo
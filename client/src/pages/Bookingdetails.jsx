import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom";
import { BASE_URL } from "../helper";

export default function Bookingdetails(){
    const [userbookings,setuserbookings]=useState([]);
    useEffect(()=>{
        async function getuserbookings(){
            let resp=await fetch(`${BASE_URL}/userbookings`,{
                method:'GET',
                credentials:'include',

            })
            resp=await resp.json();
            setuserbookings(resp);
           console.log(userbookings);

        }
       getuserbookings();
    },[])   
    
    if(userbookings.length==0){
        return <h1>Loading...</h1>
    }
    return (
        <div>
   

<div className="w-full">
{userbookings && userbookings.length>0 && 

    <div className="m-1 p-1 w-full">

{userbookings.slice().reverse().map((data) => (
  <Link className="flex justify-center transition-transform duration-300 hover:scale-105" to={`/place/${data?.placeid}`} key={data._id}> {/* Wrap the Link properly */}
    <div className="bg-gray-200 m-2 flex rounded-md p-2" key={data._id}>
      <div className="w-1/6 sm:w-1/6">
        <img className="rounded-lg" src={data.photos[0]} alt="img" />
      </div>
      <div className="w-2/4 sm:w-2/3 pl-2 flex flex-col gap-1">
        <h1 className="font-bold">{data.title}</h1>
        <p>Booked by <span className="font-bold">{data?.name} </span></p>
        <p>Booked for {data?.guests_no} guests</p>
        <p>CheckOut: {data?.checkout}</p>
        <p>CheckIn: {data?.checkin}</p>
        
        <p className="font-bold">Rs. {data?.price}</p>
        
      </div>
    </div>
  </Link>
))}

    

    </div>

}
</div>
    </div>
    
    );
}





// {!add && userPlaces.length > 0 && (
//   <div className="w-full m-1 p-1">
//     {userPlaces.slice().reverse().map((data) => (
//       <div key={data._id} className="bg-pink-200 m-1 rounded-md p-2 flex">
//         <div className="w-1/6 sm:w-1/6">
//           <img src={data.photos[0]} alt="img" />
//         </div>
//         <div className="w-2/4 sm:w-2/3 pl-2">
//           <h1 className="font-bold">{data.title}</h1>
//           <p>CheckIn: {data?.checkin}</p>
//           <p>CheckOut: {data?.checkout}</p>
//           <p className="font-bold">Rs. {data?.price}</p>
//           <div className="flex gap-2 mt-4">
            
//             <button onClick={()=>handleDelete({id:data._id})} className="bg-pink-600 rounded-lg p-2 text-white">Delete</button>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// )}









// (
//   <Link to={`/place/${data?.placeid}`} key={data._id}>
// <div key={data._id} className="bg-pink-200 m-1 rounded-md p-2 flex  ">
// <div className="w-1/6 sm:w-1/6">
//   <img
//     src={data.photos[0]} 
//     alt="img"
//     className=""
//   />
// </div>
// <div className="w-2/4 sm:w-2/3 pl-2">
//   <h1 className="font-bold">{data.name}</h1>
//   <p>CheckIn : {data?.checkin}</p>
//   <p>CheckOut : {data?.checkout}</p>
//   <p className="font-bold">Rs. {data?.price}</p>
//   <div className=" flex gap-2 mt-4">
//   </div>
// </div>
// </div>
// </Link>
// )
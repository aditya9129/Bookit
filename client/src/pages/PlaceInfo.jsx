import { useParams } from "react-router-dom"
import { useState,useEffect } from "react";
import BookingForm from "./BookingForm";
import { BASE_URL } from "../helper";

export default function PlaceInfo(){
    let { id } = useParams();
    const [data, setdata] = useState('');
    useEffect(() => {
      async function getPlace() {
        let place = await fetch(`${BASE_URL}/place/${id}`, {
          method: 'GET',
          credentials: 'include',
        });
        place = await place.json();
        setdata(place);
      }
  
      getPlace();
      
    }, []);
    if(!data){
        return <h1>Loading...</h1>
    }
    return (<div className="container mx-auto p-4 border rounded-lg shadow-lg">
      <h1 className="font-bold text-3xl ml-3 mb-4 ">{data?.title}</h1>
      <div className="flex flex-wrap ">
          {data && data?.photos.map((photo) => (
              <img
                  src={photo}
                  alt="img"
                  className="w-80 m-2 rounded-lg transition-transform duration-300 hover:scale-105"
                  key={photo} // Remember to add a unique key for each image in a list
              />
          ))}
      </div>
      <div className="font-bold text-xl ml-3 mt-4">{data?.address}</div>
      <div className="bg-gray-100 rounded-lg p-4 mt-4">
          <div className="text-xl p-3">
              <p>{data?.desc}</p>
              {/* <p className="mt-6">CheckIn: {data?.checkin}</p>
              <p>CheckOut: {data?.checkout}</p> */}
              <p>Max guests: {data?.maxGuests}</p>
          </div>
          <div className="border p-4 mt-4 w-full lg:w-1/3 bg-white rounded-lg shadow-lg">
              <h2 className="font-bold text-xl mb-2">Rs. {data?.price}</h2>
              <div>
                  <BookingForm id={id} price={data?.price} photos={data?.photos} />
              </div>
          </div>
      </div>
  </div>
  
    )
}
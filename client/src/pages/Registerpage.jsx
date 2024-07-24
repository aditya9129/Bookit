import { useState } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../helper";
export default function Registerpage(){
    const [name,setname]=useState('');
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    async function register(e) {
        e.preventDefault();
        
          const resp = await fetch(`${BASE_URL}/register`, {
                method: 'POST',
                body: JSON.stringify({ name, email, pass }),
                 headers: { 'Content-Type': 'application/json' }
            });
        if(!resp.ok){
            alert('registration fail ! user may already exist');
        }
        else{
            alert('Resigration done goto login');
        }
        
    }
    return (
        <div className="flex justify-center my-[10%]">
        <form className=" p-2 rounded-md" onSubmit={register}>
         <div className="flex justify-center"> <h2 className="text-3xl p-2 ">Register</h2></div> 
         <input type="text"  value={name} onChange={e=>setname(e.target.value)}
         placeholder="Name" className="w-full p-2 border border-gray-300 rounded-lg m-2"></input>
         <input type="email" value={email} onChange={e=>setemail(e.target.value)}
          placeholder="xyz@email.com" className="w-full p-2 border border-gray-300 rounded-lg m-2"></input>
         <input type="password" value={pass} onChange={e=>setpass(e.target.value)}
          placeholder="password" className="w-full p-2 border border-gray-300 rounded-lg m-2"></input>
         <button className="bg-pink-600 p-2 rounded-lg text-white w-full m-2">Register</button>
         <p className="w-full p-2">Already have an account? <Link to={'/login'} className="underline">Login</Link></p>
         </form> 
        
     </div>
    )
}
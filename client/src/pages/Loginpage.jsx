import { useState ,useContext} from "react";
import { Link, Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import { BASE_URL } from "../helper";

export default function Loginpage(){
    const [email,setemail]=useState('');
    const [pass,setpass]=useState('');
    const [redirect,setRedirect]=useState(false);
    const {setUser}=useContext(UserContext)
    async function handlelogin(e) {
        e.preventDefault();
    
        try {
            const resp = await fetch(`${BASE_URL}/login`, {
                method: 'POST',
                body: JSON.stringify({ email, pass }),
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include'
            });
    
            if (resp.status === 422) {
                alert('wrong credentials');
            } else {
                const userData = await resp.json(); // Assuming the server sends user data in response
                setUser(userData);
                setRedirect(true);
    
                // Log the cookies
                const cookies = document.cookie;
                console.log('Cookies:', cookies);
    
                // Extract and log the token if present
                const token = cookies.split('; ').find(row => row.startsWith('token='));
                if (token) {
                    console.log('Token:', token.split('=')[1]);
                } else {
                    console.log('Token not found in cookies');
                }
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }
    
  
    if(redirect){
        return <Navigate to={'/'}/>
    }
    return (
        
        <div className="flex justify-center my-[10%]">
           <form className=" p-2 rounded-md" onSubmit={handlelogin}>
            <div className="flex justify-center"> <h2 className="text-3xl p-2 ">Login</h2></div> 
            <input type="email" placeholder="xyz@email.com" value={email} onChange={e=>setemail(e.target.value)} className="w-full p-2 border border-gray-300 rounded-lg m-2"></input>
            <input type="password" placeholder="password" value={pass} onChange={e=>setpass(e.target.value)}  className="w-full p-2 border border-gray-300 rounded-lg m-2"></input>
            <button className="bg-pink-600 p-2 rounded-lg text-white w-full m-2">Login</button>
            <p className="w-full p-2">Dont have an account? <Link to={'/register'} className="underline">Register Now</Link></p>
            </form> 
           
        </div>
    )
}
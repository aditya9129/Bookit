import { Link } from "react-router-dom";
import { UserContext } from './UserContext'
import { useContext } from "react";
export default function Header(){
     const {User}=useContext(UserContext)
    return ( <header className='p-2 flex justify-between'>
    <a className='flex gap-1 p-2 items-center' href="/"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 -rotate-90">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
         </svg><span className='font-bold text-xl'>BookIt</span>
   </a>


   <div className='flex justify-center gap-2 border border-gray-400 font-bold items-center p-2 rounded-l-3xl rounded-r-3xl shadow-md'>
    <div>Anywhere</div>
    <div className='text-gray-300'>|</div>
    <div>Any week</div>
    <div className='text-gray-300'>|</div>
    <div>Add guests</div>
    <button className='bg-pink-600 text-white rounded-3xl p-1'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
       </svg>
       </button>
   </div>


   < Link to={User?'/account':'/login'} className='flex justify-center gap-2 border  border-gray-400 font-bold items-center p-2 rounded-l-3xl rounded-r-3xl shadow-md'>
   <div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
       <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
       </svg>
  </div>
  <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
       <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" clipRule="evenodd" />
      </svg>
      
    </div>
  {!!User && (<div>{User.name}</div>)}
   </Link>
   
 


   </header>)
}
import { HashLink as Link } from "react-router-hash-link"
import pImage from '../assets/profileImage.png'

export default function Navbar() {
  return (
    <>
     <nav className="h-screen w-72 fixed bg-teal-200 flex flex-col justify-center items-center space-y-12 shadow-2xl ">
        <div className="w-40 h-40 rounded-full bg-black border-white border-4 flex-shrink-0 overflow-hidden  flex justify-center items-center hover:-translate-y-[2px] " >
          <img src={pImage} alt="profile" className=" h-full"/>
        </div>
        <ul className=" w-full space-y-4 font-light text-3xl flex flex-col items-center" >
          <li className="hover:border-b-black hover:border-b-2 hover:box-content"><Link smooth to='#home'>home</Link></li>
          <li className="hover:border-b-black hover:border-b-2 hover:box-content"><Link smooth to='#about' >about</Link></li>
          <li className="hover:border-b-black hover:border-b-2 hover:box-content"><Link smooth to='#experience'>experience</Link></li>
          <li className="hover:border-b-black hover:border-b-2 hover:box-content"><Link smooth to='#skills'>skills</Link></li>
          <li className="hover:border-b-black hover:border-b-2 hover:box-content"><Link smooth to='#interests'>interests</Link></li>
          <li className="hover:border-b-black hover:border-b-2 hover:box-content"><Link smooth to='#awards'>awards</Link></li>
        </ul>
      </nav> 
    </>
  )
}

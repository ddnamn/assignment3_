import { HashLink as Link } from "react-router-hash-link"

export default function Navbar() {
  return (
    <>
     <nav className="h-screen w-72 fixed bg-teal-200 flex flex-col justify-center items-center space-y-12 shadow-2xl">
        <div className="w-40 h-40 rounded-full bg-black border-white border-4 flex-shrink-0"></div>
        <ul className=" w-full space-y-4 font-light text-3xl flex flex-col items-center" >
          <li><Link smooth to='#home'>home</Link></li>
          <li><Link smooth to='#about'>about</Link></li>
          <li><Link smooth to='#experience'>expeience</Link></li>
          <li><Link smooth to='#skills'>skills</Link></li>
          <li><Link smooth to='#interests'>interests</Link></li>
          <li><Link smooth to='#awards'>awards</Link></li>
        </ul>
      </nav> 
    </>
  )
}

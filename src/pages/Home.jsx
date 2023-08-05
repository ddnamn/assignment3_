import iFacebook from '../assets/icons/facebook.png'
import iLinkedInd from '../assets/icons/linkedin.png'
import iInstagram from '../assets/icons/instagram.png'
import iGitHub from '../assets/icons/github.png'

export default function Home() {
  return (
    <>
      <section id="home" className="h-screen ml-80 ">
        <h1 className=".title">Home</h1>
        <p className="w-3/4  indent-10 pt-10 text-3xl ">Assalamu'alaikum Wr.Wb, I am Muhammad Aminuddin Rusydi, an Informatics Engineering student at State University of Surabaya. I am an active student bot in academic andd organization. i able to work individal and team, self-learner and commit to develop my skills continuously. let know more about me at here </p>
        <ul className="list-disc ml-11 indent-10 pt-10 text-3xl">
          
          <li><img src={iLinkedInd} alt="LinkedIn" className='w-10 mt-2' /></li>
          <li><img src={iFacebook} alt="Facebook"  className='w-10  mt-2'/></li>
          <li><img src={iInstagram} alt="Instagram" className='w-10  mt-2'/></li>
          <li><img src={iGitHub} alt="GitHub" className='w-10  mt-2'/></li>
        </ul>
      </section> 
      <div className="absolute pb-4 pr-4 bg-gray-500 bottom-0 right-0 text-black font-bold text-3xl">Design by <span className="text-teal-200"> M.Aminuddin.R </span> </div>
    </>
  )
}

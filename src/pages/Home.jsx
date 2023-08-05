import { BsLinkedin ,BsFacebook,BsInstagram,BsGithub} from 'react-icons/Bs';


export default function Home() {
  return (
    <>
      <section id="home" className="h-screen ml-80 ">
        <h1 className=".title">Home</h1>
        <p className="w-3/4  indent-10 pt-10 text-3xl ">Assalamu'alaikum Wr.Wb, I am Muhammad Aminuddin Rusydi, an Informatics Engineering student at State University of Surabaya. I am an active student bot in academic andd organization. i able to work individal and team, self-learner and commit to develop my skills continuously. let know more about me at here </p>
        <ul className="list-disc ml-11 indent-10 pt-10 text-3xl">
          
          <li><BsLinkedin className='text-blue-400 mt-1'/></li>
          <li><BsFacebook className='text-blue-700 mt-1'/></li>
          <li><BsInstagram className='text-purple-700 mt-1'/></li>
          <li><BsGithub className='mt-1'/></li>
        </ul>
      </section> 
      <div className="absolute pb-4 pr-4 bg-gray-500 bottom-0 right-0 text-black font-bold text-3xl">Design by <span className="text-teal-200"> M.Aminuddin.R </span> </div>
    </>
  )
}

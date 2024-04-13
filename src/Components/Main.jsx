import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { MdOutlineArrowOutward } from "react-icons/md";
import Portfolio from "../Assets/Portfolio.png";
import JobPortal from "../Assets/Job-Portal.png";
import Google from "../Assets/Google.png";
import Textspeaker from "../Assets/Text-Speaker.jpg";



function Main() {

  return (

    <>

      <div className=' bg-slate-900 h-screen flex flex-col text-start md:flex md:flex-row  '>

        <div className=' h-screen w-[100%] flex flex-col gap-8 p-5  md:flex  md:items-center md:justify-center md:gap-10'>

          <div className='flex justify-center  items-start p-5 gap-1 md:flex md:items-start md:justify-center  flex-col md:ms-52'>
            <h1 className=' text-5xl  md:text-7xl text-slate-300 font-semibold text-start'>Izhar Pasha</h1>
            <h2 className='text-xl font-semibold text-slate-400 md:text-3xl m-0.5'>Front end Developer</h2>
            <p className='w-[100%] text-slate-500 md:w-[70%] text-lg'>I build pixel-perfect, engaging, and accessible digital experiences.</p>
          </div>

          <div className='w-[100%] hidden  text-white md:flex md:item-center md:justify-center'>
            <div className='w-[30%] flex items-start flex-col gap-3 '>

              <div className=' flex items-center text-slate-300 gap-5 w-[42%] hover:w-[60%] hover:font-bold  cursor-pointer  '><div className='bg-slate-400 h-[0.5px] w-[100%] hover:bg-white active:w-[60%] active:font-bold'></div><a href='#about'>ABOUT</a>
              </div>
              <div className=' flex items-center text-slate-300 gap-5 w-[45%] hover:w-[65%]  hover:font-bold cursor-pointer'><div className='bg-slate-400 h-[0.5px] w-[100%] hover:bg-white   '></div><a href='#skill'>SKILLS</a></div>
              <div className=' flex items-center text-slate-300  gap-5 w-[75%] hover:w-[85%]  hover:font-bold cursor-pointer hover:to-white'><div className='bg-slate-400 h-[0.5px] w-[100%] hover:bg-white  '></div><a href='#experience'>EXPERIENCE</a></div>
              <div className=' flex items-center text-slate-300  gap-5 w-[80%] hover:w-[90%] hover:font-bold cursor-pointer'><div className='bg-slate-400 h-[0.5px] w-[100%] hover:bg-white  '></div><a href='#project'>PROJECTS</a></div>


            </div>
          </div>

          <div className=' flex gap-14  text-slate-400 justify-center '>
            <a className=' text-3xl cursor-pointer' href='https://www.linkedin.com/in/izharpasha/' target="_blank" rel="noopener noreferrer" ><FaLinkedin /></a>
            <a className=' text-3xl cursor-pointer' href='https://github.com/Izhar-Pasha' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
            <a className=' text-3xl cursor-pointer' href='mailto:mdizharpasha07@gmail.com' target="_blank" rel="noopener noreferrer" ><MdEmail /></a>
          </div>
        </div>

        <div className='h-screen  md:h-screen w-[100%] flex items-center justify-center flex-col '>
          <div className='overflow-y-scroll overflow-hidden w-[100%] md:overflow-y-scroll scroll-smooth' >

            {/* About Section */}
            <div className=' bg-slate-900 h-[60vh] flex flex-col items-center justify-center  gap-5 md:h-[100vh] ' id='about'>
              <div className=' h-[60px] w-[90%]  flex items-center bg-[rgb(15,23,42,0.98)] text-lg sticky top-[0] scroll-smooth  text-white  font-semibol md:hidden'> ABOUT </div>
              <p className='  text-start text-[1rem] w-[85%] text-[#94A3B8] flex  items-center justify-center md:w-[90%] font-medium  md:text-[1.1rem]'>Back in 2022, I kicked off my professional journey as a Technical Associate, tackling the world of software development and installations. my role took a delightful turn. where I started coding and participating in front end activities.</p>
              <p className='text-start text-[1rem] w-[85%] text-[#94A3B8] flex  items-center justify-center md:w-[90%] font-medium  md:text-[1.1rem]'>I specialize in developing responsive software applications that align seamlessly with the design, capturing the precise look, feel, and UI experience envisioned. Motivated by the desire to harmonize the art of design with the art of programming, I bring a creative touch to every project.</p>
              <p className='text-start text-[1rem] w-[85%] text-[#94A3B8] flex  items-center justify-center md:w-[90%] font-medium  md:text-[1.1rem]'>Outside of the tech bubble, life takes on a different rhythm. I love soaking up family time, finding peace in the mosque, getting lost in the world of poetry, and, of course, unwinding with a good dose of online content.</p>
            </div>

            {/* Skill Section */}
            <div id='skill' >
              <div className='  bg-slate-900 h-[50vh]  w-[100%] flex flex-col items-center justify-center  gap-5 md:h-[50vh] '>
                <div className=' h-[60px] w-[90%]  flex items-center bg-[rgb(15,23,42,0.98)] text-lg sticky top-[0] scroll-smooth  text-white  font-semibol md:hidden'> SKILL </div>
                <div className='h-full w-[110%] mt-4 p-10 flex flex-wrap justify-evenly items-center  text-center  md:mt-16 md:w-[100%] md:h-[400px]'>
                  <div className="flex flex-col gap-8">
                    <p className='text-teal-500  bg-teal-900 hover:bg-teal-950 font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>React Js</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>Node Js</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>Tailwind CSS</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>RestFull API</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>PostMan</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>JavaScript</p>
                  </div>
                  <div className="flex flex-col gap-8">
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>Python</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>HTML & CSS</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>SASS</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>BootStrap</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>React-BootStrap</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>Mongo DB</p>
                  </div>
                  <div className="flex flex-col gap-8">
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>FireBase</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>Express Js</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>Git</p>
                    <p className=' text-teal-500 bg-teal-900 hover:bg-teal-950   font-semibold  p-1 px-3 text-base cursor-pointer rounded-[32px] ease-in-out'>GitHub</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Experience Section */}

            <div className=' h-[80vh] flex items-center justify-center flex-col gap-20 md:h-screen' id='experience'>
              <div className=' h-[60px] w-[90%]  flex items-center bg-[rgb(15,23,42,0.98)] text-lg sticky top-[0] scroll-smooth  text-white  font-semibol md:hidden'> EXPERIENCE </div>
              <div className=' h-auto w-[90%]   rounded-lg text-white p-5 flex flex-col items-start justify-center gap-3 hover:bg-[rgb(255,255,255,0.06)] hover:cursor-pointer'>
                <div className='flex flex-col  gap-10 md:flex md:flex-row'>
                  <p className='text-slate-600 w-[100%]  h-[20%] font-medium hover:text-slate-500 md:w-[30%]'>2022  -  PRESENT</p>
                  <div className='flex w-[100%] flex-col gap-3 md:w-[80%] '>
                    <div className='flex gap-2 font-semibold'>
                      <div className='flex flex-col text-base  md:text-lg'>
                        <p>Technical Associate &nbsp;-</p>
                        <p className='text-slate-400'>(Front End Developer)</p>
                      </div>

                      <p>Pierian Services</p>
                    </div>

                    <div className='flex items-center justify-center'>
                      <p className='flex items-center w-[100%] justify-start text-slate-400 font-semibold'>Developed, maintained, and installed production softwares for clients. Collaborated with co-workers to design and style interactive web applications.</p>
                    </div>
                    <div className='flex flex-wrap gap-3'>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-xs cursor-pointer rounded-[32px] ease-in-out'>React Js</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-xs cursor-pointer rounded-[32px] ease-in-out'>Tailwind CSS</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-xs cursor-pointer rounded-[32px] ease-in-out'>JavaScript</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-xs cursor-pointer rounded-[32px] ease-in-out'>HTML & CSS</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-xs cursor-pointer rounded-[32px] ease-in-out'>SASS</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-xs cursor-pointer rounded-[32px] ease-in-out'>RestFull Api</p>

                    </div>
                  </div>
                </div>
              </div>

              <div className='w-full'>
                <a href="https://drive.google.com/file/d/1S686ycR382xvbsZWuohj_bcCUE5kD2rS/view?usp=drive_link" alt="/" className='text-white w-[50%] flex items-center gap-1 '>View Full Resume <p><MdOutlineArrowOutward /></p></a>
              </div>
            </div>

            {/* Project Section */}

            <div className='h-auto w-[100%] flex flex-col items-center md:flex ' id='project'>
              <div className=' h-[60px] w-[90%]  flex items-center bg-[rgb(15,23,42,0.98)] text-lg sticky top-[0] scroll-smooth  text-white  font-semibol md:hidden md:gap-20'> PROJECT </div>
              {/* PROJECT 1 */}
              <a href="https://izhar-pasha.github.io/Car-Carnation/" target='blank'>
                <div className=' h-auto w-[98%] flex flex-col-reverse items-start gap-5  rounded-lg text-white p-5 hover:bg-[rgb(255,255,255,0.06)] hover:cursor-pointer hover:text-slate-200 md:flex-row md:gap-4'>
                  <div>
                    <img className='h-[80px] w-full object-cover border-[1px] md:h-[100px] ' src={Portfolio} alt="" />
                  </div>
                  <div className='w-[100%] md:gap-4'>
                    <div className='text-xl font-semibold'>PortFolio</div>
                    <div className='text-xs text-slate-500 m-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, commodi amet tempore, expedita pariatur facere recusandae earum minima fugit illo rerum iusto laudantium soluta ab dolorem totam impedit qui ipsum.</div>
                    <div className='h-[30px] w-[80%] flex items-center justify-center  gap-5'>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>React Js</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3  text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>HTML</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3  text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>CSS</p>
                    </div>
                  </div>
                </div>
              </a>

              {/* PROJECT 2 */}
              <a href="https://izhar-pasha.github.io/Job-Finder/" target='blank'>
                <div className=' h-auto w-[98%] flex flex-col-reverse items-start gap-5  rounded-lg text-white p-5 hover:bg-[rgb(255,255,255,0.06)] hover:cursor-pointer hover:text-slate-200 md:flex-row md:gap-4'>
                  <div>
                    <img className='h-[80px] w-full object-cover border-[1px]  md:h-[100px] ' src={JobPortal} alt="" />
                  </div>
                  <div className='w-[100%] md:gap-4'>
                    <div className='text-xl font-semibold'>GetHired.com</div>
                    <div className='text-xs text-slate-500 m-2'>GetHired.com is a responsive web application built with a focus on user-centric design and cutting-edge frontend technologies. The platform offers job seekers a seamless and intuitive experience to search and apply for job listings tailored to their skills and interests. This is not real-time job portal its like own designed clone.</div>
                    <div className='h-[30px] w-[100%] flex items-center justify-center  gap-5'>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>React Js</p>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>Tailwind CSS</p>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>JavaScript XMl</p>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>Uiverse.io</p>
                    </div>
                  </div>

                </div>

              </a>

              {/* PROJECT 3 */}
              <a href="https://izhar-pasha.github.io/Google.com/" target='blank'>
                <div className=' h-auto w-[98%] flex flex-col-reverse items-start gap-5  rounded-lg text-white p-5 hover:bg-[rgb(255,255,255,0.06)] hover:cursor-pointer hover:text-slate-200 md:flex-row md:gap-4'>
                  <div>
                    <img className='h-[80px] w-full object-cover border-[1px] md:h-[100px] ' src={Google} alt="" />
                  </div>
                  <div className='w-[100%] md:gap-4'>
                    <div className='text-xl font-semibold'>Google.com</div>
                    <div className='text-xs text-slate-500 m-2'>This project is a simple web application built using React.js. It features a single search bar where users can input any query, and upon submission, they are redirected to Google.com with the provided query.</div>
                    <div className='h-[30px] w-[80%] flex items-center justify-center  gap-5'>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>React Js</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>JavaScript XMl</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>CSS</p>
                    </div>
                  </div>

                </div>

              </a>

              {/* PROJECT 4 */}
              <a href="https://izhar-pasha.github.io/Text-Speaker/" target='blank'>
                <div className=' h-auto w-[98%] flex flex-col-reverse items-start gap-5  rounded-lg text-white p-5 hover:bg-[rgb(255,255,255,0.06)] hover:cursor-pointer hover:text-slate-200 md:flex-row md:gap-4'>
                  <div>
                    <img className='h-[80px] w-full object-cover border-[1px] md:h-[100px] ' src={Textspeaker} alt="" />
                  </div>
                  <div className='w-[100%] md:gap-4'>
                    <div className='text-xl font-semibold '>Text - Speaker</div>
                    <div className='text-xs text-slate-500 m-2'>Text Speaker is a web application designed to convert typed text into spoken words, enhancing accessibility and providing a unique way to interact with written content.</div>
                    <div className='h-[30px] w-[80%] flex items-center justify-center  gap-5'>
                      <p className='text-teal-500   bg-teal-900 font-semibold p-1 px-3 text-[0.6rem]  cursor-pointer rounded-[32px] ease-in-out'>React Js</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>JavaScript XMl</p>
                      <p className='text-teal-500  bg-teal-900 font-semibold p-1 px-3 text-[0.6rem] cursor-pointer rounded-[32px] ease-in-out'>CSS</p>
                    </div>
                  </div>

                </div>

              </a>


            </div>

          </div>

        </div>

      </div>
    </>
  );
}

export default Main;

import React from 'react'
import logo from '../images/logo192.png'
import { HiLocationMarker } from 'react-icons/hi';
import { BsCalendarEvent } from 'react-icons/bs';
import { FaMoneyBill } from 'react-icons/fa';
const MoreDetails = () => {
  const style = { color: "white" }
  return (
    <div className='lg:mx-32'>
      <div className='bg-[#110A60] h-[302px] rounded-[35px] flex items-center lg:flex-row flex-col'>
        <div className=' flex items-center w-[100%]'>
          <div className='lg:h-[250px] h-32 rounded-full lg:px-10 px-5 md:px-8'>
            <img src={logo} alt="" className='lg:h-[250px] lg:w-[250px] rounded-full h-32 w-32' />
          </div>
          <div className='lg:ml-[52px]'>
            <h1 className='font-Poppins text-[#2FCDFF] mt-4 lg:mt-[2px] lg:text-4xl md:text-3xl text-2xl font-bold mb-4'>Internship Title</h1>
            <h1 className='font-Playfair text-white lg:text-3xl md:text-2xl text-xl font-semibold'>Company Name</h1>
            <div>
              <div className='flex mt-4 items-center'>
                <BsCalendarEvent style={style} className='text-white fill-white stroke-white lg:h-8 lg:w-8' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>Duration</h5>
              </div>
              <div className='flex mt-1 lg:mt-4 items-center'>
                <FaMoneyBill style={style} className='text-white fill-white lg:h-8 lg:w-8 stroke-white' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>Stipend</h5>
              </div>
              <div className='flex mt-1 lg:mt-4 items-center mb-4'>
                <HiLocationMarker style={style} className='text-white fill-white lg:h-8 lg:w-8 stroke-white' />
                <h5 className='font-Poppins font-normal text-white lg:text-xl ml-4'>Location</h5>
              </div>
            </div>
          </div>
        </div>
        <div className='lg:absolute right-44 top-56 max-lg:w-[80%] mx-10 flex flex-col items-center'>
          <button className='bg-[#2FCDFF] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold w-[100%] active:translate-y-[2px]'>Apply Now</button>
          <p className='text-white font-Poppins font-medium mt-2'>Last date to apply: Date</p>
        </div>
      </div>
      <div className='p-8'>
        <h1 className='font-Poppins font-bold text-2xl mb-2'>
          Skills
        </h1>
        <h5 className='font-Poppins font-semibold px-3 text-xl'>Key Skills</h5>
        <div className='flex flex-wrap mb-2'>
          <div className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold w-52 text-center lg:mx-5 mx-2 mb-2'>React JS</div>
          <div className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold w-52 text-center lg:mx-5 mx-2 mb-2'>CSS</div>
        </div>
        <h5 className='font-Poppins font-semibold px-3 text-xl'>Other Skills</h5>
        <div className='flex flex-wrap mb-2'>
        <div className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold w-52 text-center lg:mx-5 mx-2 mb-2'>React JS</div>
          <div className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold w-52 text-center lg:mx-5 mx-2 mb-2'>Communication</div>
          <div className='bg-[#D9D9D9] border-black border border-solid rounded-xl px-4 py-1 font-Poppins font-semibold w-52 text-center lg:mx-5 mx-2 mb-2'>React JS</div>
        </div>
        <h1 className='font-Poppins font-bold text-2xl'>
          Details
        </h1>
        <p className='font-Poppins font-medium p-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eos voluptas rerum alias blanditiis cupiditate ut repudiandae est nisi ex accusamus pariatur, commodi accusantium, suscipit natus amet laudantium quos laboriosam!</p>
      </div>
    </div>
  )
}

export default MoreDetails
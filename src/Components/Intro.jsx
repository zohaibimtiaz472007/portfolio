import React from 'react'
import { Link } from 'react-scroll'
import img from '../assets/img.png'

const Intro = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src={img} />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl  text-3xl mb-4 font-medium text-gray-900">I'm <span className='text-orange-500'>Zohaib</span>
              <br className="hidden lg:inline-block" />Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">I'm am Skilled Full Stack Developer with experience in creating appealing and user friendly websites.</p>
            <div className="flex justify-center">
              <Link to='contact' spy = {true} smooth = {true} offset = {-100} ><button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Hire Me</button></Link>
              <a  href = {"https://www.mediafire.com/file/i25wwzuy69s1n5o/Professional+Modern+CV+Resume.pdf/file"}  rel = "noreferrer" target='_blank' ><button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Download CV</button></a>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Intro

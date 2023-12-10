import React from 'react'
import './Navbar.css'
import logo from '../assets/zee.png'
// import logo from './../assets/logo1.png'
// import github_logo from './../assets/github.png'
import { Link } from 'react-scroll'


const Navbar = () => {
  return (
    <header className="text-gray-600 body-font border-b-4 sticky">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link to = 'Intro' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src={logo} alt='react' fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              
            </img>
            <span className="ml-3 text-xl">ZoZo Developers</span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link to = 'Intro' spy = {true} smooth = {true} offset = {-100} duration = {500} className="mr-5 hover:text-gray-900">Home</Link>
            <Link to = 'About' spy = {true} smooth = {true} offset = {-50} duration = {500} className="mr-5 hover:text-gray-900">About</Link>
            <Link to = 'portfolio' spy = {true} smooth = {true} offset = {-50} duration = {500} className="mr-5 hover:text-gray-900">Portfolio</Link>
          </nav>
          <Link  to='contact' spy = {true} smooth = {true} offset = {-100} className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"> <i className="fa-regular fa-message m-auto mr-2"></i> Contact Us</Link>

          
        </div>
      </header>
  )
}

export default Navbar

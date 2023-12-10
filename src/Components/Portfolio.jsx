import React from 'react'
import imageone from '../assets/pone.jpg'
import imagetwo from '../assets/ptwo.jpg'
import imagethree from '../assets/pthree.jpg'
import imagefour from '../assets/pfour.jpg'
import imagesix from '../assets/imagesix.png'
import imagefive from '../assets/imagefive.jpg'


const Portfolio = () => {
  return (
    <div>
      <section id='portfolio' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">My Portfolio</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">I take pride in paying attention to the smallest detail and making sure that my work is pixel perfect. I am excited to bring my skill and experience to help  bussiness achieve their goals and create a strong online presence.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={imageone} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Web developer</h1>
                  <p className="leading-relaxed">Crafting Dreams into Digital Reality: Zohaib's Portfolio Showcase. Explore a curated collection of my finest works, where passion meets precision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={imagethree} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Web Developer</h1>
                  <p className="leading-relaxed">Crafting Dreams into Digital Reality: Zohaib's Portfolio Showcase. Explore a curated collection of my finest works, where passion meets precision. Explore a curated collection of my finest works, where passion meets precision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={imagefour} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Web Developer</h1>
                  <p className="leading-relaxed">Crafting Dreams into Digital Reality: Zohaib's Portfolio Showcase. Explore a curated collection of my finest works, where passion meets precision Explore a curated collection of my finest works, where passion meets precision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={imagetwo} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Web developer</h1>
                  <p className="leading-relaxed">Crafting Dreams into Digital Reality: Zohaib's Portfolio Showcase. Explore a curated collection of my finest works, where passion meets precision. Explore a curated collection of my finest works, where passion meets precision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={imagefive} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">web developer</h1>
                  <p className="leading-relaxed">Crafting Dreams into Digital Reality: Zohaib's Portfolio Showcase. Explore a curated collection of my finest works, where passion meets precision. Explore a curated collection of my finest works, where passion meets precision.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src={imagesix} />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">web developer</h1>
                  <p className="leading-relaxed">Crafting Dreams into Digital Reality: Zohaib's Portfolio Showcase. Explore a curated collection of my finest works, where passion meets precision. Explore a curated collection of my finest works, where passion meets precision.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Portfolio

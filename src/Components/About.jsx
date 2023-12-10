import React from 'react'
// import { Link } from 'react-scroll'

const About = () => {
  return (
    <div>
      <section id='About' className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Web Developer</h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">What I do</h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">Web Developer</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base"> I am a passionate and results-driven web developer with expertise in creating dynamic and responsive websites. My skills range from front-end technologies to back-end development, and I am committed to delivering high-quality solutions that exceed client expectations.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">React Developer</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">a dedicated React developer passionate about creating engaging and interactive user experiences. With a strong foundation in front-end technologies and a focus on React, I bring creativity and technical expertise to every project.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <h2 className="text-gray-900 text-lg title-font font-medium">Graphic Designer</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">a versatile and imaginative graphic designer dedicated to transforming concepts into visually stunning designs. With a keen eye for detail and a passion for aesthetics, I bring a unique blend of creativity and technical skills to every design project.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About

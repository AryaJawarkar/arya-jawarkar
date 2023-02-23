import React from 'react'
import Resume from '../files/Resume.pdf'

const About = () => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-14 mx-auto flex flex-wrap">
      <h2 className="sm:text-3xl text-3xl text-blue-600 font-medium title-font mb-2 md:w-2/5">About me</h2>
      <div className="md:w-3/5 md:pl-6">
        <p className="leading-relaxed text-base">I am proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3),  Advance Javascript, React.Js And apart from Front-End, I have basic knowledge in Back-End using Node.Js(Express.Js) & MongoDB as well as in styling using styled-components and continuously engage in trying to extend my skills with new technology.</p>
        <div className="flex md:mt-4 mt-6">
          <button  className="inline-flex text-blue-700 bg-blue-400 border-0 py-1 px-4 focus:outline-none hover:bg-blue-700 hover:text-blue-400 rounded"><a href={Resume} download>Download Resume</a></button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About

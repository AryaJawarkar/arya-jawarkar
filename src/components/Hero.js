import React from 'react';
import arya from './img/arya.jpg'
const Hero = () => {
  return (
    <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-14 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-5xl mb-4 font-extrabold text-blue-400">Hiii....
        <br className="hidden lg:inline-block" />I am Arya Jawarkar
      </h1>
      <p className="mb-8 leading-relaxed">UI/UX developer. Programmer <br /> Frontend Developer <br /> FullStack soon</p>
      <div className="flex justify-center">
      <span className="inline-flex">
      <a className="ml-3 text-gray-500" href='https://github.com/AryaJawarkar' target='_blank' rel='noreferrer'>
      <svg width="30px" height="30px" viewBox="0 -0.5 24 24" id="meteor-icon-kit__solid-github" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.2047 0.00001C6.56031 -0.005731 1.74628 4.08615 0.842541 9.6577C-0.061195 15.2293 3.2126 20.6331 8.56941 22.4118C9.14823 22.5177 9.35294 22.1577 9.35294 21.8541C9.35294 21.5506 9.35294 20.8588 9.35294 19.8988C6.14117 20.5977 5.46353 18.3529 5.46353 18.3529C5.25046 17.6572 4.79779 17.0595 4.18588 16.6659C3.14823 15.96 4.27059 15.96 4.27059 15.96C5.00761 16.0641 5.65578 16.5014 6.02823 17.1459C6.34368 17.7179 6.87393 18.1406 7.50179 18.3208C8.12965 18.5009 8.8034 18.4236 9.37411 18.1059C9.41842 17.5252 9.66876 16.9794 10.08 16.5671C7.5247 16.2777 4.84235 15.2894 4.84235 10.92C4.82481 9.7786 5.24688 8.67412 6.02117 7.8353C5.67632 6.84285 5.71662 5.7571 6.13412 4.79295C6.13412 4.79295 7.10117 4.48236 9.29647 5.97177C11.1816 5.45419 13.1713 5.45419 15.0565 5.97177C17.2518 4.48236 18.2118 4.79295 18.2118 4.79295C18.6351 5.74689 18.6854 6.82486 18.3529 7.81412C19.1272 8.65294 19.5493 9.7574 19.5318 10.8988C19.5318 15.3177 16.8424 16.2847 14.28 16.5459C14.8359 17.1047 15.1218 17.8774 15.0635 18.6635C15.0635 20.2024 15.0635 21.4447 15.0635 21.8188C15.0635 22.1929 15.2682 22.4824 15.8541 22.3694C21.1473 20.5447 24.3569 15.1728 23.4554 9.6469C22.5539 4.1211 17.8034 0.04779 12.2047 0.00001z" fill="#758CA3"/></svg>
      </a>
      <a className="ml-3 text-gray-500" href='https://www.instagram.com/aryajawarkar/' target='_blank' rel='noreferrer'>
        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
        </svg>
      </a>
      <a className="ml-3 text-gray-500" href='https://www.linkedin.com/in/arya-jawarkar-b79289194/' target='_blank' rel='noreferrer'>
        <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
          <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
          <circle cx="4" cy="4" r="2" stroke="none"></circle>
        </svg>
      </a>
              </span>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6  " >
      <img className=" object-center rounded object-contain rounded-b-full rounded-t-full slide-top" alt="hero" src={arya} />
    </div>
  </div>
</section>
  )
}

export default Hero

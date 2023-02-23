import React, { useEffect } from "react";
import ecomm from "./img/ecomm.png";
import gihub from './img/gihub.png'
import netflix from './img/netflix.png'
import dict from './img/dict.png'
import gana from './img/gana.png'
import movie from './img/movie.png'
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 150,
    });
  }, []);

  return (
    <section className="text-gray-600 body-font" data-aos="fade-up">
      <div className=" text-center w-full mb-1">
        <h1 className="sm:text-5xl text-2xl font-extrabold title-font mb-4 text-blue-400">
          Projects
        </h1>
      </div>
      <div className="container px-5 py-14 mx-auto">
        <div className="flex flex-wrap -m-4 justify-center gap-6 ">
          <div
            className="lg:w-1/4 md:w-1/2 p-2 w-full shadow-lg shadow-black-500/50 hover:shadow-indigo-500/40 "
            data-aos="zoom-in"
          >
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src={ecomm}
              />
            </a>
            <div className="mt-4 flex items-center gap-1">
              <h3 className="text-white text-xs bg-gray-500 tracking-widest title-font mb-1 p-1 rounded">
                HTML
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                CSS
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                React.Js
              </h3>
            </div>
            <div className="mt-4 ">
              <a
                className="inline-block bg-red-400 hover:bg-red-600 mx-1 p-1 text-white rounded"
                href=" https://aryajawarkar.github.io/e-commerce/" rel="noreferrer"
              >
                Live Site
              </a>
              <a
                className="inline-block bg-blue-300 hover:bg-blue-500 p-1 text-white rounded"
                href=" https://github.com/AryaJawarkar/e-commerce" rel="noreferrer"
              >
                Source Code
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg shadow-black-500/50 hover:shadow-indigo-500/40 "
            data-aos="zoom-in"
          >
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src={gihub}
              />
            </a>
            <h3>Githu Users Search</h3>
            <div className=" flex items-baseline gap-1">
              <h3 className="mt-1 text-white text-xs bg-gray-500 tracking-widest title-font mb-1 p-1 rounded">
                HTML
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                CSS
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                React.Js
              </h3>
            </div>
            <div className='mt-1'>
              <a
                className="inline-block bg-red-400 hover:bg-red-600 mx-1 p-1 text-white rounded"
                href="https://aryajawarkar.github.io/github-users-search/"
              >
                Live Site
              </a>
              <a
                className="inline-block bg-blue-300 hover:bg-blue-500 p-1 text-white rounded"
                href="https://github.com/AryaJawarkar/github-users-search"
              >
                Source Code
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg shadow-black-500/50 hover:shadow-indigo-500/40 "
            data-aos="zoom-in"
          >
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src={gana}
              />
            </a>
            <h3>Music App</h3>
            <div className=" flex items-baseline gap-1">
              <h3 className="mt-1 text-white text-xs bg-gray-500 tracking-widest title-font mb-1 p-1 rounded">
                HTML
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                CSS
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                Javascript
              </h3>
            </div>
            <div className='mt-1'>
              <a
                className="inline-block bg-red-400 hover:bg-red-600 mx-1 p-1 text-white rounded"
                href="https://aryajawarkar.github.io/MusicApp/"
              >
                Live Site
              </a>
              <a
                className="inline-block bg-blue-300 hover:bg-blue-500 p-1 text-white rounded"
                href="https://github.com/AryaJawarkar/MusicApp"
              >
                Source Code
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg shadow-black-500/50 hover:shadow-indigo-500/40 "
            data-aos="zoom-in"
          >
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src={netflix}
              />
            </a>
            <h3>Netflix Clone</h3>
            <div className=" flex items-baseline gap-1">
              <h3 className="mt-1 text-white text-xs bg-gray-500 tracking-widest title-font mb-1 p-1 rounded">
                HTML
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                CSS
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                Javascript
              </h3>
            </div>
            <div className='mt-1'>
              <a
                className="inline-block bg-red-400 hover:bg-red-600 mx-1 p-1 text-white rounded"
                href="https://aryajawarkar.github.io/Netflix-clone/"
              >
                Live Site
              </a>
              <a
                className="inline-block bg-blue-300 hover:bg-blue-500 p-1 text-white rounded"
                href="https://github.com/AryaJawarkar/Netflix-clone"
              >
                Source Code
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg shadow-black-500/50 hover:shadow-indigo-500/40 "
            data-aos="zoom-in"
          >
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src={movie}
              />
            </a>
            <h3>Movie Trix</h3>
            <div className=" flex items-baseline gap-1">
              <h3 className="mt-1 text-white text-xs bg-gray-500 tracking-widest title-font mb-1 p-1 rounded">
                HTML
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                CSS
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                React.Js
              </h3>
            </div>
            <div className='mt-1'>
              <a
                className="inline-block bg-red-400 hover:bg-red-600 mx-1 p-1 text-white rounded"
                href="https://aryajawarkar.github.io/movieTrix/"
              >
                Live Site
              </a>
              <a
                className="inline-block bg-blue-300 hover:bg-blue-500 p-1 text-white rounded"
                href="https://github.com/AryaJawarkar/movieTrix"
              >
                Source Code
              </a>
            </div>
          </div>
          <div
            className="lg:w-1/4 md:w-1/2 p-4 w-full shadow-lg shadow-black-500/50 hover:shadow-indigo-500/40 "
            data-aos="zoom-in"
          >
            <a className="block relative h-48 rounded overflow-hidden">
              <img
                alt="ecommerce"
                className="object-contain object-center w-full h-full block"
                src={dict}
              />
            </a>
            <h3>Movie Trix</h3>
            <div className=" flex items-baseline gap-1">
              <h3 className="mt-1 text-white text-xs bg-gray-500 tracking-widest title-font mb-1 p-1 rounded">
                HTML
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                CSS
              </h3>
              <h3 className="text-white  bg-gray-500 text-xs tracking-widest title-font mb-1 p-1 rounded">
                Javascript
              </h3>
            </div>
            <div className='mt-1'>
              <a
                className="inline-block bg-red-400 hover:bg-red-600 mx-1 p-1 text-white rounded"
                href="https://aryajawarkar.github.io/dictionary/"
              >
                Live Site
              </a>
              <a
                className="inline-block bg-blue-300 hover:bg-blue-500 p-1 text-white rounded"
                href="https://github.com/AryaJawarkar/dictionary"
              >
                Source Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

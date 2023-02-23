import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {

 

  useEffect(()=>{
    AOS.init({
      duration: 2000,
      offset : 300,
    })
    },[])

  return (
    <section className="text-gray-600 body-font relative" data-aos="fade-in">
      <div className="container px-5  mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-blue-700">
            Contact Me
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
           Let's convert your ideas into business...
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="mailto:aryajawarkar7@gmail.com">Lets Chat</a>
               
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
              <a className="text-indigo-500" href="mailto:aryajawarkar7@gmail.com">aryajawarkar7@gmail.com</a>
              <p className="leading-normal my-5">
                Nagpur,Maharashtra
                <br />
                India
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

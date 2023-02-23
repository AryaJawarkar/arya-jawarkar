import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      offset: 200,
    });
  }, []);

  return (
    <section className="text-gray-600 body-font" data-aos="fade-up">
      <div className=" text-center w-full mb-1">
        <h1 className="sm:text-5xl text-2xl font-extrabold title-font mb-4 text-blue-400">
          Skills
        </h1>
      </div>
      <div className="container py-14 mx-auto grid grid-rows-auto gap-y-11 grid-cols-2 place-items-center md:grid-cols-3 " >

      
        <div data-aos='flip-right'>
          <div className="sm:w-32 sm:h-32 h-20 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              width="100px"
              height="100px"
              viewBox="-52.5 0 361 361"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path
                d="M255.555 70.766l-23.241 260.36-104.47 28.962-104.182-28.922L.445 70.766h255.11z"
                fill="#E44D26"
              />
              <path
                d="M128 337.95l84.417-23.403 19.86-222.49H128V337.95z"
                fill="#F16529"
              />
              <path
                d="M82.82 155.932H128v-31.937H47.917l.764 8.568 7.85 88.01H128v-31.937H85.739l-2.919-32.704zM90.018 236.542h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58l-.14.037-35.568-9.604-2.274-25.471z"
                fill="#EBEBEB"
              />
              <path d="M24.18 0h16.23v16.035h14.847V0h16.231v48.558h-16.23v-16.26H40.411v16.26h-16.23V0zM92.83 16.103H78.544V0h44.814v16.103h-14.295v32.455h-16.23V16.103h-.001zM130.47 0h16.923l10.41 17.062L168.203 0h16.93v48.558h-16.164V24.49l-11.166 17.265h-.28L146.35 24.49v24.068h-15.88V0zM193.21 0h16.235v32.508h22.824v16.05h-39.06V0z" />
              <path
                d="M127.89 220.573h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576H127.89v31.937zM127.89 155.854v.078h77.143l.64-7.178 1.456-16.191.763-8.568H127.89v31.86z"
                fill="#FFF"
              />
            </svg>
          
        </div> 
        <p className="text-center text-2xl font-bold">HTML 5</p>  
        </div>
       
       
        <div data-aos='flip-right'>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg width="100px" height="100px" viewBox="-52.5 0 361 361">
              <path
                d="M127.844 360.088L23.662 331.166.445 70.766h255.11l-23.241 260.36-104.47 28.962z"
                fill="#264DE4"
              />
              <path
                d="M212.417 314.547l19.86-222.49H128V337.95l84.417-23.403z"
                fill="#2965F1"
              />
              <path
                d="M53.669 188.636l2.862 31.937H128v-31.937H53.669zM47.917 123.995l2.903 31.937H128v-31.937H47.917zM128 271.58l-.14.037-35.568-9.604-2.274-25.471h-32.06l4.474 50.146 65.421 18.16.147-.04V271.58z"
                fill="#EBEBEB"
              />
              <path d="M60.484 0h38.68v16.176H76.66v16.176h22.506v16.175H60.484V0zM106.901 0h38.681v14.066h-22.505v2.813h22.505v32.352h-38.68V34.46h22.505v-2.813H106.9V0zM153.319 0H192v14.066h-22.505v2.813H192v32.352h-38.681V34.46h22.505v-2.813H153.32V0z" />
              <path
                d="M202.127 188.636l5.765-64.641H127.89v31.937h45.002l-2.906 32.704H127.89v31.937h39.327l-3.708 41.42-35.62 9.614v33.226l65.473-18.145.48-5.396 7.506-84.08.779-8.576z"
                fill="#FFF"
              />
            </svg>
          
        </div>
        <p className="text-center text-2xl font-bold">CSS 3</p>  
        </div>

       <div data-aos='flip-right'>
          <div className="sm:w-32 sm:h-32 h-20 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <path d="M0 0h256v256H0V0z" fill="#F7DF1E" />
              <path d="M67.312 213.932l19.59-11.856c3.78 6.701 7.218 12.371 15.465 12.371 7.905 0 12.89-3.092 12.89-15.12v-81.798h24.057v82.138c0 24.917-14.606 36.259-35.916 36.259-19.245 0-30.416-9.967-36.087-21.996M152.381 211.354l19.588-11.341c5.157 8.421 11.859 14.607 23.715 14.607 9.969 0 16.325-4.984 16.325-11.858 0-8.248-6.53-11.17-17.528-15.98l-6.013-2.58c-17.357-7.387-28.87-16.667-28.87-36.257 0-18.044 13.747-31.792 35.228-31.792 15.294 0 26.292 5.328 34.196 19.247L210.29 147.43c-4.125-7.389-8.591-10.31-15.465-10.31-7.046 0-11.514 4.468-11.514 10.31 0 7.217 4.468 10.14 14.778 14.608l6.014 2.577c20.45 8.765 31.963 17.7 31.963 37.804 0 21.654-17.012 33.51-39.867 33.51-22.339 0-36.774-10.654-43.819-24.574" />
            </svg>
          </div>
          <p className="text-center text-2xl font-bold">Javascript</p>  
       </div>
          
          <div data-aos='flip-right'>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="#00D8FF" fillRule="evenodd">
                <circle cx="11.996" cy="11.653" r="2.142" />
                <path
                  fillRule="nonzero"
                  d="M11.9957722,7.80914159 C14.763782,7.80914159 17.3932297,8.19939152 19.3922491,8.88758063 C21.6123871,9.6518808 22.9666335,10.7818833 22.9666335,11.652558 C22.9666335,12.5799965 21.5040812,13.7840336 19.1293161,14.5708627 C17.2387355,15.1972602 14.7092455,15.538679 11.9957722,15.538679 C9.14520032,15.538679 6.58717845,15.203913 4.71853163,14.565185 C3.54866968,14.1653247 2.58256656,13.6456709 1.92037292,13.0785821 C1.32532838,12.5689984 1.02491103,12.0630628 1.02491103,11.652558 C1.02491103,10.7789546 2.32734001,9.66464781 4.49959681,8.90729393 C6.49945246,8.21010004 9.19325759,7.80914159 11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 L11.9957722,7.80914159 M11.9957722,6.78423056 C9.08437994,6.78423056 6.2777499,7.20198239 4.1621939,7.93951199 C1.62214541,8.82509585 0,10.2129394 0,11.652558 C0,13.1394248 1.74140227,14.6307252 4.38703934,15.5350074 C6.37567236,16.2147483 9.04125041,16.56359 11.9957722,16.56359 C14.8115523,16.56359 17.4474553,16.2078081 19.4516644,15.5437626 C22.2020573,14.632477 23.9915445,13.1592927 23.9915445,11.652558 C23.9915445,10.2077356 22.3170688,8.81052922 19.7258695,7.91848823 C17.6128656,7.19105846 14.871718,6.78423056 11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 L11.9957722,6.78423056 M8.64782576,9.74318674 C10.0306294,7.34537922 11.6822995,5.26251432 13.2771145,3.87459857 C15.0483324,2.33318986 16.7037652,1.72455661 17.4580053,2.15950561 C18.2614273,2.62281187 18.5738182,4.49132292 18.0690455,6.94154209 C17.6671734,8.89223963 16.6992742,11.2540339 15.3437168,13.6046372 C13.9196524,16.0740185 12.3517605,18.1226845 10.8648902,19.4223695 C9.93407029,20.2360369 9.00127666,20.8133347 8.17921011,21.1036655 C7.44050831,21.3645543 6.85214323,21.3720417 6.49651234,21.1669615 C5.73974814,20.7305244 5.42512511,19.045619 5.85426462,16.7855049 C6.24932455,14.7048419 7.24772098,12.1710157 8.64782671,9.74318508 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 L8.64782576,9.74318674 M7.759974,9.23116928 C6.30547459,11.7533204 5.26525979,14.3932772 4.84734364,16.5943171 C4.34554839,19.2370813 4.73740525,21.3355983 5.98449631,22.0548141 C7.2725788,22.7976074 9.43439148,22.0341158 11.5394159,20.1940284 C13.121755,18.8108935 14.7555742,16.6760844 16.2315707,14.1166508 C17.6382359,11.6774242 18.6468519,9.21627599 19.0728759,7.1483441 C19.6574939,4.31054745 19.2752706,2.02434609 17.9700071,1.27164481 C16.7184046,0.549880923 14.6715337,1.30242953 12.6042836,3.1014613 C10.9185312,4.56851694 9.19669947,6.73986025 7.75997496,9.23116762 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 L7.759974,9.23116928 M8.65102932,13.6102163 C7.26423584,11.2147037 6.28457878,8.74353725 5.87862056,6.66870559 C5.42774955,4.36439699 5.72720706,2.6262057 6.48072727,2.18999639 C7.28337846,1.72531755 9.05821175,2.38783711 10.9288592,4.04883669 C12.4181905,5.37119379 13.9809502,7.38921897 15.3404734,9.7376059 C16.7686644,12.2045881 17.7605533,14.5861039 18.1440168,16.5233658 C18.384086,17.7361541 18.4183857,18.8326057 18.2593637,19.6898062 C18.1164684,20.4600771 17.8291151,20.9735449 17.473831,21.1792215 C16.7177635,21.6169189 15.1008664,21.0480332 13.3571194,19.5474962 C11.7518336,18.1661133 10.0552117,16.0356933 8.65102599,13.6102105 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 L8.65102932,13.6102163 M7.76403451,14.1237168 C9.2227685,16.6434222 10.9904487,18.863069 12.6886037,20.3243677 C14.727583,22.0789594 16.7414064,22.7874988 17.9873239,22.0662207 C19.2741476,21.3212689 19.6923336,19.0670565 19.1494202,16.3243517 C18.741335,14.2627011 17.7077401,11.7810493 16.2274688,9.22410641 C14.8166895,6.78718171 13.1881856,4.68425955 11.6093526,3.2824351 C9.4428116,1.3587035 7.27122101,0.548080175 5.96723274,1.30299809 C4.71682218,2.02685487 4.34655386,4.17606524 4.87278214,6.8655093 C5.30188762,9.05864543 6.32316039,11.6347867 7.76403118,14.1237111 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168 L7.76403451,14.1237168"
                />
              </g>
            </svg>
        </div>
        <p className="text-center text-2xl font-bold">React.Js</p>  
          </div>
          <div data-aos='flip-right'>
          <div className="sm:w-32 sm:h-32 h-20 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              width="100px"
              height="100px"
              viewBox="-13 0 282 282"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="xMinYMin meet"
            >
              <g fill="#8CC84B">
                <path d="M116.504 3.58c6.962-3.985 16.03-4.003 22.986 0 34.995 19.774 70.001 39.517 104.99 59.303 6.581 3.707 10.983 11.031 10.916 18.614v118.968c.049 7.897-4.788 15.396-11.731 19.019-34.88 19.665-69.742 39.354-104.616 59.019-7.106 4.063-16.356 3.75-23.24-.646-10.457-6.062-20.932-12.094-31.39-18.15-2.137-1.274-4.546-2.288-6.055-4.36 1.334-1.798 3.719-2.022 5.657-2.807 4.365-1.388 8.374-3.616 12.384-5.778 1.014-.694 2.252-.428 3.224.193 8.942 5.127 17.805 10.403 26.777 15.481 1.914 1.105 3.852-.362 5.488-1.274 34.228-19.345 68.498-38.617 102.72-57.968 1.268-.61 1.969-1.956 1.866-3.345.024-39.245.006-78.497.012-117.742.145-1.576-.767-3.025-2.192-3.67-34.759-19.575-69.5-39.18-104.253-58.76a3.621 3.621 0 0 0-4.094-.006C91.2 39.257 56.465 58.88 21.712 78.454c-1.42.646-2.373 2.071-2.204 3.653.006 39.245 0 78.497 0 117.748a3.329 3.329 0 0 0 1.89 3.303c9.274 5.259 18.56 10.481 27.84 15.722 5.228 2.814 11.647 4.486 17.407 2.33 5.083-1.823 8.646-7.01 8.549-12.407.048-39.016-.024-78.038.036-117.048-.127-1.732 1.516-3.163 3.2-3 4.456-.03 8.918-.06 13.374.012 1.86-.042 3.14 1.823 2.91 3.568-.018 39.263.048 78.527-.03 117.79.012 10.464-4.287 21.85-13.966 26.97-11.924 6.177-26.662 4.867-38.442-1.056-10.198-5.09-19.93-11.097-29.947-16.55C5.368 215.886.555 208.357.604 200.466V81.497c-.073-7.74 4.504-15.197 11.29-18.85C46.768 42.966 81.636 23.27 116.504 3.58z" />

                <path d="M146.928 85.99c15.21-.979 31.493-.58 45.18 6.913 10.597 5.742 16.472 17.793 16.659 29.566-.296 1.588-1.956 2.464-3.472 2.355-4.413-.006-8.827.06-13.24-.03-1.872.072-2.96-1.654-3.195-3.309-1.268-5.633-4.34-11.212-9.642-13.929-8.139-4.075-17.576-3.87-26.451-3.785-6.479.344-13.446.905-18.935 4.715-4.214 2.886-5.494 8.712-3.99 13.404 1.418 3.369 5.307 4.456 8.489 5.458 18.33 4.794 37.754 4.317 55.734 10.626 7.444 2.572 14.726 7.572 17.274 15.366 3.333 10.446 1.872 22.932-5.56 31.318-6.027 6.901-14.805 10.657-23.56 12.697-11.647 2.597-23.734 2.663-35.562 1.51-11.122-1.268-22.696-4.19-31.282-11.768-7.342-6.375-10.928-16.308-10.572-25.895.085-1.619 1.697-2.748 3.248-2.615 4.444-.036 8.888-.048 13.332.006 1.775-.127 3.091 1.407 3.182 3.08.82 5.367 2.837 11 7.517 14.182 9.032 5.827 20.365 5.428 30.707 5.591 8.568-.38 18.186-.495 25.178-6.158 3.689-3.23 4.782-8.634 3.785-13.283-1.08-3.925-5.186-5.754-8.712-6.95-18.095-5.724-37.736-3.647-55.656-10.12-7.275-2.571-14.31-7.432-17.105-14.906-3.9-10.578-2.113-23.662 6.098-31.765 8.006-8.06 19.563-11.164 30.551-12.275z" />
              </g>
            </svg>
          </div>
          <p className="text-center text-2xl font-bold">Node.Js</p>  
          </div>
        
       
          <div data-aos='flip-right'>
          <div className="sm:w-32 sm:order-none order-first sm:h-32 h-20 w-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg width="100px" height="100px" viewBox="0 0 73 73" version="1.1">
              <title>databases-and-servers/databases/mongodb</title>
              <desc>Created with Sketch.</desc>
              <defs></defs>
              <g
                id="databases-and-servers/databases/mongodb"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  id="container"
                  transform="translate(2.000000, 2.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                  stroke="#134514"
                  strokeWidth="2"
                >
                  <rect
                    id="mask"
                    x="-1"
                    y="-1"
                    width="71"
                    height="71"
                    rx="14"
                  ></rect>
                </g>
                <g
                  id="Group"
                  transform="translate(25.000000, 11.000000)"
                  fillRule="nonzero"
                >
                  <path
                    d="M12.4944775,50.7282275 L11.1460449,50.2673438 C11.1460449,50.2673438 11.3107227,43.3929395 8.8434082,42.8996191 C7.19912598,40.9915674 9.10717773,-38.0181006 15.0277344,42.6362061 C15.0277344,42.6362061 12.9881543,43.6556396 12.6263623,45.3993701 C12.2314209,47.1099512 12.4944775,50.7282275 12.4944775,50.7282275 Z"
                    id="Shape"
                    fill="#A6A385"
                  ></path>
                  <path
                    d="M13.218418,44.0837305 C13.218418,44.0837305 25.0274512,36.320708 22.2639307,20.1698145 C19.5998584,8.42743652 13.3171533,4.57889648 12.6263623,3.0985791 C11.8699854,2.04599609 11.1460449,0.204243164 11.1460449,0.204243164 L11.6397217,32.8667529 C11.6397217,32.8999023 10.6199316,42.8664697 13.2187744,44.0840869"
                    id="Shape"
                    fill="#499D4A"
                  ></path>
                  <path
                    d="M10.4556104,44.5111084 C10.4556104,44.5111084 -0.629838867,36.9455566 0.0281591797,23.624126 C0.653007813,10.3023389 8.48161621,3.75657715 9.99472656,2.57246582 C10.9817236,1.51988281 11.0145166,1.12494141 11.080459,0.0723583984 C11.77125,1.55267578 11.6397217,22.209751 11.7381006,24.6435596 C12.0339502,34.0180713 11.2119873,42.7352979 10.4556104,44.5111084 Z"
                    id="Shape"
                    fill="#58AA50"
                  ></path>
                </g>
              </g>
            </svg>
          </div>
          <p className="text-center text-2xl font-bold">MongoDB</p>  
          </div>


          <div data-aos='flip-right'>
          <div className="sm:w-32 sm:h-32 h-20 w-20  inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
            <svg
              width="100px"
              height="100px"
              viewBox="0 0 256 256"
              version="1.1"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M251.172245,116.593517 L139.398753,4.82845302 C132.966433,-1.60948434 122.525852,-1.60948434 116.085106,4.82845302 L92.8753863,28.0381721 L122.317995,57.4807809 C129.16041,55.1690784 137.005593,56.7195763 142.460425,62.1744081 C147.940536,67.6629464 149.479799,75.5755422 147.111919,82.4404282 L175.487156,110.815665 C182.352042,108.450594 190.273064,109.98143 195.755985,115.472777 C203.418591,123.132574 203.418591,135.547794 195.755985,143.213209 C188.09057,150.878624 175.67535,150.878624 168.007126,143.213209 C162.243319,137.443783 160.81922,128.977839 163.737639,121.877008 L137.275245,95.4146135 L137.272436,165.052198 C139.140337,165.979126 140.904309,167.212221 142.460425,168.762719 C150.123031,176.422516 150.123031,188.837736 142.460425,196.508768 C134.79501,204.171375 122.374173,204.171375 114.719993,196.508768 C107.057387,188.837736 107.057387,176.422516 114.719993,168.762719 C116.613174,166.872347 118.804095,165.442631 121.141077,164.481996 L121.141077,94.1955625 C118.804095,93.2405457 116.615983,91.8192558 114.719993,89.9148396 C108.914052,84.1173254 107.518042,75.5980132 110.492639,68.4690928 L81.4713611,39.4421974 L4.83125614,116.076685 C-1.60949009,122.52024 -1.60949009,132.960821 4.83125614,139.398759 L116.604747,251.166631 C123.039876,257.604569 133.477648,257.604569 139.921203,251.166631 L251.172245,139.9184 C257.61018,133.477654 257.61018,123.031455 251.172245,116.593517"
                  fill="#DE4C36"
                ></path>
              </g>
            </svg>
          </div>
          <p className="text-center text-2xl font-bold">Git/GitHub</p>  
          </div>
      </div>
    </section>
  );
};

export default Skills;

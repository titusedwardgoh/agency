import Carousel from "./components/Carousel";
import { roboto } from "./layout";
import { CiBadgeDollar } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { CiCompass1 } from "react-icons/ci";
import { CiMicrochip } from "react-icons/ci";
import { CiHashtag } from "react-icons/ci";
import Projects from "./components/Projects";
import Clients from "./components/Clients";
import Image from "next/image"
import Reviews from "./components/Reviews";


export default function Home() {
  return (
    <div className="">
      <main className="bg-primary flex flex-col items-center p-5 gap-5">
        {/* Intro */}
        <div className="flex flex-col items-center text-center gap-3 mb-5 mt-20 w-[90vw] max-w-5xl">
          <p className="text-4xl text-secondary font-black capitalize sm: text-5xl md:text-6xl lg:text-7xl xl:text-8xl">We make brands shine & competitors envious</p>
          <p className="text-secondary font-bold sm:text-lg md:mt-5 lg:md-7 xl:mt-8">Creative digital marketing studio in New York City that makes brands thrive.</p>
        <div className="mt-10 w-[90vw] max-w-420 flex justify-center lg:mt-10">            
            <Carousel/>
          </div>
        </div>
        {/* About US */}
        <div className = "lg:flex lg:gap-25 lg:items-center lg:justify-center lg:mt-30">
        <div className="flex flex-col items-center text-center gap-5 mt-20 lg:mt-0 lg:order-2 lg:w-[35vw] lg:items-start">
          <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>About Us</p>
          <p className="text-secondary capitalize font-black text-3xl text-center md:text-5xl md:max-w-160 lg:text-6xl lg:text-left lg:pr-30">360° creative digital marketing studio</p>
          <p className="text-sm text-secondary text-md font-semibold text-center md:max-w-180 lg:text-left sm:font-bold md:text-lg lg:pr-4 sm:px-20 lg:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          <button className ="btn btn-primary border-2 border-secondary text-secondary text-xl rounded rounded-full py-1 hover:bg-secondary hover:text-primary lg:text-2xl lg:p-5">Learn More</button>      
        </div>
        <div className="my-10 relative mx-auto w-[90vw] h-80 md:h-180 lg:w-[40vw] overflow-hidden flex justify-center lg:order-1">
          <Image
          width={653}
          height={683}
          src="/home_sec2.jpeg"
          alt="picture with an A"
          className = "w-[90vw] h-80 md:h-180 object-cover transition-transform duration-2500 ease-out hover:scale-120"
          />
        </div>
        </div>
        {/* Our Services */}
        <div className = "lg:flex lg:items-center lg:justify-center lg:mt-30 lg:gap-25 ">
        <div className="flex flex-col items-center text-center gap-5 mt-20 lg:mt-0 lg:w-[35vw] lg:items-start">
          <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>our services</p>
          <p className="text-secondary capitalize font-black text-3xl text-center md:text-5xl md:max-w-160 lg:text-6xl lg:text-left lg:pr-30">custom & scalable marketing solutions</p>
          <p className="text-sm text-secondary text-md font-semibold text-center sm:font-bold md:max-w-180 lg:text-left md:text-lg lg:pr-4 sm:px-20 lg:px-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
          <button className ="btn btn-primary border-2 border-secondary text-secondary text-xl rounded rounded-full py-1 hover:bg-secondary hover:text-primary lg:text-2xl lg:p-5">All Services</button>      
        </div>
          <div className = "py-5 sm:flex flex-wrap justify-center lg:w-[40vw]">
            <div className="card bg-primary w-[90vw] sm:w-[45vw] lg:w-[20vw] border-2 border-[#e23125]">
              <figure className="px-10 pt-5">
                <CiBadgeDollar size="80" fill="#e23125"/>
              </figure>
              <div className="card-body items-center text-center px-8">
                <h2 className="card-title sm:text-3xl lg:text-4xl font-black text-secondary">Marketing</h2>
                <p className = "text-secondary sm:text-lg font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
                <div className="card-actions">
                  <button className="btn btn-primary border-none sm:text-lg lg:text-xl cursor-pointer hover: shadow-none hover:scale-85 transition-transform duration-800 hover:bg-primary sm:font-black text-secondary font-bold">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-primary w-[90vw] sm:w-[45vw] lg:w-[20vw] border-x-2 border-b-2 border-[#e23125] sm:border-t-2 sm:border-l-0">
              <figure className="px-10 pt-5">
                <CiInstagram size="80" fill="#e23125"/>
              </figure>
              <div className="card-body items-center text-center px-8">
                <h2 className="card-title sm:text-3xl lg:text-4xl font-black text-secondary">Creative</h2>
                <p className = "text-secondary sm:text-lg font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
                <div className="card-actions">
                  <button className="btn btn-primary border-none sm:text-lg lg:text-xl cursor-pointer hover: shadow-none hover:scale-85 transition-transform duration-800 hover:bg-primary sm:font-black text-secondary font-bold">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-primary w-[90vw] sm:w-[45vw] lg:w-[20vw] border-x-2 border-b-2 border-[#e23125]">
              <figure className="px-10 pt-5">
                <CiCompass1 size="80" fill="#e23125"/>
              </figure>
              <div className="card-body items-center text-center px-8">
                <h2 className="card-title sm:text-3xl lg:text-4xl font-black text-secondary">Strategy</h2>
                <p className = "text-secondary sm:text-lg font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
                <div className="card-actions">
                  <button className="btn btn-primary border-none sm:text-lg lg:text-xl cursor-pointer hover: shadow-none hover:scale-85 transition-transform duration-800 hover:bg-primary sm:font-black text-secondary font-bold">Learn More</button>
                </div>
              </div>
            </div>
            <div className="card bg-primary w-[90vw] sm:w-[45vw] lg:w-[20vw] border-x-2 border-b-2 border-[#e23125] sm:border-l-0">
              <figure className="px-10 pt-5">
                <CiMicrochip size="80" fill="#e23125"/>
              </figure>
              <div className="card-body items-center text-center px-8">
                <h2 className="card-title sm:text-3xl lg:text-4xl font-black text-secondary">Technology</h2>
                <p className = "text-secondary sm:text-lg font-medium">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur.</p>
                <div className="card-actions">
                  <button className="btn btn-primary border-none sm:text-lg lg:text-xl cursor-pointer hover: shadow-none hover:scale-85 transition-transform duration-800 hover:bg-primary sm:font-black text-secondary font-bold">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Get Inspired */}
        <div className="flex flex-col items-center text-center gap-5 mt-20 md:mt-15 md:lg:mt-30 md:gap-10">
          <div className="flex flex-col items-center text-center gap-5 md:mt-15 mt-20 lg:mt-0">
            <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>Get Inspired</p>
            <p className="text-secondary capitalize font-black text-3xl text-center md:text-5xl md:max-w-160 lg:text-6xl">Featured Work</p>
            <p className="text-sm text-secondary text-md font-semibold text-center sm:px-20 md:max-w-180 md:text-lg sm:font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim</p>
          </div>
          <Projects/>
          <button className ="btn btn-primary border-2 border-secondary text-secondary text-xl rounded rounded-full py-1 hover:bg-secondary hover:text-primary lg:text-2xl lg:p-5">All Projects</button>      
        </div>
        {/* Client Feedback */}
        <div className="flex flex-col items-center text-center gap-5 mt-20 md:mt-15 lg:flex-row lg:max-w-[85vw] lg:mx-auto lg:gap-0 lg:items-stretch lg:mt-30">
          <div className="flex flex-col items-center text-center gap-5 mt-20 md:mt-15 lg:mt-0 lg:w-[35vw] lg:items-start lg:text-left">
            <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg lg:text-left ${roboto.className}`}>Client Feedback</p>
            <p className="text-secondary capitalize font-black text-3xl text-center md:text-5xl md:max-w-160 lg:text-6xl lg:text-left lg:pr-30">don&rsquo;t just take our word for it</p>
          </div>
          <CiHashtag size="50" fill="#e23125" className="mt-5 lg:mt-0 "/>
          <div className="w-full lg:w-[40vw] lg:ml-auto">
            <Reviews/>
          </div>
        </div>

        <div className="pt-15 lg:mt-30">
          <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs ${roboto.className} md:text-lg`}>Just a few of our clients</p>
        </div>
        <div className="relative py-3 w-full h-full overflow-hidden bg-primary text-secondary border-2 border-[#e23125] xl:max-w-7xl px-3 md:px-20">
          <Clients />
        </div>
        <div className="flex flex-col items-center text-center gap-5 mt-20 md:mt-15 md:lg:mt-30 md:gap-10 md:mb-20">
          <div className="flex flex-col items-center text-center gap-5 md:mt-15 mt-20 lg:mt-0">
            <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>let’s talk</p>
            <p className="text-secondary capitalize font-black text-4xl text-center md:text-6xl md:max-w-250 lg:text-8xl">Your digital presence is about to take off</p>
            <p className="text-sm text-secondary text-md font-semibold text-center sm:px-20 md:max-w-180 md:text-lg sm:font-bold">Schedule a free consultation with our team and let’s make things happen!</p>
          </div>
          <button className ="btn btn-primary border-2 border-secondary text-secondary text-xl rounded rounded-full py-1 hover:bg-secondary hover:text-primary lg:text-2xl lg:p-5">Contact Us</button>      
        </div>
        <div className="divider divider-secondary"></div>
      </main>
      
    </div>
  );
}

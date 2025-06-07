"use client"

import Image from "next/image"
import React from "react"

export default function Footer (){

        const [email, setEmail] = React.useState("");

        const handleSubmit = (e) => {
            e.preventDefault(); // prevent page reload
            console.log("Submitted email:", email);
            // You can add your API call or logic here
        };

    return(
        <footer className="footer bg-primary text-base-content p-10 lg:flex lg:flex-col lg:pt-3 lg:gap-8 lg:items-center lg:text-center">
      <div className="mx-auto lg:flex lg:justify-between lg:w-full lg:max-w-[1800px]">
        {/* Logo + Description */}
        <div className="flex flex-col gap-5 mx-auto lg:w-[30vw]">
          <div className="w-full flex justify-center lg:justify-start">
                <Image
                    src="/logo.svg"
                    width={100}
                    height={27}
                    alt="logo"
                    className="mx-auto lg:mx-0"
                />
                </div>
                <p className="text-secondary text-center text-md font-semibold mb-3 max-w-150 mx-auto md:max-w-180 md:text-lg sm:font-bold lg:text-left">We’re a full-stack digital marketing studio based in the center of New York City. From strategy to implementation, we’re here to help make your brand shine.</p>
            </div>
            <div className="flex flex-row w-full mt-5 lg:w-[30vw] lg:max-w-150 lg:mt-0">
                <nav className="flex flex-col gap-2 w-1/2 lg:text-left">
                    <h6 className="text-secondary text-xl font-black md:text-2xl">Quick Links</h6>
                    <a className="link link-hover text-secondary font-bold text-md md:text-lg sm:font-bold">Home</a>
                    <a className="link link-hover text-secondary font-bold text-md md:text-lg sm:font-bold">Services</a>
                    <a className="link link-hover text-secondary font-bold text-md md:text-lg sm:font-bold">Work</a>
                    <a className="link link-hover text-secondary font-bold text-md md:text-lg sm:font-bold">About</a>
                </nav>
                <div className="w-1/2 lg:text-left">
                    <h6 className="text-secondary text-xl font-black md:text-2xl ">Contact Info</h6>
                    <p className="text-secondary font-bold text-md md:text-lg sm:font-bold mt-2">1890 W 52nd Street New York,</p>
                    <p className="text-secondary font-bold text-md md:text-lg sm:font-bold">New York 10019</p>
                    <p className="text-secondary font-bold text-md md:text-lg sm:font-bold">212-440-1919</p>
                    <p className="text-secondary font-bold text-md md:text-lg sm:font-bold">Mon-Fri 9am-6pm</p>
                </div>
            </div>
            <div className="w-full mx-auto flex flex-col justify-center gap-5 mt-5 lg:w-[30vw] lg:max-w-150 lg:mt-0 lg:mx-0">
                <div className="flex flex-col gap-5 justify-center">
                    <p className="capitalize font-black text-xl text-secondary mx-auto md:text-2xl text-center lg:mx-0 lg:text-left">join our Newsletter</p>
                    <p className = "text-secondary text-center text-md font-semibold md:text-lg lg:mx-0 lg:text-left">Sign up for our newsletter to enjoy free marketing tips, inspirations, and more.</p>    
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2 items-center md:flex-row md:justify-between md:gap-15 lg:gap-5">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address"
                        required
                        className="border-b-2 border-secondary text-secondary px-4 py-2 w-full md:text-lg"
                    />
                    <button
                        type="submit"
                        className="btn btn-primary border-2 border-secondary text-secondary text-xl rounded rounded-full py-1 hover:bg-secondary hover:text-primary w-full md:w-1/4 lg:h-full lg:rounded-4xl lg:leading-none lg:p-3"
                    >
                        Sign Me Up
                    </button>
                    </form>
            </div>
            </div>
            <div className="w-full mx-auto lg:max-w-[1800px]">
                <nav className="w-full flex flex-col items-center gap-2 lg:flex-row lg:justify-between">
                <h6 className="text-secondary text-md font-semibold md:text-lg">
                    © 2025 Younic. All Rights Reserved.
                </h6>
                <div className="grid grid-flow-col gap-4">
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="md:w-6 md:h-6"
                            fill="#e23125"
                            >
                            <path
                                d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="md:w-6 md:h-6"
                            fill="#e23125"
                            >
                            <path
                                d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                            </svg>
                        </a>
                        <a>
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="md:w-6 md:h-6"
                            fill="#e23125"
                            >
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                            </svg>
                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    )
}
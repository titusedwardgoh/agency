import Motion from "../components/Animations";
import { roboto } from "../layout";
import Link from "next/link"

export default function LetsTalk() {
    return(
        <>
        <div className="flex flex-col items-center text-center gap-5 mt-20 md:mt-15 lg:mt-30 md:gap-10 md:mb-15">
            <div className="flex flex-col items-center text-center gap-5 md:mt-15 mt-20 lg:mt-30 lg:mt-0">
                <Motion.Up>
                <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg ${roboto.className}`}>let’s talk</p>
                </Motion.Up>
                <p className="text-secondary capitalize font-black text-4xl text-center md:text-6xl md:max-w-250 lg:text-8xl">Your digital presence is about to take off</p>
                <p className="text-sm text-secondary text-md font-semibold text-center sm:px-20 md:max-w-180 md:text-lg sm:font-bold">Schedule a free consultation with our team and let’s make things happen!</p>
            </div>
            <Motion.Down>
                <Link href="/contact">
                    <button className ="btn btn-primary border-2 border-secondary text-secondary text-xl rounded rounded-full py-1 hover:bg-secondary hover:text-primary lg:text-2xl lg:p-5">Contact Us</button>      
                </Link>
            </Motion.Down>
        </div>
        {/* divider */}
        <div className="divider divider-secondary mt-20"></div>
        </>
    )
}
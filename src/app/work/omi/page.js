import { GoArrowLeft } from "react-icons/go"
import Image from "next/image"
import Link from "next/link"
import LetsTalk from "@/app/components/LetsTalk"
import workData from "@/app/data/workData"
import WorkCard from "@/app/components/WorkCard"

export default function omi(){
    return(
        <div className="bg-primary p-5 text-secondary md:px-10 mt-20 lg:pr-25">
        <div className = "lg:flex xl:max-w-[1800px] xl:mx-auto xl:mt-20">
            <div>
                <div className="text-lg text-secondary font-bold flex items-center w-[15vw] lg:text-xl xl:text-2xl">
                    <Link href="/work" className="flex items-center gap-1">
                        <GoArrowLeft />
                        <span>Back to All</span>
                    </Link>
                </div>
            </div>
            <div>
                <div className="bg-primary mt-15 text-secondary font-bold text-4xl lg:mt-0 lg:text-6xl lg:font-black xl:text-7xl">Omi</div>
                <div className="divider divider-secondary"></div>
                <div className="flex flex-col gap-10">
                    <div className = "flex flex-col gap-10 md:flex-row">
                    <div className="text-secondary flex flex-col gap-3 md:w-[30%]">
                        <div>
                            <p className="font-black text-lg lg:text-xl">Client</p>
                            <p className="font-medium lg:font-semibold text-lg">Omi Home Furnishings Manufacturing</p>
                        </div>
                        <div>
                            <p className="font-black text-lg lg:text-xl">Services</p>
                            <p className="font-medium lg:font-semibold text-lg">Digital Audit, Market Research, User Experience</p>
                        </div>
                        <div>
                            <p className="font-black text-xl lg:text-xl">Year</p>
                            <p className="font-medium lg:font-semibold text-lg">2022</p>
                        </div>
                    </div>
                    <div className="text-secondary font-medium text-base md:w-[70%] lg:text-lg lg:font-semibold">
                        <p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa.</p>
                    </div>
                    </div>
                    <div className="mt-10">
                        <Image
                        src="/Post_Omi_Img_1.jpg"
                        width={1133}
                        height={638}
                        alt="omi1"
                        />
                    </div>
                    <div className="mt-10 font-medium text-base lg:text-lg lg:font-semibold">
                        <p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div className="mt-10">
                        <Image
                        src="/Post_Omi_Img_2.png"
                        width={869}
                        height={638}
                        alt="omi2"
                        />
                    </div>
                    <div className="mt-10 font-medium text-base lg:text-lg lg:font-semibold">
                        <p>Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation. Ullamco laboris nisi ut aliquip ex ea commodo consequa. Duis aute irure dolor in reprehenderit in voluptate. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do</p>
                    </div>
                    <div className="mt-10">
                        <Image
                        src="/Post_Omi_Img_3.jpg"
                        width={1133}
                        height={638}
                        alt="omi3"
                        />
                    </div>
                    <div className="divider divider-secondary"></div>
                </div>
                <div>
                    <div className="bg-primary mt-15 text-secondary font-bold text-4xl text-center md:text-5xl lg:text-6xl">Some More Cool Projects</div>
                </div>
                <div className="md:flex mt-10">
                    <div className="md:w-1/2">
                        <WorkCard title = {workData[1].title} image={workData[1].src} description={workData[1].description}/>
                    </div>
                    <div className= "md:w-1/2">
                        <WorkCard title = {workData[2].title} image={workData[2].src} description={workData[2].description}/>
                    </div>
                </div>
            </div>
        </div>
            <LetsTalk />
        </div>
    )
}
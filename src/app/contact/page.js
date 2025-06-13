import ContactForm from "../components/ContactForm"
import { roboto } from "../layout";
import Motion from "../components/Animations/index";
import LetsTalk from "../components/LetsTalk";

export default function contact(){
    return(
        <div className="bg-primary flex flex-col items-center p-5 gap-5 ">
            {/* block1 */}
            <div className="flex flex-col items-center mt-20 w-[90vw]">
                <div className="flex flex-col items-center text-center gap-3  max-w-5xl">
                    <p className="text-5xl text-secondary font-black capitalize md:text-6xl lg:text-7xl xl:text-8xl">want to work together?</p>
                    <p className="text-secondary font-bold sm:text-lg lg:text-xl">Contact us, and let’s discover how we can help your organization become even greater.</p>
                </div>
            </div>
            {/* block2 */}
            <div className="md:flex md:w-[90vw] md:mt-20 lg:mt-35 md:mx-auto md:max-w-[1600px]">
                <div className = "mt-15 md:order-2 md:w-1/2 md:mt-0">
                    <p className="text-secondary capitalize font-black text-2xl md:text-3xl text-center md:text-left md:pl-10 ">Prefer we call you?</p>
                    <p className="text-sm text-secondary text-md font-semibold text-center md:text-lg sm:font-bold md:text-left md:pl-10 ">Fill out your details here and we’ll get back to you within 24 hours.</p>
                    <div className="mt-5">
                        <ContactForm/>
                    </div>
                </div>
            
                <div className="flex flex-col gap-10 md:order-1 md:w-1/2 mt-25 md:mt-0">
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className={`text-secondary font-bold sm:text-lg md:mt-0 ${roboto.className}`}>Younic HQ</p>
                        <p className={`text-secondary text-xs md:text-sm tracking-tighter lg:text-base ${roboto.className}`}>1890 W 52nd Street, New York, New York 10019</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>212-440-1919</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>Mon-Fri 9am-6pm</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className={`text-secondary font-bold sm:text-lg ${roboto.className}`}>New Business</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>new@yournicagency.com</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>212-115-5659</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className={`text-secondary font-bold sm:text-lg ${roboto.className}`}>Other Inquiries</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>info@younicagency.com</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>212-262-8365</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className={`text-secondary font-bold sm:text-lg ${roboto.className}`}>Join The Team</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>team@younicagency.com</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>212-664-3099</p>
                    </div>
                    <div className="flex flex-col items-center gap-2 md:items-start">
                        <p className={`text-secondary font-bold sm:text-lg ${roboto.className}`}>Press</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>press@younicagency.com</p>
                        <p className={`text-secondary text-xs md:text-sm lg:text-base ${roboto.className}`}>212-668-6257</p>
                    </div>
                </div>
            </div>
            {/* block3 */}
            <LetsTalk/>
        </div>
    )
}
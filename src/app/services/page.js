import { roboto } from "../layout";
import Image from "next/image";
import Motion from "../components/Animations/index";

export default function Services() {
  return (
    <div className="bg-primary flex flex-col items-center p-5 gap-3 md:px-10">

      {/* block1 */}
      <div className="flex flex-col items-center text-center mb-5 mt-10 w-full max-w-[1600px] px-5 mx-auto md:mt-20">
        <div className="relative w-full max-w-[1600px] h-60 md:h-[30vw] overflow-hidden flex items-center mx-auto">
          <Image
            src="/services_hero.jpg"
            width={1728}
            height={717}
            className="object-cover w-full h-full"
            alt="services hero"
          />
        </div>
        <Motion.Up>
          <p className={`text-secondary text-center uppercase tracking-[7px] font-medium text-xs md:text-lg mt-10 md:mt-15 ${roboto.className}`}>
            We’re here to help you
          </p>
        </Motion.Up>
        <p className="text-5xl text-secondary mb-30 font-black capitalize sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-5xl xl:text-8xl md:mb-15">
          Grow & stand out from the crowd
        </p>
        <div className="divider divider-secondary w-full"></div>
      </div>

      {/* block2 */}
      <div className="flex flex-col gap-5 mb-5 lg:flex-row w-full max-w-[1600px] px-5 mx-auto">
        <div className="flex flex-col gap-2 md:w-xl lg:w-1/2">
          <h1 className="text-secondary font-black text-4xl md:text-5xl lg:text-7xl lg:w-2/3">Marketing</h1>
          <p className="text-secondary text-base md:text-lg font-semibold lg:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
        </div>
        <div className="hidden md:divider md:divider-secondary lg:hidden"></div>
        <div className="flex flex-col gap-5 md:flex-row lg:w-1/2">
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-secondary font-black text-2xl md:text-3xl">PPC Management</h1>
              <p className="text-secondary text-base font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-secondary font-black text-2xl md:text-3xl">Content Creation</h1>
              <p className="text-secondary text-base font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-secondary font-black text-2xl md:text-3xl">Social Media Management</h1>
              <p className="text-secondary text-base font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 md:gap-10">
            <div className="flex flex-col gap-2">
              <h1 className="text-secondary font-black text-2xl md:text-3xl">SEO</h1>
              <p className="text-secondary text-base font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-secondary font-black text-2xl md:text-3xl">Affiliate Management</h1>
              <p className="text-secondary text-base font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="text-secondary font-black text-2xl md:text-3xl">Email Marketing</h1>
              <p className="text-secondary text-base font-semibold">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* bottom divider */}
      <div className="divider divider-secondary mt-20 w-full max-w-[1600px] mx-auto px-5"></div>

      {/* block3 */}
      <div className="w-full max-w-[1600px] px-5 mx-auto">
        Section 3
      </div>

      {/* block4 */}
      <div className="w-full max-w-[1600px] px-5 mx-auto">
        Section 4
      </div>

      {/* block5 */}
      <div className="w-full max-w-[1600px] px-5 mx-auto">
        Section 5
      </div>

      {/* block6 */}
      <div className="w-full max-w-[1600px] px-5 mx-auto">
        Section 6
      </div>
    </div>
  );
}

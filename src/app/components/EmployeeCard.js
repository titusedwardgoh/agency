import Image from "next/image"
import { roboto } from "../layout";

export default function EmployeeCard(props){
    return(
        <div className = "flex flex-col gap-1 mb-10 object-cover">
            <Image
            src={props.image}
            alt={`${props.title}-image`}
            width={props.width}
            height={props.height}
            className="object-cover w-[90vw] h-[50vw] md:w-full md:h-full"
            />
            <p className={`text-secondary text-center uppercase tracking-[7px] pt-10 font-bold text-xs lg:text-base ${roboto.className}`}>{props.name}</p>
            <p className="text-sm text-secondary font-semibold text-center sm:font-bold lg:text-base">{props.title}</p>
        </div>
    )
}
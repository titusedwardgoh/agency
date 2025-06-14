import Link from "next/link"
import Image from "next/image"
import { roboto } from "../layout";

export default function WorkCard(props){
    return(
        <div className = "flex flex-col gap-1 mb-20">
            <Link 
            href={`/work/${props.title}`}
            className = "flex flex-col gap-7"
            >
                <Image
                src={props.image}
                alt={`${props.title}-image`}
                width={863}
                height={995}
                className="object-cover transition duration-300 hover:brightness-120"
                />
                <p className={`text-secondary text-center uppercase tracking-[7px] font-bold text-xs lg:text-base ${roboto.className}`}>{props.title}</p>
            </Link>
            <p className="text-sm text-secondary font-semibold text-center sm:font-bold lg:text-base">{props.description}</p>
        </div>
    )
}
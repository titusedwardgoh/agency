import { GoArrowLeft } from "react-icons/go"
import Image from "next/image"
import Link from "next/link"
import LetsTalk from "@/app/components/LetsTalk"
import workData from "@/app/data/workData"
import WorkCard from "@/app/components/WorkCard"
import { notFound } from "next/navigation";

function getRandomProjects(projects, count) {
    const shuffled = [...projects].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

export default async function WorkPage({ params }) {
    const project = workData.find((item) => item.slug === params.slug);
    if (!project) return notFound();

    const otherProjects = workData.filter((item) => item.slug !== params.slug);
    const recommendedProjects = getRandomProjects(otherProjects, 2);

    return (
        <div className="bg-primary sm:px-10 p-5 text-secondary mt-20 lg:pr-25">
            <div className="lg:flex xl:max-w-[1800px] xl:mx-auto xl:mt-20">
                <div>
                    <div className="text-lg text-secondary font-bold flex items-center sm:w-[15vw] lg:text-xl xl:text-2xl">
                        <Link href="/work" className="flex items-center gap-1">
                            <GoArrowLeft />
                            <span>Back to All</span>
                        </Link>
                    </div>
                </div>
                <div>
                    <div className="bg-primary mt-15 text-secondary font-bold text-4xl lg:mt-0 lg:text-6xl lg:font-black xl:text-7xl">
                        {project.title}
                    </div>
                    <div className="divider divider-secondary"></div>
                    <div className="flex flex-col gap-10">
                        <div className="flex flex-col gap-10 md:flex-row">
                            <div className="text-secondary flex flex-col gap-3 md:w-[30%]">
                                <div>
                                    <p className="font-black text-lg lg:text-xl">Client</p>
                                    <p className="font-medium lg:font-semibold text-lg">{project.client}</p>
                                </div>
                                <div>
                                    <p className="font-black text-lg lg:text-xl">Services</p>
                                    <p className="font-medium lg:font-semibold text-lg">{project.description}</p>
                                </div>
                                <div>
                                    <p className="font-black text-xl lg:text-xl">Year</p>
                                    <p className="font-medium lg:font-semibold text-lg">{project.year}</p>
                                </div>
                            </div>
                            {project.body[0] !== "nil" && (
                                <div className="mt-10 font-medium text-base lg:text-lg lg:font-semibold">
                                    <p>{project.body[0]}</p>
                                </div>
                            )}
                        </div>

                        {project.images[0].url !== "nil" && (
                            <div className="mt-10">
                                <Image
                                    src={project.images[0].url}
                                    width={project.images[0].width}
                                    height={project.images[0].height}
                                    alt={`${project.slug}1`}
                                />
                            </div>
                        )}

                        {project.body[1] !== "nil" && (
                            <div className="mt-10 font-medium text-base lg:text-lg lg:font-semibold">
                                <p>{project.body[1]}</p>
                            </div>
                        )}

                        {project.images[1].url !== "nil" && (
                            <div className="mt-10">
                                <Image
                                    src={project.images[1].url}
                                    width={project.images[1].width}
                                    height={project.images[1].height}
                                    alt={`${project.slug}2`}
                                />
                            </div>
                        )}

                        {project.body[2] !== "nil" && (
                            <div className="mt-10 font-medium text-base lg:text-lg lg:font-semibold">
                                <p>{project.body[2]}</p>
                            </div>
                        )}

                        {project.images[2].url !== "nil" && (
                            <div className="mt-10">
                                <Image
                                    src={project.images[2].url}
                                    width={project.images[2].width}
                                    height={project.images[2].height}
                                    alt={`${project.slug}3`}
                                />
                            </div>
                        )}

                        <div className="divider divider-secondary"></div>
                    </div>

                    <div>
                        <div className="bg-primary mt-15 text-secondary font-bold text-4xl text-center md:text-5xl lg:text-6xl">
                            Some More Cool Projects
                        </div>
                    </div>

                    <div className="md:flex mt-10">
                        {recommendedProjects.map((proj) => (
                            <div key={proj.slug} className="md:w-1/2">
                                <WorkCard
                                    title={proj.title}
                                    image={proj.src.url}
                                    description={proj.description}
                                    slug={proj.slug}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <LetsTalk />
        </div>
    );
}

import { SiDaisyui, SiGithubpages, SiNextdotjs } from "solid-icons/si";
import { Project } from "./Project";
import { FaBrandsReact } from "solid-icons/fa";
import { BiLogosFirebase, BiLogosTailwindCss, BiLogosTypescript } from "solid-icons/bi";
import { TbBrandSolidjs } from "solid-icons/tb";

import ProgrammerSvg from "../assets/programmer.svg?component-solid";

import PromptoImg from "../assets/prompto.png";

export function ProjectSection() {
    return (
        <section
            id="projects"
            class="w-full min-h-screen flex flex-col justify-center px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 py-8"
        >
            <h1 class="text-4xl sm:text-5xl mb-2 sm:mb-4">My Projects</h1>
            <p class="mb-4 text-md sm:text-lg text-neutral-content">
                A highlight of some of the things I've worked on lately.
            </p>
            <div class="flex flex-col gap-4 justify-between">
                <Project
                    name="Prompto"
                    description="A worlde inspired guessing game where users try to figure out the prompt that generated the image."
                    image={
                        <img src={PromptoImg} class="w-full h-full object-cover rounded-xl border border-base-300" />
                    }
                    liveURL="https://prompto.today"
                    githubURL="https://github.com/Vik70/prompto"
                    learnings={["Foo", "Bar", "Baz"]}
                    technologies={[
                        <>
                            <SiNextdotjs class="text-white" />
                            Next.js
                        </>,

                        <>
                            <FaBrandsReact class="text-cyan-400" />
                            React
                        </>,
                        <>
                            <BiLogosTailwindCss class="text-cyan-400" />
                            Tailwind CSS
                        </>,
                        <>
                            <BiLogosFirebase class="text-orange-400" />
                            Firebase
                        </>,
                        <>
                            <BiLogosTypescript class="text-blue-400" />
                            TypeScript
                        </>,
                    ]}
                />
                <Project
                    name="My Portfolio"
                    description="The site you're on right now!"
                    image={<ProgrammerSvg class="w-full h-full rounded-xl border border-base-300" />}
                    githubURL="https://github.com/willparsons/willparsons.github.io"
                    learnings={["Foo", "Bar", "Baz"]}
                    technologies={[
                        <>
                            <TbBrandSolidjs class="text-blue-400" />
                            Solid.js
                        </>,
                        <>
                            <BiLogosTailwindCss class="text-cyan-400" />
                            Tailwind CSS
                        </>,
                        <>
                            <BiLogosTypescript class="text-blue-400" />
                            TypeScript
                        </>,

                        <>
                            <SiDaisyui size={70} />
                        </>,

                        <>
                            <SiGithubpages size={70} />
                        </>,
                    ]}
                />
            </div>
        </section>
    );
}

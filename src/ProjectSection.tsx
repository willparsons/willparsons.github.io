import { SiDaisyui, SiNextdotjs } from "solid-icons/si";
import { Project } from "./Project";
import { FaBrandsReact } from "solid-icons/fa";
import { BiLogosFirebase, BiLogosTailwindCss, BiLogosTypescript } from "solid-icons/bi";
import { TbBrandSolidjs } from "solid-icons/tb";

export function ProjectSection() {
    return (
        <section id="projects" class="w-full min-h-screen flex flex-col justify-center lg:px-64">
            <h1 class="text-6xl mb-4">My Projects</h1>
            <p class="mb-8 text-lg text-gray-400">A highlight of some of the things I've worked on lately.</p>
            <div class="flex flex-col gap-4 justify-between">
                <Project
                    name="Prompto"
                    description="A worlde inspired guessing game where users try to figure out the prompt that generated the image."
                    learnings={["Foo", "Bar", "Baz"]}
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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
                    learnings={["Foo", "Bar", "Baz"]}
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
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

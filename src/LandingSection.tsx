import { AiOutlineLinkedin, AiOutlineGithub } from "solid-icons/ai";

import Background from "../assets/background.svg";

export function LandingSection() {
    return (
        <section
            id="landing"
            class="w-full min-h-screen flex flex-row justify-center items-center px-4 sm:px-4 md:px-8 lg:px-32 xl:px-64 2xl:px-128 bg-cover bg-right sm:bg-center"
            style={{ "background-image": `url(${Background})` }}
        >
            <div class="absolute inset-0 [background:radial-gradient(200%_175%_at_50%_10%,#0000_40%,#000_70%)]" />

            <div class="w-full z-10">
                <div class="flex mb-4 justify-between">
                    <div class="flex gap-4 items-center">
                        <span class="badge badge-outline badge-secondary badge-md sm:badge-xl">JS/TS</span>
                        <span class="badge badge-outline badge-secondary badge-md sm:badge-xl">Python</span>
                        <span class="badge badge-outline badge-secondary badge-md sm:badge-xl">React</span>
                    </div>

                    <div class="flex gap-4">
                        <a href="https://github.com/willparsons" title="My Github page" rel="noopener" target="_blank">
                            <button class="btn btn-square btn-soft" aria-label="Github button">
                                <AiOutlineGithub class="w-full h-full" />
                            </button>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/william-p-h/"
                            title="My Linkedin account"
                            rel="noopener"
                            target="_blank"
                        >
                            <button class="btn btn-square btn-soft" aria-label="Linkedin button">
                                <AiOutlineLinkedin class="w-full h-full" />
                            </button>
                        </a>
                    </div>
                </div>

                <h1 class="text-5xl sm:text-7xl">
                    Hi, I'm <span class="text-primary">William</span>.
                </h1>
                <h1 class="text-xl sm:text-3xl py-1 bg-gradient-to-r from-green-500 to-indigo-400 inline-block text-transparent bg-clip-text">
                    Fullstack Software Engineer
                </h1>

                <p class="text-lg mt-4 mb-8">
                    I'm a full-stack web developer with a focus on delivering high-performance, user-centered solutions.
                    I’m passionate about optimizing both front-end and back-end experiences, ensuring seamless and
                    intuitive interactions.
                </p>

                <div class="flex flex-row justify-center sm:justify-normal gap-4">
                    <a href="#projects">
                        <button class="btn w-32 btn-outline btn-secondary">Projects</button>
                    </a>
                    <a href="mailto:williamparsons62@gmail.com">
                        <button class="btn w-32 btn-primary">Get In Touch</button>
                    </a>
                </div>
            </div>
        </section>
    );
}

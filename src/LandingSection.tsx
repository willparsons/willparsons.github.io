import { AiOutlineLinkedin, AiOutlineGithub } from "solid-icons/ai";

export function LandingSection() {
    return (
        <section id="landing" class="w-full min-h-screen flex flex-row justify-center items-center lg:px-64">
            <div class="w-full">
                <div class="flex mb-4 justify-between">
                    <div class="flex gap-4 items-center">
                        <span class="badge badge-soft badge-lg">JS/TS</span>
                        <span class="badge badge-soft badge-lg">Python</span>
                        <span class="badge badge-soft badge-lg">React</span>
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

                <h1 class="text-7xl">
                    Hi, I'm <span class="text-secondary">William</span>.
                </h1>
                <h1 class="text-3xl text-neutral-400">Fullstack Software Engineer</h1>

                <p class="text-lg my-8">
                    I'm a full-stack web developer with a focus on delivering high-performance, user-centered solutions.
                    I’m passionate about optimizing both front-end and back-end experiences, ensuring seamless and
                    intuitive interactions. With every project, I aim to create fast, responsive web applications that
                    elevate the overall user experience.
                </p>

                <div class="flex flex-row gap-4">
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

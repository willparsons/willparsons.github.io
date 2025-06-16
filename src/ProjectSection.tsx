import { Project } from "./Project";

export function ProjectSection() {
    return (
        <section id="projects" class="w-full min-h-screen flex flex-col justify-center lg:px-32">
            <h1 class="text-6xl mb-4">My Projects</h1>
            <p class="mb-8 text-lg text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tellus velit, lacinia eleifend
                pharetra sit amet, facilisis ac nisl. Phasellus.{" "}
            </p>
            <div class="flex gap-4 justify-between">
                <Project
                    name="Some project"
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                />
                <Project
                    name="Another project"
                    image="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                />
            </div>
        </section>
    );
}

import { For, JSXElement } from "solid-js";

export type ProjectProps = {
    name: string;
    description: string;
    image: JSXElement;
    githubURL: string;
    liveURL?: string;
    learnings: string[];
    technologies: JSXElement[];
};

export function Project(props: ProjectProps) {
    return (
        <div class="flex flex-col sm:flex-row gap-4 border border-base-300 bg-base-200 rounded-2xl px-4 py-4 text-base-content">
            <div class="h-64 sm:h-96 w-full sm:w-1/2 flex items-center">{props.image}</div>

            <div class="w-full sm:w-1/2 flex flex-col justify-between gap-4">
                <div>
                    <h1 class="text-3xl sm:text-4xl font-semibold sm:mb-2">{props.name}</h1>
                    <p class="text-neutral-content text-base sm:text-md lg:text-lg">{props.description}</p>
                </div>

                {/* Hiding this for now since I might bring it back */}
                {/* <ul class="list-inside list-none my-8"> */}
                {/*     <For each={props.learnings}> */}
                {/*         {(item) => ( */}
                {/*             <li class="flex items-center gap-2"> */}
                {/*                 <AiOutlineStar size={20} class="text-purple-300" /> <span>{item}</span> */}
                {/*             </li> */}
                {/*         )} */}
                {/*     </For> */}
                {/* </ul> */}

                <div class="flex flex-wrap gap-2">
                    <For each={props.technologies}>
                        {(item) => <div class="badge badge-md sm:badge-xl">{item}</div>}
                    </For>
                </div>

                <div class="flex gap-2 w-full items-end ">
                    <a href={props.githubURL}>
                        <button class="btn btn-primary btn-soft">GitHub</button>
                    </a>
                    {props.liveURL && (
                        <a href={props.liveURL}>
                            <button class="btn btn-accent">Live demo</button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
}

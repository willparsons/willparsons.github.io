import { For, JSXElement } from "solid-js";

export type ProjectProps = {
    name: string;
    description: string;
    image: string;
    githubURL: string;
    liveURL?: string;
    learnings: string[];
    technologies: JSXElement[];
};

export function Project(props: ProjectProps) {
    return (
        <div class="flex gap-4 border border-neutral-900 bg-neutral-900/20 rounded-2xl px-4 py-4">
            <div class="h-96 flex items-end skeleton flex-grow">
                <div class="w-full px-8 py-4 bg-black/50 backdrop-blur-xl rounded-b-2xl">
                    <p>{props.name}</p>
                </div>
            </div>

            <div class="w-96 flex flex-col justify-normal">
                <div>
                    <h1 class="text-4xl font-bold mb-2">{props.name}</h1>
                    <p class="text-neutral-400 mb-12">{props.description}</p>
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
                    <For each={props.technologies}>{(item) => <div class="badge badge-xl">{item}</div>}</For>
                </div>

                <div class="flex gap-2 w-full flex-grow items-end ">
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

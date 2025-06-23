import { AiOutlineStar } from "solid-icons/ai";
import { For, JSXElement } from "solid-js";

export type ProjectProps = {
    name: string;
    description: string;
    image: string;
    learnings: string[];
    technologies: JSXElement[];
};

export function Project(props: ProjectProps) {
    return (
        <div class="flex flex-row gap-4">
            <div class="h-96 flex items-end skeleton flex-grow">
                <div class="w-full px-8 py-4 bg-black/50 backdrop-blur-xl rounded-b-2xl">
                    <p>{props.name}</p>
                </div>
            </div>

            <div class="w-96">
                <h1 class="text-4xl font-bold">{props.name}</h1>

                <p class="text-gray-400">{props.description}</p>

                <ul class="list-inside list-none my-8">
                    <For each={props.learnings}>
                        {(item) => (
                            <li class="flex items-center gap-2">
                                <AiOutlineStar size={20} class="text-purple-300" /> <span>{item}</span>
                            </li>
                        )}
                    </For>
                </ul>

                <div class="flex flex-wrap gap-2">
                    <For each={props.technologies}>{(item) => <div class="badge badge-xl">{item}</div>}</For>
                </div>
            </div>
        </div>
    );
}

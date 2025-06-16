export function Project(props: { name: string; image: string }) {
    return (
        <div class={`flex items-end rounded-2xl bg-[url(${props.image})] w-96 h-96 bg-cover flex-grow`}>
            <div class="w-full px-8 py-4 bg-black/50 backdrop-blur-xl rounded-b-2xl">
                <p>{props.name}</p>
            </div>
        </div>
    );
}

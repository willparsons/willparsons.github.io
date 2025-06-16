export function Project(props: { name: string; image: string }) {
    return (
        <div class="h-96 flex items-end skeleton flex-grow">
            <div class="w-full px-8 py-4 bg-black/50 backdrop-blur-xl rounded-b-2xl">
                <p>{props.name}</p>
            </div>
        </div>
    );
}

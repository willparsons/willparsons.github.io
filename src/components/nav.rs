use leptos::*;
use leptos_router::A;

#[component]
pub fn Nav() -> impl IntoView {
    view! {
        <nav class="h-16 flex items-center justify-between mx-32">
            <p>icon</p>

            <div class="flex gap-8">
                <A href="/">home</A>
                <A href="/about">about</A>
            </div>
        </nav>
    }
}


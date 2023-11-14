use leptos::*;

use crate::components::nav::Nav;

#[component]
pub fn App() -> impl IntoView {
    view! {
        <div class="h-full text-gray-200 flex flex-col">
            <Nav/>
            <main class="h-full">
                <div class="container mx-auto mt-40 text-center">
                    <h1 class="font-bold sm:text-6xl">"Hero Heading"</h1>
                    <p class="text-lg mt-4">"Hero subheading"</p>
                </div>
            </main>
        </div>
    }
}


use leptos::{component, view, IntoView};

#[component]
pub fn Home() -> impl IntoView {
    view! {
        <h1 class="font-bold sm:text-6xl">"Hero Heading"</h1>
        <p class="text-lg mt-4">"Hero subheading"</p>
    }
}


use leptos::*;

#[component]
pub fn Nav() -> impl IntoView {
    view! {
        <nav class="h-16 flex items-center justify-between mx-32">
            <p>icon</p>

            <div class="flex gap-8">
                <p>route</p>
                <p>route</p>
                <p>route</p>
            </div>
        </nav>
    }
}


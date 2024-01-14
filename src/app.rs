use leptos::*;
use leptos_router::{Route, Router, Routes};

use crate::{
    components::nav::Nav,
    routes::{about::About, home::Home},
};

#[component]
pub fn App() -> impl IntoView {
    view! {
        <Router>
            <div class="h-full text-gray-200 flex flex-col">
                <Nav/>
                <main class="h-full">
                    <div class="container mx-auto mt-40 text-center">
                        <Routes>
                            <Route path="/" view=Home/>
                            <Route path="/about" view=About/>
                        </Routes>
                    </div>
                </main>
            </div>
        </Router>
    }
}


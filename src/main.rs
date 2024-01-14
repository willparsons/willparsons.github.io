mod app;
mod components;
mod routes;

use leptos::*;

use app::App;

fn main() {
    mount_to_body(|| view! { <App/> })
}


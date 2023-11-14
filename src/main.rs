mod app;
mod components;

use leptos::*;

use app::App;

fn main() {
    mount_to_body(|| view! { <App/> })
}


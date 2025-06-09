export function App() {
  return (
    <div class="h-full container m-auto text-gray-50">
      <div class="w-full h-full px-24 flex items-center">
        <div class="w-1/2">
          <div class="flex gap-4">
            <span class="badge badge-soft">JS/TS</span>
            <span class="badge badge-soft">Python</span>
            <span class="badge badge-soft">React</span>
          </div>

          <h1 class="text-8xl">Hi, I'm<br /><span class="text-indigo-400">William</span>.</h1>

          <p class="text-lg mt-4 mb-4">An experienced full-stack website developer with a passion for crafting unique digital experiences.</p>

          <div class="flex flex-row gap-4">
            <button class="btn w-32 btn-primary">Get In Contact</button>
            <button class="btn w-32 btn-outline btn-secondary">Projects</button>
          </div>
        </div>
        <div class="w-1/2">
          <img class="ring-2 ring-gray-300/50 w-full rounded-2xl " src="https://www.freevector.com/uploads/vector/preview/4791/FreeVector-Geometric-Vector-Pattern.jpg" />
        </div>
      </div>
    </div>
  );
};

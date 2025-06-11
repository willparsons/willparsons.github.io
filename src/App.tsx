import { AiOutlineLinkedin, AiOutlineGithub } from 'solid-icons/ai'

export function App() {
  return (
    <div class="h-full container m-auto text-gray-50">
      <div class="w-full h-full flex flex-row justify-center items-center lg:px-64">
        <div class="w-full">
          <div class="flex mb-4 justify-between">
            <div class="flex gap-4">
              <span class="badge badge-soft">JS/TS</span>
              <span class="badge badge-soft">Python</span>
              <span class="badge badge-soft">React</span>
            </div>

            <div class="flex gap-4">
              <a href="https://github.com/willparsons" title="My Github page" rel="noopener" target="_blank">
                <button class="btn btn-square btn-soft">
                  <AiOutlineGithub class="w-full h-full" />
                </button>
              </a>
              <a href="https://www.linkedin.com/in/william-p-h/" title="My Linkedin account" rel="noopener" target="_blank">
                <button class="btn btn-square btn-soft">
                  <AiOutlineLinkedin class="w-full h-full" />
                </button>
              </a>
            </div>
          </div>

          <h1 class="text-7xl">Hi, I'm <span class="text-purple-300">William</span>.</h1>
          <h1 class="text-4xl text-gray-400">Fullstack Software Engineer</h1>

          <p class="text-lg my-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur a varius sem. Ut accumsan eu sem vel dignissim. Maecenas vitae neque nisi. Donec a ligula lacus. Praesent eget urna eget nulla sagittis dictum ut eget odio. Donec quis efficitur elit, nec pretium eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>

          <div class="flex flex-row gap-4">
            <button class="btn w-32 btn-outline btn-secondary">Projects</button>
            <button class="btn w-32 btn-primary">Get In Touch</button>
          </div>
        </div>
      </div>
    </div>
  );
};

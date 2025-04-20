export default function Introduction() {
  return (
    <div class="grid place-items-center h-screen">
      <div class="mx-auto flex flex-col sm:flex-row max-w-lg items-center bg-pink-500 gap-x-4 rounded-xl p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 ">
        <img
          class="size-40 shrink-0"
          src="https://i.imgur.com/MK3eW3Am.jpg"
          alt="Katherine Johnson"
        />
        <div>
          <div class="text-xl font-medium text-white dark:text-white">
            Nidhi Singh Bhadoria
          </div>
          <p class="p-x-4 text-gray-500 text-white text-justify">
            Short Bio : I have completed my BCA. I have one year experience in
            HTML, CSS and JAVASCRIPT. Now i want to learn react.js. Its great
            oppertunity for me if you give me chance for this internship. Thank
            you
          </p>

          <span class="text-xl p-x-4 font-medium text-white dark:text-white">Hobbies </span>
          <ol class="font-medium text-white dark:text-gray-400">
            <li>Love To Learn New things</li>
            <li> Improve myself day to day </li>
            <li> Sdooko</li>
          </ol>
        </div>
      </div>
    </div>
  );
}

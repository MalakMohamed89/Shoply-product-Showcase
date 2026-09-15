import { Flash } from "iconsax-react";

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 py-4">
      <div className="mx-auto w-[90%] px-4">

        {/* Upper */}
        <div className="block w-full items-center justify-between border-b border-gray-300 pb-8 pt-6 md:flex">

          <div className="flex items-center gap-3 pb-3">
            <div className="w-fit rounded-md bg-[#432DD7] p-1.5 font-bold">
              <Flash size="12" color="white" />
            </div>

            <span className="text-md font-bold">
              Shoply
            </span>
          </div>

<ul className="mb-0 flex items-center gap-4 text-gray-400">
  <li className="cursor-pointer transition-all duration-300 hover:text-gray-800">
    <span className="text-sm">Privacy</span>
  </li>

  <li className="cursor-pointer transition-all duration-300 hover:text-gray-800">
    <span className="text-sm">Terms</span>
  </li>

  <li className="cursor-pointer transition-all duration-300 hover:text-gray-800">
    <span className="text-sm">Careers</span>
  </li>

  <li className="cursor-pointer transition-all duration-300 hover:text-gray-800">
    <span className="text-sm">Support</span>
  </li>
</ul>
        </div>

        {/* Lower */}
        <div className="flex w-full flex-col items-center justify-between pb-6 pt-4 md:flex-row">

          <p className="mb-0 text-sm text-gray-400">
            © 2026 Shoply, Inc. All rights reserved.
          </p>

          <p className="mb-0 text-sm text-gray-300">
            Built with React + Vite + Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}
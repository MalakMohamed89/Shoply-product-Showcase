import { Flash } from "iconsax-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 w-full border-b border-gray-300 bg-white py-4">
      <div className="mx-auto flex w-[90%] items-center justify-between px-4">

        {/* Left */}
        <div className="flex items-center gap-2">
          <div className="w-fit rounded-md bg-[#432DD7] p-1.5 text-white">
            <Flash size="16" color="white" />
          </div>

          <span className="text-lg font-bold">
            Shoply
          </span>
        </div>

        {/* Middle */}
        <div className="hidden md:block">
          <ul className="mb-0 flex items-center gap-4 text-gray-500 transition-all duration-300">
            
            <li className="cursor-pointer hover:text-black">
              Products
            </li>

            <li className="cursor-pointer hover:text-black">
              About
            </li>

            <li className="cursor-pointer hover:text-black">
              Blog
            </li>

            <li className="cursor-pointer hover:text-black">
              Contact
            </li>

          </ul>
        </div>

        {/* Right */}
        <div>
          <button
            className="
              rounded-[10px]
              border-none
              bg-[#432DD7]
              px-4.5
              pb-2
              pt-1
              text-white
              transition-all
              duration-300
              hover:bg-[#3522ad]
            "
          >
            Sign in
          </button>
        </div>

      </div>
    </nav>
  );
}
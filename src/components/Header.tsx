import { Icon } from "@iconify/react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white px-4 py-4 flex justify-between items-center sticky top-0 z-50">
      {/* Logo Section */}
      <div className="flex gap-2 items-center">
        <div className="text-4xl">
          <Icon icon="tabler:plant-2" />
        </div>
        <div className="text-3xl">Verdant</div>
      </div>

      {/* Hamburger Menu Button (Visible on Mobile) */}
      <button
        className="lg:hidden text-2xl focus:outline-none"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <Icon icon={isMenuOpen ? "lineicons:close" : "lineicons:menu"} />
      </button>

      {/* Navigation Menu */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 transition-all duration-300`}
      >
        <ul className="flex flex-col lg:flex-row gap-4 font-light">
          <li>
            <a
              href="#"
              className="flex gap-1 items-center bg-[#F1F1F1] px-4 py-1 rounded-full hover:bg-green4 transition-all duration-500"
            >
              <Icon icon="lineicons:home-2" className="text-lg" />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center bg-[#F1F1F1] px-4 py-1 rounded-full hover:bg-green4 transition-all duration-500"
            >
              <Icon icon="lineicons:leaf-1" className="text-lg" />
              <span>How It Works</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center bg-[#F1F1F1] px-4 py-1 rounded-full hover:bg-green4 transition-all duration-500"
            >
              <Icon icon="lineicons:bulb-2" className="text-lg" />
              <span>Features</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center bg-[#F1F1F1] px-4 py-1 rounded-full hover:bg-green4 transition-all duration-500"
            >
              <Icon icon="lineicons:comment-1-text" className="text-lg" />
              <span>Testimonials</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex gap-1 items-center bg-[#F1F1F1] px-4 py-1 rounded-full hover:bg-green4 transition-all duration-500"
            >
              <Icon icon="lineicons:book-1" className="text-lg" />
              <span>Blogs</span>
            </a>
          </li>
        </ul>
      </nav>

      {/* CTA Button (Hidden on small screens) */}
      <div className="hidden xl:flex gap-2 px-4 py-1 bg-green2 text-white items-center rounded-full">
        <span>Become a client</span>
        <Icon icon="icon-park-outline:dot" className="text-base" />
      </div>
    </header>
  );
};
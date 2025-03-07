import { Icon } from "@iconify/react/dist/iconify.js";

export const Footer = () => {
    return (
        <footer className="w-full bg-white px-4 py-4 flex justify-between items-center sticky top-0 z-50 mt-8 border-t border-myBlack">
            <div className="flex gap-2 items-center">
                <div className="text-4xl">
                    <Icon icon="tabler:plant-2" />
                </div>
                <div className="text-3xl">Verdant</div>
            </div>
            
                  {/* Navigation Menu */}
                  <nav
                    className={`lg:block absolute lg:static top-16 left-0 w-full lg:w-auto bg-white lg:bg-transparent p-4 lg:p-0 transition-all duration-300`}
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
                  <div className="flex gap-2 px-4 py-1 text-myBlack items-center rounded-full">
                    <Icon icon="lineicons:instagram" className="text-2xl" />
                    <Icon icon="lineicons:facebook" className="text-2xl" />
                    <Icon icon="lineicons:tiktok" className="text-2xl" />
                  </div>
        </footer>
    );
}
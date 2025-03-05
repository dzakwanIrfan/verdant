import { Icon } from "@iconify/react/dist/iconify.js";

export const Hero = () => {
    return (
        <section className="mx-4 text-myBlack">
            <div className="flex lg:flex-row flex-col w-full lg:h-[400px] justify-between items-start gap-4 overflow-hidden">
                <div className="flex flex-col lg:space-y-0 space-y-16 justify-between items-center text-center p-12 bg-green4 rounded-xl lg:w-1/2 w-full h-full">
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col space-y-4 justify-center items-center">
                            <div className="text-5xl">
                                <Icon icon="tabler:plant-2" />
                            </div>
                            <div className="sm:text-6xl text-5xl text-center">
                                Fresh, Local, Sustainable
                            </div>
                        </div>
                        <p>Connecting you with farmers who care about quality and the environment.</p>
                    </div>
                    <button className="flex space-x-2 items-center bg-green2 rounded-full px-4 py-1 text-white">
                        <span>Start Shopping</span>
                        <div className="text-2xl">
                            <Icon icon="lineicons:cart-2" />
                        </div>
                    </button>
                </div>
                <div className="flex flex-col space-y-4 justify-between items-center lg:w-1/2 w-full h-full">
                    <div className="bg-[url('/liquid-cheese.png')] bg-bottom bg-cover flex flex-col space-y-8 lg:items-end items-center rounded-xl p-6 text-sm w-full">
                        <p className="text-xl font-light text-justify">Verdant brings you closer to nature’s finest—sourced straight from local farms.</p>
                        <div className="flex space-x-6 items-center">
                            <div className="px-4 py-1 rounded-full bg-myBlack text-white">Begin Now</div>
                            <span>Our Product</span>
                        </div>
                    </div>
                    <div className="flex space-x-4 items-start justify-between w-full rounded-xl overflow-hidden">
                        <div className="relative w-full h-full">
                            <img src="/farmer.png" alt="Farmer" className="object-cover rounded-xl w-full h-full object-top" />
                            <div className="absolute bottom-2 right-2 flex space-x-2 items-center bg-[#F1F1F1] px-3 py-1 rounded-[6px]">
                                <div className="text-base">
                                    <Icon icon="lineicons:location-arrow-right" />
                                </div>
                                <span className="text-sm font-light">Bandung, Jawa Barat</span>
                            </div>
                        </div>
                        <div className="relative w-full h-full">
                            <img src="/crops.png" alt="Crops" className="object-cover rounded-xl w-full h-full" />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
                                <div className="text-4xl text-center drop-shadow-2xl text-white">
                                    Less Water and Pesticides
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex xl:flex-row flex-col gap-4 items-center h-32 mt-4">
                <img src="/plantation.jpg" alt="Plantation" className="object-cover xl:w-4/12 w-full h-32 rounded-xl xl:block hidden" />
                <div className="flex flex-col justify-between xl:space-y-0 space-y-4 bg-white xl:w-4/12 w-full drop-shadow-my text-green2 p-4 rounded-xl h-full">
                    <div className="flex justify-between">
                        <div className="text-3xl font-bold">
                            25 Tons
                        </div>
                        <div className="text-3xl">
                            <Icon icon="lineicons:hand-taking-leaf-1" />
                        </div>
                    </div>
                    <p>CO2 saved by sourcing locally, cutting transport miles, and prioritizing sustainable farming practices.</p>
                </div>
                <div className="flex flex-col justify-between xl:space-y-0 space-y-4 bg-white xl:w-4/12 w-full drop-shadow-my text-green2 p-4 rounded-xl h-full">
                    <div className="flex justify-between">
                        <div className="text-3xl font-bold">
                            150 +
                        </div>
                        <div className="text-3xl">
                            <Icon icon="lineicons:user-multiple-4" />
                        </div>
                    </div>
                    <p>Local farmers empowered through direct sales and fair pricing.</p>
                </div>
            </div>
        </section>
    );
};
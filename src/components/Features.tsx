import { Icon } from "@iconify/react/dist/iconify.js";
import { FeatureCard } from "./FeatureCard";

export const Features = () => {
    const fetures = [
        {
            "title": "Farm-Fresh Produce",
            "description": "Fresh fruits and veggies, just for you.",
            "icon": <Icon icon="lineicons:mushroom-5" />,
        },
        {
            "title": "Support Local Farmers",
            "description": "Your purchase directly benefits small-scale farmers.",
            "icon": <Icon icon="lineicons:hand-shake" />,
        },
        {
            "title": "Sustainable Practices",
            "description": "We partner with farms that use eco-friendly methods.",
            "icon": <Icon icon="lineicons:arrow-all-direction" />,
        },
        {
            "title": "Real-Time Updates",
            "description": "Stay informed with live harvest updates and stock availability.",
            "icon": <Icon icon="lineicons:hourglass" />,
        },
    ];

    return (
        <section className="sm:mx-4 mx-2 sm:mt-20 mt-16 text-myBlack flex flex-col items-center justify-center">
            <div className="flex xl:flex-row flex-col w-full gap-4 p-4 bg-[rgb(208,231,210,.25)] rounded-xl">
                <div className="bg-[url('/garden.jpg')] bg-cover rounded-xl xl:w-1/2 w-full flex items-end justify-start xl:h-auto h-96 bg-center">
                    <span className="bg-green2 rounded-xl px-4 py-1 text-white sm:text-5xl text-4xl mb-4 ml-4">
                        Our Features
                    </span>
                </div>
                <div className="xl:w-1/2 w-full grid lg:grid-cols-2 grid-cols-1 gap-4">
                    {fetures.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            title={feature.title}
                            description={feature.description}
                            icon={feature.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};
import { Icon } from "@iconify/react/dist/iconify.js";
import { HowCard } from "./HowCard";

export const How = () => {
    const how = [
        {
            "title": "Find Farms Near You",
            "description": "Explore a map to locate nearby farms offering fresh produce.",
            "image": "/map.jpg",
            "Icon": <Icon icon="lineicons:map-marker-5" />,
        },
        {
            "title": "Select Your Favorites",
            "description": "Browse a variety of seasonal items and pick what perfectly suits your taste.",
            "image": "/veggies.jpg",
            "Icon": <Icon icon="lineicons:basket-shopping-3" />,
        },
        {
            "title": "Enjoy Fresh Delivery",
            "description": "Sit back and relax as your order arrives fresh at your doorstep.",
            "image": "/cod.jpg",
            "Icon": <Icon icon="lineicons:truck-delivery-1" />,
        },

    ];
    return (
        <section className="sm:mx-4 mx-2 mt-20 text-myBlack flex flex-col space-y-4 items-center justify-center">
            <div className="flex flex-col space-y-4 items-center justify-center">
                <h1 className="sm:text-5xl text-4xl">How It Works?</h1>
                <p>From farm to you, simplified.</p>
            </div>
            <div className="flex lg:flex-row flex-col w-full justify-between items-start gap-4">
                {how.map((item, index) => (
                    <HowCard key={index} title={item.title} description={item.description} image={item.image} Icon={item.Icon} />
                ))}
            </div>
        </section>
    );
}
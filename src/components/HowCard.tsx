import { JSX } from "react";

interface HowCardProps {
    title: string;
    description: string;
    image: string;
    Icon: JSX.Element;
}

export const HowCard = ({ title, description, image, Icon }: HowCardProps) => {
    return (
        <div className="flex flex-col space-y-4 p-4 rounded-xl bg-white lg:w-4/12 w-full">
            <div className="flex justify-between place-items-center">
                <div className="font-bold xl:text-2xl text-xl">{title}</div>
                <div className="xl:text-3xl text-2xl">
                    {Icon}
                </div>
            </div>
            <p className="xl:text-base text-sm">{description}</p>
            <img src={image} alt={title} className="h-[200px] object-cover rounded-xl" />
        </div>
    );
};
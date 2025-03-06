import { Icon } from "@iconify/react/dist/iconify.js";
import { JSX } from "react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: JSX.Element;
}

export const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
    return (
        <div className="flex flex-col space-y-16 justify-between p-8 rounded-xl bg-white w-full">
            <div className="flex flex-col space-y-2">
                <div className="flex flex-col space-y-8">
                    <div className="text-4xl text-green2 bg-[#D9D9D9] rounded-full p-2 flex items-center justify-center size-14">
                        {icon}
                    </div>
                    <span className="text-3xl">{title}</span>
                </div>
                <p className="font-light">{description}</p>
            </div>
            <div className="text-xl bg-[#D9D9D9] rounded-full p-2 flex items-center justify-center size-8">
                <Icon icon="lineicons:arrow-angular-top-right" />
            </div>
        </div>
    );
}
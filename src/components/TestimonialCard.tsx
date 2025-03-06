import { Icon } from "@iconify/react/dist/iconify.js";
interface TestimonialCardProps {
    name: string;
    role: string;
    image: string;
    quote: string;
    color: string;
    active: boolean;
    onClick: () => void;
}

export const TestimonialCard = ({ name, role, image, quote, color, active, onClick }: TestimonialCardProps) => {
    return (
        <div className={`flex flex-col space-y-4 lg:px-32 px-4 py-8 text-white ${color}`} onClick={onClick}>
            <div className="flex lg:gap-20 gap-12">
                <Icon icon={active ? "lineicons:minus" : "lineicons:plus"} className="text-4xl" />
                <span className="font-bold lg:text-2xl text-xl">{name}</span>
                <span className="lg:text-xl text-lg">{role}</span>
            </div>
            {
                active && (
                    <div className="flex items-start justify-between lg:gap-20 gap-12">
                        <span className="lg:text-xl text-base leading-[150%] text-justify">{quote}</span>
                        <img src={image} alt={name} className="xl:size-[320px] lg:size-60 size-40 object-cover" />
                    </div>
                )
            }
        </div>
    );
}
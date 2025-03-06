import { useState } from "react";
import { TestimonialCard } from "./TestimonialCard";

export const Testimonials = () => {
    const [active, setActive] = useState<number | null>(0);
    const testimonials = [
        {
            name: "Dinny Wahyuni",
            role: "Happy Customer",
            image:"/dinny.png",
            quote: "I’ve never tasted tomatoes this good in my entire life, and I’ve tried plenty over the years! Knowing they’re grown sustainably just a few miles away by dedicated local farmers who pour their hearts into every harvest makes every single meal feel incredibly special and deeply meaningful to me and my loved ones.",
            color: "bg-green1",
        },
        {
            name: "Agus Susanto",
            role: "Farmer",
            image:"/agus.png",
            quote: "Verdant has truly been a game-changer for my small farm, which I’ve run with my family for over a decade. It’s opened doors to so many new customers across the region, ensured I get fair prices for my hard-earned crops, and allowed me to keep growing the fresh produce I’m so passionate about every single day while sustaining my livelihood.",
            color: "bg-green2",
        },
        {
            name: "Mono Sol",
            role: "Happy Customer",
            image:"/monosol.png",
            quote: "I absolutely love the convenience of having fresh, local food delivered right to my home every week without any hassle. Supporting hardworking farmers who care about quality, while enjoying top-notch produce straight from the fields, has completely transformed how my family eats, how we think about food, and even how we connect with our community.",
            color: "bg-green3",
        },
    ];

    const handleClick = (index: number) => {
        setActive(active === index ? null : index);
    }
    return (
        <section className="sm:mt-20 mt-16 text-myBlack flex flex-col w-full">
            <div className="flex flex-col space-y-2 lg:px-32 px-4 py-8 bg-green1 text-white">
                <div className="text-lg">Testimonials</div>
                <div className="sm:text-5xl text-4xl">Real stories from our farmers and food lovers.</div>
            </div>
            {testimonials.map((testimonial, index) => (
                <TestimonialCard 
                    key={index}
                    name={testimonial.name}
                    role={testimonial.role}
                    image={testimonial.image}
                    quote={testimonial.quote}
                    color={testimonial.color}
                    onClick={() => handleClick(index)}
                    active={active === index}
                />
            ))}
        </section>
    );
};
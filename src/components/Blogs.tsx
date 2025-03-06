import { BlogCard } from "./BlogCard";

export const Blogs = () => {
    const blogs = [
        {
            "title": "Why Seasonal Eating Boosts Flavor and Planet Health",
            "image": "/blog1.jpg",
            "date": "June 12, 2021",
            "author": "Dzakwan Irfan",
            "categories": ["Food", "Sustainability"]
        },
        {
            "title": "A Day in the Life of Green Valley Farmers",
            "image": "/blog2.jpg",
            "date": "Feb 29, 2024",
            "author": "Renda Sabita",
            "categories": ["Farmer Stories", "Community"]
        },
        {
            "title": "5 Easy Recipes Using Fresh Farm Produce",
            "image": "/blog3.jpg",
            "date": "Oktober 15, 2024",
            "author": "Heri Sukmawan",
            "categories": ["Food", "Lifestyle"]
        },
        {
            "title": "The Science Behind Soil: Farming for the Future",
            "image": "/blog4.jpg",
            "date": "March 8, 2025",
            "author": "Sir Gendon",
            "categories": ["Sustainability", "Education"],
        },
    ];
    return (
        <section className="sm:mx-4 mx-2 sm:mt-20 mt-16 text-myBlack flex-col sm:space-y-8 space-y-4 items-center">
            <div className="flex sm:gap-0 gap-2 lg:flex-row flex-col justify-between text-myBlack">
                <h2 className="sm:text-5xl text-4xl">Blogs</h2>
                <p className="sm:text-xl text-base lg:text-right text-justify lg:w-6/12 w-full">Discover practical tips, inspiring farmer stories, and the timeless art of sustainable living through fresh perspectives.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
                {blogs.map((blog, index) => (
                    <BlogCard key={index} title={blog.title} image={blog.image} date={blog.date} author={blog.author} categories={blog.categories} />
                ))}
            </div>
        </section>
    );
};
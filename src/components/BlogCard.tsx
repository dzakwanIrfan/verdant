interface BlogCardProps {
    title: string;
    image: string;
    date: string;
    author: string;
    categories: string[];
}

export const BlogCard = ({ title, image, date, author, categories }: BlogCardProps) => {
    return (
        <div className="flex flex-col space-y-2 text-myBlack">
                <img src={image} alt={title} className="h-80 object-cover rounded-3xl" />
                <div className="flex gap-4 text-gray-500">
                    <span>{date}</span>
                    <span>-</span>
                    <span>{author}</span>
                </div>
                <div className="sm:text-xl text-lg font-bold">{title}</div>
                <div className="flex gap-2">
                    {categories.map((category, index) => (
                        <span key={index} className="bg-white text-xs px-4 py-[3px] border border-gray-500 rounded-full">{category}</span>
                    ))}
                </div>
        </div>
    );
};
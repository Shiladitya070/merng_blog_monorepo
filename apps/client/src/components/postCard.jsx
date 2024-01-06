const PostCard = ({ title, description, author, avatar, bannerUrl, className }) => {
    return (
        <div className={className}>
            <div className="bg-white rounded-lg shadow-md p-4">
                <div className="mt-4">
                    <img height="200px" src={bannerUrl} alt="Post Banner" className="w-full rounded-lg" />
                </div>
                <img src={avatar} alt="Author Avatar" className="w-12 h-12 rounded-full" />
                <div className="mt-2">
                    <h2 className="text-xl font-semibold">{title}</h2>
                    <p className="text-gray-500">{description}</p>
                    <p className="text-gray-500">By {author}</p>
                </div>
            </div>
        </div>
    );
};

export default PostCard;

// DoctorTags.js

import React from "react";

const DoctorTags = () => {
    const tags = ["NearMe", "Popular", "Specialist", "Top", "cheap", "trusted", "new", "Experienced"];
    const handleTagClick = (tag) => {
        console.log(`Tag clicked: ${tag}`);
    };

    return (
        <div className="flex overflow-x-auto mb-4 p-2 scrollbar-hide sm:overflow-x-visible whitespace-no-wrap">
            {tags.map((tag, index) => (
                <div
                    key={index}
                    className="cursor-pointer flex items-center justify-center border border-green-400 rounded-md sm:rounded-full sm:px-5 px-5 py-2 mr-3 whitespace-no-wrap transition duration-300 ease-in-out hover:bg-gray-100"
                    onClick={() => handleTagClick(tag)}
                >
                    {tag}
                </div>
            ))}
        </div>
    );
};

export default DoctorTags;

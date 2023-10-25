import React, { useState } from 'react'
import RestrauntCategoryItem from './RestrauntCategoryItem';

const RestrauntCategory = ({ data, show, setShowIndexItem }) => {
    // const [showMenu, setShowMenu] = useState(false);

    const handleItemMenu = () => {
        setShowIndexItem();
    };

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div
                    className="flex justify-between cursor-pointer "
                    onClick={handleItemMenu}
                >
                    <span className="font-bold text-lg ">
                        {data.title} ({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>

                {show && (
                    <div>
                        <RestrauntCategoryItem items={data.itemCards} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default RestrauntCategory

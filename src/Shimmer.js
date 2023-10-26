import React from "react";

const Shimmer = () => {
    return (
        <body className="p-20">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {Array(30)
                    .fill("")
                    .map((i) => (
                        <div className="w-full bg-white drop-shadow-md rounded-lg">
                            <div className="animate-pulse w-full h-48 bg-slate-200"></div>
                            <div className="p-3 space-y-4">
                                <div className="space-y-2">
                                    <div className="animate-pulse w-3/4 h-3 bg-slate-200"></div>
                                    <div className="animate-pulse w-full h-3 bg-slate-200"></div>
                                    <div className="animate-pulse w-2/3 h-3 bg-slate-200"></div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </body>
    );
};

export default Shimmer;

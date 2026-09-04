import React from "react";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
    //   console.log(news);
    return (
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* News Image */}
            <div className="relative">
                <img
                    className="w-full h-[350px] md:h-[450px] object-cover"
                    src={news.image_url}
                    alt=""
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>

                <div className="absolute bottom-5 left-5">
                    <span className="px-3 py-1 text-sm font-medium text-white bg-secondary rounded-full">
                        Latest News
                    </span>
                </div>
            </div>

            {/* News Content */}
            <div className="p-6 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-6">
                    {news.title}
                </h2>

                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                    <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-semibold text-gray-600">
                            N
                        </span>
                    </div>

                    <div>
                        <p className="font-medium text-gray-800">
                            News Portal
                        </p>
                        <p className="text-sm text-gray-500">
                            Published Article
                        </p>
                    </div>
                </div>

                <p className="text-gray-600 text-base md:text-lg leading-8">
                    {news.details}
                </p>

                {/* Back Button */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <Link
                        className="btn btn-secondary px-6 rounded-lg"
                        to={`/category/${news.category_id}`}
                    >
                        ← Back to Category
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NewsDetailsCard;
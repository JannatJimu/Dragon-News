
import React from 'react';
import { Link } from 'react-router';

const Home = () => {
    return (
        <div className="min-h-screen bg-base-100">

            {/* Hero Section */}
            <section className="py-10">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="grid lg:grid-cols-2 gap-8 items-center">

                        {/* Hero Content */}
                        <div>

                            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-5">
                                Today's Top Stories
                            </span>

                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                                Stay informed with
                                <span className="text-primary">
                                    {' '}Dragon News
                                </span>
                            </h1>

                            <p className="text-gray-500 text-base md:text-lg leading-7 mt-6 max-w-xl">
                                Discover the latest breaking news, trending
                                stories, technology updates, sports,
                                entertainment and more — all in one place.
                            </p>

                            <div className="flex flex-wrap gap-3 mt-7">

                                <Link
                                    to="/category/01"
                                    className="btn btn-primary px-6 rounded-lg"
                                >
                                    Explore News
                                </Link>

                                <Link
                                    to="/about"
                                    className="btn btn-outline px-6 rounded-lg"
                                >
                                    Learn More
                                </Link>

                            </div>

                        </div>


                        {/* Featured Story */}
                        <div className="relative">

                            <div className="rounded-3xl overflow-hidden bg-base-200 min-h-80 flex items-end">

                                <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent rounded-3xl">
                                </div>

                                <div className="relative z-10 p-7 text-white">

                                    <span className="text-xs font-semibold uppercase tracking-wider bg-primary px-3 py-1 rounded-full">
                                        Featured
                                    </span>

                                    <h2 className="text-2xl md:text-3xl font-bold mt-4 leading-tight">
                                        Discover the stories that matter most
                                    </h2>

                                    <p className="text-gray-200 mt-3 text-sm leading-6">
                                        Explore today's most important stories
                                        and stay connected with what's happening
                                        around the world.
                                    </p>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>
            </section>


            {/* Quick Categories */}
            <section className="py-8">
                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex justify-between items-end mb-6">

                        <div>
                            <p className="text-primary font-semibold text-sm">
                                Explore
                            </p>

                            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-1">
                                Browse Categories
                            </h2>
                        </div>

                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

                        <Link
                            to="/category/01"
                            className="group bg-base-200 rounded-2xl p-6 hover:bg-primary transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">
                                📰
                            </div>

                            <h3 className="font-bold text-gray-800 group-hover:text-white">
                                National
                            </h3>

                            <p className="text-sm text-gray-500 group-hover:text-white/80 mt-1">
                                Local stories
                            </p>
                        </Link>


                        <Link
                            to="/category/02"
                            className="group bg-base-200 rounded-2xl p-6 hover:bg-primary transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">
                                🌎
                            </div>

                            <h3 className="font-bold text-gray-800 group-hover:text-white">
                                International
                            </h3>

                            <p className="text-sm text-gray-500 group-hover:text-white/80 mt-1">
                                World news
                            </p>
                        </Link>


                        <Link
                            to="/category/03"
                            className="group bg-base-200 rounded-2xl p-6 hover:bg-primary transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">
                                ⚽
                            </div>

                            <h3 className="font-bold text-gray-800 group-hover:text-white">
                                Sports
                            </h3>

                            <p className="text-sm text-gray-500 group-hover:text-white/80 mt-1">
                                Latest updates
                            </p>
                        </Link>


                        <Link
                            to="/category/04"
                            className="group bg-base-200 rounded-2xl p-6 hover:bg-primary transition-all duration-300"
                        >
                            <div className="text-3xl mb-4">
                                💻
                            </div>

                            <h3 className="font-bold text-gray-800 group-hover:text-white">
                                Technology
                            </h3>

                            <p className="text-sm text-gray-500 group-hover:text-white/80 mt-1">
                                Tech & innovation
                            </p>
                        </Link>

                    </div>

                </div>
            </section>


            {/* Latest Stories */}
            <section className="py-12 bg-base-200 mt-8">

                <div className="max-w-7xl mx-auto px-4">

                    <div className="flex justify-between items-end mb-8">

                        <div>
                            <p className="text-primary font-semibold text-sm">
                                Stay Updated
                            </p>

                            <h2 className="text-3xl font-bold text-gray-800 mt-1">
                                Latest Stories
                            </h2>
                        </div>

                        <Link
                            to="/category/01"
                            className="text-primary font-semibold text-sm hover:underline"
                        >
                            View All →
                        </Link>

                    </div>


                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {/* News Card 1 */}
                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400">
                                    News Image
                                </span>
                            </div>

                            <div className="p-5">

                                <span className="text-xs font-semibold text-primary uppercase">
                                    National
                                </span>

                                <h3 className="text-xl font-bold text-gray-800 mt-2 leading-snug">
                                    Latest news and updates from Bangladesh
                                </h3>

                                <p className="text-sm text-gray-500 mt-3 leading-6">
                                    Read the latest developments and important
                                    stories from around the country.
                                </p>

                                <div className="flex justify-between items-center mt-5">

                                    <span className="text-xs text-gray-400">
                                        2 hours ago
                                    </span>

                                    <Link
                                        to="/category/01"
                                        className="text-primary text-sm font-semibold"
                                    >
                                        Read More →
                                    </Link>

                                </div>

                            </div>

                        </article>


                        {/* News Card 2 */}
                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400">
                                    News Image
                                </span>
                            </div>

                            <div className="p-5">

                                <span className="text-xs font-semibold text-primary uppercase">
                                    Technology
                                </span>

                                <h3 className="text-xl font-bold text-gray-800 mt-2 leading-snug">
                                    Technology is changing the way we live
                                </h3>

                                <p className="text-sm text-gray-500 mt-3 leading-6">
                                    Explore the latest innovations and trends
                                    shaping the digital world.
                                </p>

                                <div className="flex justify-between items-center mt-5">

                                    <span className="text-xs text-gray-400">
                                        4 hours ago
                                    </span>

                                    <Link
                                        to="/category/04"
                                        className="text-primary text-sm font-semibold"
                                    >
                                        Read More →
                                    </Link>

                                </div>

                            </div>

                        </article>


                        {/* News Card 3 */}
                        <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300">

                            <div className="h-48 bg-gray-200 flex items-center justify-center">
                                <span className="text-gray-400">
                                    News Image
                                </span>
                            </div>

                            <div className="p-5">

                                <span className="text-xs font-semibold text-primary uppercase">
                                    Sports
                                </span>

                                <h3 className="text-xl font-bold text-gray-800 mt-2 leading-snug">
                                    Latest sports news and highlights
                                </h3>

                                <p className="text-sm text-gray-500 mt-3 leading-6">
                                    Get the latest scores, highlights and
                                    updates from the world of sports.
                                </p>

                                <div className="flex justify-between items-center mt-5">

                                    <span className="text-xs text-gray-400">
                                        5 hours ago
                                    </span>

                                    <Link
                                        to="/category/03"
                                        className="text-primary text-sm font-semibold"
                                    >
                                        Read More →
                                    </Link>

                                </div>

                            </div>

                        </article>

                    </div>

                </div>

            </section>


            {/* Newsletter CTA */}
            <section className="py-16">

                <div className="max-w-5xl mx-auto px-5">

                    <div className="bg-primary rounded-3xl p-8 md:p-12 text-center">

                        <span className="text-3xl">
                            ✉️
                        </span>

                        <h2 className="text-3xl md:text-4xl font-bold text-white mt-4">
                            Never miss an important story
                        </h2>

                        <p className="text-white/80 max-w-xl mx-auto mt-3">
                            Stay connected with the latest news and updates
                            from Dragon News.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto mt-7">

                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered bg-white flex-1"
                            />

                            <button className="btn bg-white text-primary border-none hover:bg-gray-100 px-6">
                                Subscribe
                            </button>

                        </div>

                    </div>

                </div>

            </section>


            {/* Bottom CTA */}
            <section className="pb-16 text-center">

                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                    Want to know more about Dragon News?
                </h2>

                <p className="text-gray-500 mt-3">
                    Learn more about our platform and what we stand for.
                </p>

                <Link
                    to="/about"
                    className="btn btn-primary mt-6 px-7 rounded-lg"
                >
                    About Dragon News
                </Link>

            </section>

        </div>
    );
};

export default Home;


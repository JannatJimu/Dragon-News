import React from 'react';
import { Link } from 'react-router';

const About = () => {
    return (
        <div className="bg-base-100 min-h-screen">

            <section className="bg-base-200">
                <div className="max-w-6xl mx-auto px-5 py-16 text-center">

                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                        About Dragon News
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Stay Informed. Stay Connected.
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-500 mt-5 leading-7">
                        Dragon News is a modern news platform designed to bring
                        important stories, breaking news, and trending topics
                        together in one simple and accessible place.
                    </p>

                </div>
            </section>


            <section className="max-w-6xl mx-auto px-5 py-16">

                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <p className="text-primary font-semibold mb-3">
                            Who We Are
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800 mb-5">
                            News that keeps you one step ahead
                        </h2>

                        <p className="text-gray-500 leading-7 mb-4">
                            Dragon News is built with a simple goal — to make
                            discovering and reading news easy, fast, and
                            enjoyable.
                        </p>

                        <p className="text-gray-500 leading-7">
                            From local and international stories to technology,
                            sports, entertainment, and more, Dragon News brings
                            different categories of news together in a clean
                            and user-friendly experience.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="bg-base-200 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">📰</div>
                            <h3 className="font-bold text-gray-800">
                                Latest News
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Stay updated with the latest stories.
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">🌎</div>
                            <h3 className="font-bold text-gray-800">
                                Global Stories
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Explore news from around the world.
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">⚡</div>
                            <h3 className="font-bold text-gray-800">
                                Fast & Simple
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Find the news you need quickly.
                            </p>
                        </div>

                        <div className="bg-base-200 rounded-2xl p-6 text-center">
                            <div className="text-3xl mb-3">📱</div>
                            <h3 className="font-bold text-gray-800">
                                Responsive
                            </h3>
                            <p className="text-sm text-gray-500 mt-2">
                                Enjoy a smooth experience on every device.
                            </p>
                        </div>

                    </div>

                </div>

            </section>


           
            <section className="bg-base-200">
                <div className="max-w-4xl mx-auto px-5 py-14 text-center">

                    <p className="text-primary font-semibold mb-3">
                        Our Mission
                    </p>

                    <h2 className="text-3xl font-bold text-gray-800 mb-5">
                        Making news easier to discover
                    </h2>

                    <p className="text-gray-500 leading-7">
                        We believe staying informed should not be complicated.
                        Dragon News focuses on a clean interface, organized
                        categories, and an enjoyable reading experience so
                        users can spend less time searching and more time
                        understanding the stories that matter.
                    </p>

                </div>
            </section>


            <section className="max-w-6xl mx-auto px-5 py-16 text-center">

                <h2 className="text-3xl font-bold text-gray-800">
                    Explore the latest stories
                </h2>

                <p className="text-gray-500 mt-3 mb-6">
                    Discover what's happening around you and around the world.
                </p>

                <Link
                    to="/"
                    className="btn btn-primary px-7 rounded-lg"
                >
                    Explore News
                </Link>

            </section>

        </div>
    );
};

export default About;


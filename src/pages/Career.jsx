import React from 'react';
import { Link } from 'react-router';

const Career = () => {
    return (
        <div className="min-h-screen bg-base-100">

            <section className="bg-base-200">
                <div className="max-w-6xl mx-auto px-5 py-16 text-center">

                    <span className="text-primary font-semibold text-sm uppercase tracking-widest">
                        Join Dragon News
                    </span>

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mt-4">
                        Build the Future of News
                    </h1>

                    <p className="max-w-2xl mx-auto text-gray-500 mt-5 leading-7">
                        We're always looking for passionate, creative, and
                        talented people who want to build meaningful digital
                        experiences and make information easier to access.
                    </p>

                    <button className="btn btn-primary mt-7 px-7 rounded-lg">
                        Explore Opportunities
                    </button>

                </div>
            </section>

            <section className="max-w-6xl mx-auto px-5 py-16">

                <div className="text-center mb-10">
                    <p className="text-primary font-semibold mb-2">
                        Why Dragon News?
                    </p>

                    <h2 className="text-3xl font-bold text-gray-800">
                        Grow with us
                    </h2>

                    <p className="text-gray-500 mt-3 max-w-xl mx-auto">
                        Join a team where you can learn, contribute, and
                        create products that people use every day.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">

                    <div className="bg-base-200 rounded-2xl p-6 text-center">
                        <div className="text-3xl mb-4">🚀</div>

                        <h3 className="font-bold text-gray-800 text-lg">
                            Growth
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Learn new skills and grow professionally.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-2xl p-6 text-center">
                        <div className="text-3xl mb-4">💡</div>

                        <h3 className="font-bold text-gray-800 text-lg">
                            Innovation
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Turn creative ideas into useful experiences.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-2xl p-6 text-center">
                        <div className="text-3xl mb-4">🤝</div>

                        <h3 className="font-bold text-gray-800 text-lg">
                            Teamwork
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Work together and learn from each other.
                        </p>
                    </div>

                    <div className="bg-base-200 rounded-2xl p-6 text-center">
                        <div className="text-3xl mb-4">🌎</div>

                        <h3 className="font-bold text-gray-800 text-lg">
                            Impact
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                            Build experiences that reach real users.
                        </p>
                    </div>

                </div>
            </section>

            <section className="bg-base-200">
                <div className="max-w-6xl mx-auto px-5 py-16">

                    <div className="text-center mb-10">
                        <p className="text-primary font-semibold mb-2">
                            Opportunities
                        </p>

                        <h2 className="text-3xl font-bold text-gray-800">
                            Open Positions
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-5">

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

                            <div className="flex justify-between items-start gap-4">

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Frontend Developer
                                    </h3>

                                    <p className="text-sm text-primary mt-1">
                                        Engineering
                                    </p>
                                </div>

                                <span className="badge badge-primary badge-outline">
                                    Full Time
                                </span>

                            </div>

                            <p className="text-gray-500 text-sm mt-4">
                                Build responsive and engaging interfaces using
                                modern frontend technologies.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                <span className="badge badge-ghost">
                                    React
                                </span>

                                <span className="badge badge-ghost">
                                    JavaScript
                                </span>

                                <span className="badge badge-ghost">
                                    Tailwind
                                </span>
                            </div>

                            <button className="btn btn-outline btn-primary btn-sm mt-6">
                                View Position
                            </button>

                        </div>

                        <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">

                            <div className="flex justify-between items-start gap-4">

                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        UI/UX Designer
                                    </h3>

                                    <p className="text-sm text-primary mt-1">
                                        Design
                                    </p>
                                </div>

                                <span className="badge badge-primary badge-outline">
                                    Full Time
                                </span>

                            </div>

                            <p className="text-gray-500 text-sm mt-4">
                                Create intuitive and visually engaging
                                experiences for our digital platform.
                            </p>

                            <div className="flex flex-wrap gap-2 mt-5">
                                <span className="badge badge-ghost">
                                    Figma
                                </span>

                                <span className="badge badge-ghost">
                                    UI Design
                                </span>

                                <span className="badge badge-ghost">
                                    UX
                                </span>
                            </div>

                            <button className="btn btn-outline btn-primary btn-sm mt-6">
                                View Position
                            </button>

                        </div>

                    </div>
                </div>
            </section>

            <section className="max-w-4xl mx-auto px-5 py-16 text-center">

                <h2 className="text-3xl font-bold text-gray-800">
                    Don't see the right role?
                </h2>

                <p className="text-gray-500 mt-3">
                    We're always interested in meeting talented people.
                    Keep an eye on our future opportunities.
                </p>

                <Link
                    to="/"
                    className="btn btn-primary mt-6 px-7 rounded-lg"
                >
                    Back to News
                </Link>

            </section>

        </div>
    );
};

export default Career;
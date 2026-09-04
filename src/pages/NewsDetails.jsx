import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import RightAside from '../components/HomeLayout/RightAside';
import NewsDetailsCard from '../components/NewsDetailsCard';
import { useLoaderData, useParams } from 'react-router';

const NewsDetails = () => {
    const data = useLoaderData();
    const { id } = useParams();
    const [news, setNews] = useState({});

    useEffect(() => {
        // Scroll to top when News Details page loads
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        const NewsDetails = data.find(singleNews => singleNews.id == id);
        setNews(NewsDetails);
    }, [data, id]);

    return (
        <div>
            <header className="py-3">
                <Header />
            </header>

            <main className="w-11/12 max-w-7xl mx-auto grid grid-cols-12 gap-6">

                <section className="col-span-9">
                    <h2 className="font-bold mb-5">
                        News Details
                    </h2>

                    {news?.id && (
                        <NewsDetailsCard news={news} />
                    )}
                </section>

                {/* Sticky Right Aside */}
                <aside className="col-span-3">
                    <div className="sticky top-5">
                        <RightAside />
                    </div>
                </aside>

            </main>
        </div>
    );
};

export default NewsDetails;
import React from 'react';
import NewsItem from "../NewsItem/NewsItem";

function NewsList({ news = [] }) {
    if (news.length === 0) return <h2>Loading...</h2>;

    return (
        <div className="row">
            {news.map((item) => <NewsItem key={item.title} item={item} />)}
        </div>
    );
}

export default NewsList;

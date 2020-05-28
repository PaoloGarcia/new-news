import React from 'react';
import PropTypes from 'prop-types';

// components
import NewsItem from "../NewsItem/NewsItem";

function NewsList({ news }) {
    if (news.length === 0) {
        return <h2>Loading...</h2>
    }

    const newsList = news.map(item => {
        return (
            <NewsItem key={item.url} item={item} />
        );
    });

    return (
        <div className="row">
            {newsList}
        </div>
    );
}

NewsList.propTypes = {
    news: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NewsList;

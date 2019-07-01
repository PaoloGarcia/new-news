import React from 'react';
import PropTypes from 'prop-types';

const NewsItem = ({ item }) => {
    const { description, source: { name }, title, url, urlToImage } = item;

    // check if there is image
    const image = urlToImage ?
        <div className="card-image">
            <img src={urlToImage} alt={title} />
            <span className="card-title">{name}</span>
        </div>
        :
        null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {image}

                <div className="card-content">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>

                <div className="card-action">
                    <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn waves-effect waves-light"
                    >
                        See full article
                    </a>
                </div>
            </div>
        </div>
    );
};

NewsItem.propTypes = {
    item: PropTypes.object.isRequired,
};

export default NewsItem;
import React from 'react';

const replacesRemoved = (field) => field === "[Removed]" ? null : field;

function NewsItem({ item = {} }) {
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
                    <h3>{replacesRemoved(title)}</h3>
                    <p>{replacesRemoved(description)}</p>
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
}

export default NewsItem;

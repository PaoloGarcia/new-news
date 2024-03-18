import React, { useState } from 'react';
import { createUrl } from '../../utils';

function Search({ fetchNews }) {
    const [category, setCategory] = useState("general");
    const [country, setCountry] = useState("us");

    const onChangeCategory = (ev) => {
        setCategory(() => {
            fetchNews(createUrl(ev.target?.value, country));
            return ev.target?.value
        });
    };

    const onChangeCountry = (ev) => {
        setCountry(() => {
            fetchNews(createUrl(category, ev.target?.value));
            return ev.target?.value;
        });
    };

    return (
        <div className="row buscador">
            <div className="col s12 m8 offset-m2">
                <form>
                    <h2>Search news by category</h2>
                    <div className="input-field col s12">
                        <select
                            onChange={onChangeCategory}
                            value={category}
                        >
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </select>
                        <select
                            onChange={onChangeCountry}
                            value={country}
                        >
                            <option value="ca">Canada</option>
                            <option value="mx">Mexico</option>
                            <option value="ru">Russia</option>
                            <option value="us">USA</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Search;

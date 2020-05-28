import PropTypes from 'prop-types';
import React, { Component } from 'react';

class Search extends Component {
    state = {
        category: "general",
        country: "us",
    };

    onChangeCategoryHndlr = e => {
        this.setState({ category: e.target.value }, () => {
            this.props.fetchNews(this.state.category, this.state.country);
        });
    }

    onChangeCountryHndlr = e => {
        this.setState({ country: e.target.value }, () => {
            this.props.fetchNews(this.state.category, this.state.country);
        });
    }

    render() {
        return (
            <div className="row buscador">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Search news by category</h2>
                        <div className="input-field col s12">
                            <select
                                onChange={this.onChangeCategoryHndlr}
                                defaultValue="general"
                            >
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="general">General</option>
                                <option value="health">Health</option>
                                <option value="sports">Sports</option>
                                <option value="technology">Technology</option>
                            </select>
                            <select
                                onChange={this.onChangeCountryHndlr}
                                defaultValue="us"
                            >
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
}

Search.propTypes = {
    fetchNews: PropTypes.func.isRequired,
};

export default Search;

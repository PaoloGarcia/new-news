import React, { Component } from 'react';
import './App.scss';

// api
import API_KEY from "./utils/api.js";
// create folder "utils" inside src and a file "api.js" inside utils
// on the api.js file, write the following code (you must use your own api key)
// export default "<your_api_key>";

// components
import Header from "./components/Header/Header";
import NewsList from "./components/News/NewsList/NewsList";
import Search from './components/Search/Search';

class App extends Component {
    state = {
        news: [],
    };

    componentDidMount() {
        this.fetchNews();
    }

    fetchNews = async (category = "general", country = "us") => {
        const res = await fetch(`https://newsapi.org/v2/top-headlines?country=${country}&category=${category}&apiKey=${API_KEY}`);
        const data = await res.json();
        this.setState({ news: data.articles });
    }

    render() {
        const { news } = this.state;

        return (
            <>
                <Header />
                <Search fetchNews={this.fetchNews} />
                <div className="container white news-container">
                    <NewsList news={news} />
                </div>
            </>
        );
    }
}

export default App;

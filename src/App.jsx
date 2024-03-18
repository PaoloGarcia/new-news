import React from 'react';
import Header from "./components/Header/Header";
import NewsList from "./components/News/NewsList/NewsList";
import Search from './components/Search/Search';
import { useFetch } from './hooks/useFetch';
import { createUrl } from './utils';
import './App.css';

function App() {
    const { data, error, loading, refetch } = useFetch(createUrl("general", "us"));

    if (loading) {
        return (
            <div className="container white news-container">
               <h2>Loading...</h2>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container white news-container">
               <h2>Error: {error}</h2>
            </div>
        );
    }

    return (
        <>
            <Header />
            <Search fetchNews={refetch} />
            <div className="container white news-container">
                <NewsList
                    news={data?.articles?.filter((article) => article.url !== "https://removed.com")}
                />
            </div>
        </>
    );
}

export default App;

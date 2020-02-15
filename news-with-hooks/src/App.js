import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import NewsList from "./components/NewsList";

function App() {
  const [category, setCategory] = useState("");
  const [news, setNews] = useState([]);

  useEffect(() => {
    const findNewsByCategory = () => {
      fetch(
        `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`
      )
        .then(resp => resp.json())
        .then(resp => setNews(resp.articles));
    };

    findNewsByCategory();
  }, [category]);

  return (
    <>
      <Header title="News Finder" />

      <div className="container mx-auto px-4">
        <Form setCategory={setCategory} />

        <NewsList news={news} />
      </div>
    </>
  );
}

export default App;

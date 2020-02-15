import React, { Component } from 'react'
import Header from './components/Header'
import NewsList from './components/NewsList'
import Categories from './components/Categories'

class App extends Component {
  state = {
    news: []
  }

  componentDidMount() {
    this.getNews()
  }

  getNews = async (category = 'general') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`

    const response = await fetch(url)
    const news = await response.json()

    this.setState({ news: news.articles })
  }

  render() {
    const { news } = this.state

    return (
      <>
        <Header title="News" />

        <div className="container mx-auto py-12">
          <Categories onGetNews={this.getNews} />

          <NewsList news={news} />
        </div>
      </>
    )
  }
}

export default App

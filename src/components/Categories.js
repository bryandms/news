import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Categories extends Component {
  state = {
    category: 'general'
  }

  handleChangeCategory = e => {
    this.setState(
      {
        category: e
      },
      () => {
        this.props.onGetNews(this.state.category)
      }
    )
  }

  render() {
    return (
      <div className="w-full pb-8 mx-auto text-center">
        <h2 className="text-xl">Select category</h2>

        <div className="px-6 py-4">
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('general')}
          >
            #General
          </span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('business')}
          >
            #Business
          </span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('entertainment')}
          >
            #Entertainment
          </span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('health')}
          >
            #Health
          </span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('science')}
          >
            #Science
          </span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('sports')}
          >
            #Sports
          </span>
          <span
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            onClick={() => this.handleChangeCategory('technology')}
          >
            #Technology
          </span>
        </div>
      </div>
    )
  }
}

Categories.propTypes = {
  onGetNews: PropTypes.func.isRequired
}

export default Categories

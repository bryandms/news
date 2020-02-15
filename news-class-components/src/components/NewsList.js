import React from 'react'
import New from './New'
import PropTypes from 'prop-types'

const NewsList = ({ news }) => (
  <div className="flex flex-wrap">
    {news.map((currentNew, index) => (
      <New key={index} new={currentNew} />
    ))}
  </div>
)

NewsList.propTypes = {
  news: PropTypes.array.isRequired
}

export default NewsList

import React from 'react'
import PropTypes from 'prop-types'

const New = props => {
  const { urlToImage, url, title, description, source } = props.new

  const image = urlToImage ? (
    <img className="object-cover h-48 w-full" src={urlToImage} alt={title} />
  ) : null

  return (
    <div className="w-1/1 md:w-6/12 lg:w-4/12 p-3 mx-auto">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        {image}

        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base crop-text-2">{description}</p>

          <p className="text-gray-600 text-sm pt-3">{source.name}</p>
        </div>

        <div className="px-6 py-4 text-center">
          <a
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-full inline-flex items-center"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Read more</span>
          </a>
        </div>
      </div>
    </div>
  )
}

New.propTypes = {
  new: PropTypes.object.isRequired
}

export default New

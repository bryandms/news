import React from "react";
import PropTypes from "prop-types";

const New = ({ currentNew }) => {
  const { urlToImage, url, title, description, source } = currentNew;
  return (
    <a
      className="w-full md:w-1/2 lg:w-1/3 p-4 transition duration-500 ease-in-out transform hover:-translate-y-3 hover:text-indigo-600"
      href={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        className="rounded-lg shadow-xl mb-4"
        src={
          urlToImage
            ? urlToImage
            : "https://afmec.org/images/no-image-available-icon.jpg"
        }
        alt={title}
      />

      <h3 className="font-bold text-lg mb-2">
        {title} (<small>{source.name}</small>)
      </h3>
      <p className="text-gray-600">{description}</p>
    </a>
  );
};

New.propTypes = {
  currentNew: PropTypes.object.isRequired
};

export default New;

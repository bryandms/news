import React from "react";
import New from "./New";
import PropTypes from "prop-types";

const NewsList = ({ news }) => {
  return (
    <div className="flex flex-wrap">
      {news.map(currentNew => (
        <New key={currentNew.url} currentNew={currentNew} />
      ))}
    </div>
  );
};

NewsList.propTypes = {
  news: PropTypes.array.isRequired
};

export default NewsList;

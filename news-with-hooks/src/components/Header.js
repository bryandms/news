import React from "react";
import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header className="w-full bg-indigo-600 text-white text-center py-6 text-2xl font-extrabold">
      {title}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;

import React from "react";
import useSelect from "../hooks/useSelect";
import PropTypes from "prop-types";

const Form = ({ setCategory }) => {
  const OPTIONS = [
    { value: "general", label: "General" },
    { value: "business", label: "Business" },
    { value: "entertainment", label: "Entertainment" },
    { value: "health", label: "Health" },
    { value: "science", label: "Science" },
    { value: "sports", label: "Sports" },
    { value: "technology", label: "Technology" }
  ];

  // Use custom hook
  const [category, SelectNews] = useSelect("general", OPTIONS);

  const findNews = e => {
    e.preventDefault();
    setCategory(category);
  };

  return (
    <div className="flex">
      <div className="w-full md:w-8/12 m-auto my-12">
        <form onSubmit={findNews}>
          <h2 className="font-black text-3xl uppercase text-center text-gray-700">
            Find <span className="text-indigo-600">news</span> by category
          </h2>

          <SelectNews />

          <div className="w-full">
            <input
              type="submit"
              className="bg-indigo-500 hover:bg-indigo-600 px-4 py-2 shadow-md text-white font-bold uppercase w-full"
              value="Search"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

Form.propTypes = {
  setCategory: PropTypes.func.isRequired
};

export default Form;

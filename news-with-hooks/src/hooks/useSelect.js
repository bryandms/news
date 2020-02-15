import React, { useState } from "react";

const useSelect = (initialState, options) => {
  const [state, setState] = useState(initialState);

  const SelectNews = () => (
    <select
      className="appearance-none w-full my-12 py-2 px-4 outline-none border-2 border-transparent focus:border-indigo-500"
      value={state}
      onChange={e => setState(e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );

  return [state, SelectNews];
};

export default useSelect;

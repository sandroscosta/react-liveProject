import React from "react";
import PropTypes from "prop-types";

const Select = ({options, selectChange}) => {
  /*
  * Defines the Select element.
  * Uses a map to go through all options and list them
  * onChange handler in defined in the parent component
  */
  return (
    <select onChange={selectChange}>
      {options.map((label) =>
        <option key={label} value={label}>{label}</option>
      )}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
}

Select.defaultProps = {
  options: ['Choose an option']
}

export default Select
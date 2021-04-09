import React from "react";
import PropTypes from "prop-types";

const Select = ({options}) => {
  return (
    <select>
      { options.map((label, value) =>
        <option key={value}>{label}</option>
      )}
    </select>
  )
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired
}

Select.defaultProps = {
  options: [
    {
      label: 'Choose a value',
      value: ''
    }
  ]
}

export default Select
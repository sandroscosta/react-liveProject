import React, { useState, useEffect } from "react";
import Select from "./Select";
import fetchData from "../../utils/fetchData";

const DataSelect = (props) => {
  const [options, setOptions] = useState([])

  useEffect(() => {
    fetchData(props.url).then(data => setOptions(data))
  }, [])

  return (
    <Select options={options}/>
  )
}

export default DataSelect
import React, { useState, useEffect } from "react";
import Select from "./Select";
import fetchData from "../../utils/fetchData";

const DataSelect = ({options}) => {
  const selectOpts = options
  const [selected, setSelected] = useState('sales')
  const [data, setData] = useState([])

  const fetchURL = process.env.REACT_APP_BASE_URL

  const handleSelectChange = (event) => {
      console.log(event.target.value)
      setSelected(event.target.value)
  }

  useEffect(() => {
    fetchData(`${fetchURL}/${selected}`).then(response => setData(response))
  }, [selected, fetchURL])

  return (
      <>
        <Select options={selectOpts} selectChange={handleSelectChange}/>
        <ul>
        {data.map((elem) => <li key={elem.timestamp}>{elem.timestamp} - {elem.amount}</li>) }
        </ul>
      </>
  )
}

export default DataSelect
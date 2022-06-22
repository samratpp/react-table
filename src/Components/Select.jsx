import React from 'react'
import './component.css';

const Select = (props) => {
  return (
    <>
      <select onChange={props.handleSelectChange} name={props.name} className="select-tab">
        <option value={0}>Init</option>
        <option value={1}>Aesc</option>
        <option value={2}>Desc</option>
      </select>
    </>
  )
}

export default Select
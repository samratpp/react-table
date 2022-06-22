import React, { useState, useEffect } from 'react'
import './component.css';
import Select from './Select';

const Table = ({ data }) => {

  // set data from props 
  const [tdata, setTdata] = useState();

  useEffect(() => {
    if (data) {
      setTdata(data.results);
    }
  }, [data])

  // sort function name is array of properties to be accessed 
  const sortName = (name, sort) => {
    let data2;
    if (sort == 1) {
      data2 = [...tdata].sort((a, b) => a[name[0]][name[1]] > b[name[0]][name[1]] ? 1 : -1);
    } else if (sort == 2) {
      data2 = [...tdata].sort((a, b) => a[name[0]][name[1]] < b[name[0]][name[1]] ? 1 : -1);
    } else {
      data2 = data.results;
    }
    setTdata(data2);
  }

  // name comes from the select and is split into arrays to be accessed in above function 
  const handleSelectChange = (e) => {
    sortName(e.target.name.split('.'), e.target.value);
  }


  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>
              S.No
              {/* could not find a way to order Sno as this was added dynamically through map loop  */}
            </th>
            <th>
              Full Name
              <Select handleSelectChange={handleSelectChange} name="name.first" />
            </th>
            <th>
              Location
              <Select handleSelectChange={handleSelectChange} name="location.country" />
            </th>
            <th>
              DOB
              <Select handleSelectChange={handleSelectChange} name="dob.date" />
            </th>
          </tr>
        </thead>
        <tbody>
          {tdata?.map((info, i) => {
            return (
              <tr key={i}>
                <td>{i + 1}</td>
                <td className="img-row">
                  <img src={info.picture.thumbnail} alt={info.name.first} />
                  {`${info.name.title} ${info.name.first} ${info.name.last}`}
                </td>
                <td>{info.location.country}</td>
                <td>{info.dob.date}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
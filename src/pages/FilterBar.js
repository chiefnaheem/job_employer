import React, {useState} from "react";

const FilterBar = ({ filterOutput }) => {

  const [jobType, setJobType] = useState(0);
  const [jobLocation, setJobLocation] = useState(0);
  
  const handleJobChange = () => {
    let a = document.querySelector("#job-type").value;
    let b = document.querySelector("#job-location").value;
    setJobType(a);
    setJobLocation(b);
    filterOutput(a, b);
  }
  
  return (
    <>
      <div className="col-md-4 col-6">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">
              <i className="fa fa-check-circle-o mr-1" />
              Job Type
            </label>
          </div>
          <select className="custom-select" id="job-type" value={jobType} onChange={handleJobChange}>
            <option value="0">Choose Job Type...</option>
            <option value="1">Full Time</option>
            <option value="2">Contract</option>
            <option value="3">Part Time</option>
          </select>
        </div>
      </div>
      <div className="col-md-4 col-6">
        <div className="input-group input-group-sm mb-3">
          <div className="input-group-prepend">
            <label className="input-group-text">
              <i className="fa fa-compass mr-1" />
              Location
            </label>
          </div>
          <select className="custom-select" id="job-location" value={jobLocation} onChange={handleJobChange}>
            <option value="0">Choose Job Location...</option>
            <option value="1">Lagos</option>
            <option value="2">Abuja</option>
            <option value="3">Jos</option>
            <option value="4">Remote</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FilterBar;
/* eslint-disable no-undef */
import { createContext, useState } from 'react';

const JobContext = createContext({
  myJobs: [],
  totalJobs: 0,
  addJobs: (jobs) => {},
  removeJobs: (jobId) => {},
  itemIsMarked: (jobId) => {}
});

export function JobContextProvider(props) {
  const [userJobs, setUserJobs] = useState([]);

  function addJobsHandler(jobToAdd) {
    setUserJobs((prevJobs) => {
      return prevJobs.concat(jobToAdd);
    });
  }

  function removeJobsHandler(jobId) {
    setUserJobs((prevJobs) => {
      return prevJobs.filter((job) => job.id !== jobId);
    });
  }

  function itemIsMarkedHandler(jobId) {
    return userJobs.some(job => job.id === jobId);
  }

  const context = {
    myJobs: userJobs,
    totalJobs: userJobs.length,
    addJobs: addJobsHandler,
    removeJobs: removeJobsHandler,
    itemIsMarked: itemIsMarkedHandler
  };

  return (
    <JobContext.Provider value={context}>
      {props.children}
    </JobContext.Provider>
  );
}

export default JobContext;
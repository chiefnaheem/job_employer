import { useContext } from 'react';

import Card from '../Interface/Card';
import classes from './Jobs.module.css';
import JobContext from '../../profile/profile-context';

function Jobs({job, displayJob}) {
  const jobsCtx = useContext(JobContext);
  const itemIsMarked = jobsCtx.itemIsMarked(job.id);
//   const itemIsRemoved = jobsCtx.removeJobs
  function toggleJobStatusHandler() {
    if (itemIsMarked) {
      jobsCtx.removeJobs(job.id)
    //    itemIsRemoved(job.id)
    } else {
      jobsCtx.addJobs({
        id: job.id,
        type: job.type,
        createdAt: job.createdAt,
        position: job.position,
        company: job.company,
        location: job.location,
        howToApply: job.howToApply,
        companyUrl: job.companyUrl,
        description: job.description,
        languageCategory: job.languageCategory
      });
    }
  }
  
  return (
    <li className={classes.item}>
      <Card>
        <div
        className="card border-0 shadow-sm"
        onClick={() => displayJob(job.id)}
        >
        {/* <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
            <p className="small text-secondary"> Posted On: <b>{job.createdAt.substring(0, 10).split('-').reverse().join('/')}</b></p>
            <p className={`badge badge-${job.type === "Full Time" ? "success" : job.type === "Contract" ? "info" : "warning"}`}>{job.type}</p>
            </div>
            <h5 className="font-weight-bold">{job.title}</h5>
            <p className="text-dark font-weight-bold small">
            <span> {job.company}</span>{" "}
            | <span> {job.location}</span>
            </p>
            <a href={`${job.url}`} className="btn btn-outline-primary btn-sm" target="_blank" rel="noreferrer">
            Apply Now 
            </a>
            <button onClick={toggleJobStatusHandler}>
                {itemIsMarked ? 'Remove from Profile' : 'Add To Profile'}
            </button>
        </div> */}
        <div className="card" style={{width: '20rem', height:'15rem', display:'inline-block', position:'relative', marginRight:''}}>
        <div className="card-body col-md-12 text-center">
              <div className="d-flex justify-content-between align-items-center">
                {/* <p className="small text-secondary"><i className="fa fa-clock-o"></i> Posted On: <b>{job.createdAt.substring(0, 10).split('-').reverse().join('/')}</b></p> */}
                <p className="small text-secondary"><i className="fa fa-clock-o"></i> Posted On: <b>{job?.createdAt?.split('T')[0]}</b></p>

                <p>{job.type}</p>
              </div>
              <h5 className="font-weight-bold">{job.position}</h5>
              <p className="text-dark font-weight-bold small">
              <span><i className="fa fa-building-o"></i> {job.company}</span>{" "}
              | <span><i className="fa fa-map-marker"></i> {job.location}</span>
              </p>
             <a href={`${job.howToApply}`} className="btn btn-outline-primary btn-sm" target="_blank" rel="noreferrer"> 
              Apply Now 
              </a> 
              {/* <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#applyModal">
                apply now
              </button> */}

            <button onClick={toggleJobStatusHandler}>
                {itemIsMarked ? 'Remove from Profile' : 'Add To Profile'}
            </button>
        </div>
      </div>
        </div>
      </Card>
    </li>
  );
}

export default Jobs;
import { useContext } from 'react';

import JobContext from '../profile/profile-context';
import JobList from '../components/Jobs/JobList';

function ProfilePage() {
  const jobsCtx = useContext(JobContext);

  let content;

  if (jobsCtx.totalJobs === 0) {
    content = <p>You got no jobs yet. Start adding some?</p>;
  } else {
    content = <JobList jobs={jobsCtx.myJobs} />;
  }

  return (
    <section>
      <h1>Jobs Applied</h1>
      {content}
    </section>
  );
}

export default ProfilePage;
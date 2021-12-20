import { Route, Routes } from 'react-router-dom';

import AllJobs from './pages/AllJobs';
import Profiles from './pages/Profiles';
import Layout from './components/Layout/Layout';
// import Contact from './pages/Contact';
import Home from './pages/Home';

function App() {
  return (
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/jobs' element={<AllJobs /> } />
          {/* <Route path='/contact-us' element={<Contact />} /> */}
          <Route path='/profile' element={<Profiles />} />
          
        </Routes>
      </Layout>
  );
}

export default App;
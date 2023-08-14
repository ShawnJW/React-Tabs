import { useState, useEffect } from 'react';
import Title from "./Title.jsx";
import JobInfo from "./JobInfo.jsx";
import BtnContainer from "./BtnContainer.jsx";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [loading, setLoading] = useState(true);
    const [jobs, setJobs] = useState([]);
    const [currentJob, setCurrentJob] = useState(0);

    const fetchJobs = async () => {
        const response = await fetch(url);
        const newJobs = await response.json();
        setJobs(newJobs);
        setLoading(false);
    }

    useEffect(() => {
        fetchJobs();
    }, []);



    if (loading) {
        return (
            <section className='jobs-center'>
                <div className='loading'>
                </div>
            </section>
        );
    }
  return (
        <section className="jobs-center">
            <Title text="jobs" />
            <BtnContainer jobs={jobs} currentJob={currentJob} setCurrentJob={setCurrentJob}/>
            <JobInfo jobs={jobs} currentJob={currentJob}/>
        </section>
  );
};
export default App;

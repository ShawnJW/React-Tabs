import Duties from "./Duties.jsx";

const jobInfo = ({jobs, currentJob}) => {
    const { company, dates, title, duties } = jobs[currentJob];
    return (
            <article className="job-info">
                    <h4>{title}</h4>
                    <span className='job-company'>{company}</span>
                    <p className='job-date'>{dates}</p>
                    <Duties duties={duties} />
            </article>
    );
}

export default jobInfo;


const BtnContainer = ({jobs, currentJob, setCurrentJob}) => {
    return (
        <div className="btn-container">
            { jobs.map((job, index) => {
                console.info(currentJob, index);
                return (
                    <button key={job.id}
                            onClick={() => setCurrentJob(index)}
                            className={ index === currentJob ? 'job-btn active-btn' : 'job-btn'}
                    >
                        {job.company}
                    </button>
                )
            }
            )}
        </div>
    )
}

export default BtnContainer;
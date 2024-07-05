import {useState, useEffect} from 'react'
import JobTem from './JobTem'

const JobListing = ({isHome=false}) => {

  const [jobs,setJobs]=useState([])
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    const apiUrl = isHome ? "/api/jobs?_limit=3" : "/api/jobs"
    const fetchData=async ()=>{
      const data = await fetch(apiUrl);
      const res = await data.json()
      setJobs(res)
      setLoading(false)
    }
    fetchData()
  },[]);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browse Jobs'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? <h2>Loading...</h2> : (
            <>
              {jobs.map((job)=>(
                <JobTem key={job.id} job={job}/>          
              ))}  
            </>
          )}      
        </div>
      </div>
    </section>
  )
}

export default JobListing
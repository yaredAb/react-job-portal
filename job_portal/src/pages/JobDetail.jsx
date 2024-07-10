
import {useLoaderData} from 'react-router-dom'
import JobDetailTemp from '../components/JobDetailTemp'

const JobDetail = ({deleteJob}) => {
    
    const job = useLoaderData()
    return (
      <JobDetailTemp job={job} deleteJob={deleteJob}/>
    )
}

const jobLoader = async ({params}) =>{
  const res = await fetch (`/api/jobs/${params.id}`)
  const data = await res.json()

  return data
}

export {JobDetail as default, jobLoader}
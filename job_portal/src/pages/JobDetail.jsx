import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import JobDetailTemp from '../components/JobDetailTemp'


const JobDetail = () => {

    const [job,setJob]=useState(null)
    const [loading, setLoading]=useState(true)
    const { id } = useParams()

    useEffect(()=>{
        const fetchJob=async ()=>{
            const res = await fetch(`/api/jobs/${id}`)
            const data = await res.json()
            console.log("the datas are ", data)
            setJob(data)
            setLoading(false)
        }
        fetchJob()

    },[])

  return (
    <div>{loading ? <h1>Loading</h1> : <JobDetailTemp job={job}/>}</div>
  )
}

export default JobDetail
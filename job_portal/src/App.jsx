
import 'react-toastify/dist/ReactToastify.css'
import {Route, createBrowserRouter, createRoutesFromElements, RouterProvider} from 'react-router-dom'
import AddJob from './pages/AddJob'
import PageNotFound from './pages/PageNotFound'
import Jobs from './pages/Jobs'
import JobDetail, {jobLoader} from './pages/JobDetail'
import HomePage from './pages/HomePage'
import EditJob from './pages/EditJob'
import MainLayout from './layout/MainLayout'




const App = () => {

 //Add Job
 const addJob = async (newJob) =>{
  const res = await fetch ('/api/jobs',{
   method : 'POST',
   headers : {
    'Content-Type': 'application/json'
   },
   body: JSON.stringify(newJob)
  })
 }

 //Delete Job
 const deleteJob = async (id)=>{
  const res = await fetch (`/api/jobs/${id}`,{
   method : 'DELETE',
  })
 }

 //Edit Job

 const editJob = async (job) =>{
    const res = await fetch (`/api/jobs/${job.id}`,{
        method : 'PUT',
        headers : {
         'Content-Type': 'application/json'
        },
        body: JSON.stringify(job)
       })
    
 }

 const router =createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
        
        <Route index element={<HomePage />} />        
        <Route path='/add-job' element={<AddJob addNewJob={addJob}/>} />
        <Route path='/edit-Job/:id' element={<EditJob updateJob={editJob}/>} loader={jobLoader} />
        <Route path='/jobs' element={<Jobs />}/>
        <Route path='/jobs/:id' element={<JobDetail deleteJob={deleteJob}/>} loader = {jobLoader} />
        <Route path='*' element={< PageNotFound />} />
        
    </Route>
)
)
 
 return <RouterProvider router={router} />
}

export default App
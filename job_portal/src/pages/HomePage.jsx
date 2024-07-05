import Hero from '../components/Hero'
import HomeCars from '../components/HomeCars'
import JobListing from '../components/JobListing'
import ViewAll from '../components/ViewAll'

const HomePage = () => {
  return (
    <>
        <Hero />
        <HomeCars />
        <JobListing isHome={true}/>
        <ViewAll />
    </>
  )
}

export default HomePage
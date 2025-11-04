import React from 'react'
import Card from './components/card'

const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    designation: "Frontend Developer",
    datePosted: "3 days ago",
    postTag1: "Full-time",
    postTag2: "Senior Level",
    pay: "$75",
    location: "Mountain View, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/apple.com",
    companyName: "Apple",
    designation: "iOS Developer",
    datePosted: "1 week ago",
    postTag1: "Full-time",
    postTag2: "Junior Level",
    pay: "$60",
    location: "Cupertino, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/facebook.com",
    companyName: "Meta",
    designation: "React Developer",
    datePosted: "2 weeks ago",
    postTag1: "Part-time",
    postTag2: "Junior Level",
    pay: "$40",
    location: "Menlo Park, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    designation: "Backend Engineer",
    datePosted: "5 days ago",
    postTag1: "Full-time",
    postTag2: "Senior Level",
    pay: "$70",
    location: "Seattle, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    designation: "Full Stack Developer",
    datePosted: "10 days ago",
    postTag1: "Full-time",
    postTag2: "Junior Level",
    pay: "$65",
    location: "Los Gatos, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    designation: "Cloud Engineer",
    datePosted: "2 weeks ago",
    postTag1: "Full-time",
    postTag2: "Senior Level",
    pay: "$72",
    location: "Redmond, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/tesla.com",
    companyName: "Tesla",
    designation: "DevOps Engineer",
    datePosted: "1 month ago",
    postTag1: "Part-time",
    postTag2: "Junior Level",
    pay: "$50",
    location: "Palo Alto, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/uber.com",
    companyName: "Uber",
    designation: "UI/UX Engineer",
    datePosted: "3 days ago",
    postTag1: "Full-time",
    postTag2: "Senior Level",
    pay: "$68",
    location: "San Francisco, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/snap.com",
    companyName: "Snap Inc.",
    designation: "Frontend Developer",
    datePosted: "1 week ago",
    postTag1: "Full-time",
    postTag2: "Junior Level",
    pay: "$55",
    location: "Santa Monica, USA"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    designation: "Backend Engineer",
    datePosted: "2 weeks ago",
    postTag1: "Part-time",
    postTag2: "Senior Level",
    pay: "$60",
    location: "San Francisco, USA"
  }
];


const App = () => {
  return (
    <div className='parent'>
        {jobOpenings.map(function(elem){
          return <Card company={elem.companyName} logo={elem.brandLogo} date={elem.datePosted} tg1={elem.postTag1} tg2={elem.postTag2} pay={elem.pay} location={elem.location} role={elem.designation} />
        })}
    </div>
  )
}

export default App

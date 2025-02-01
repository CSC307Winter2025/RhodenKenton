'use client'

import JobItem from '@/components/jobItem';
import { useState } from 'react';
import './globals.css'


export interface Job {
  id: number;
  name: string;
  date: number;
  description?: string;
}

export default function Home() {

  const [jobList, setJobList] = useState<Job[]>([{
    id: 1,
    name: "Raytheon",
    date: 2004
  }, {
    id: 2,
    name: "Revolution Prep",
    date: 2007,
    description: "test"
  }, {
    id: 3,
    name: "Revolution Prep 2.0",
    date: 2007,
    description: "test"
  }]);

  let jobHtml = jobList.map((job) => <JobItem key={job.id} job={job}></JobItem>);

  function addJob() {
    const newJobList: Job[] = [...jobList, {
      id: jobList.length + 1,
      name: 'New Job',
      description: 'New Job',
      date: 2025
    }]
    setJobList(newJobList);
  }

  return (
    <div className="center">
      <h1>Kenton Rhoden's Resume</h1>
      <h2>Contact me here:</h2>
      <p>
        <b>Email:</b> krhoden@calpoly.edu&emsp;
        <b>Phone number:</b> (559)-289-2505&emsp;
        <b>Github:</b> http://github.com/Kenton227
      </p>
      <h2>Projects</h2>
      <ul className="list">
        <li>Senior Citizen Jigsaw Puzzle Game</li>
      </ul>
      <div>
        <h2>Job List</h2>
        <ul className="list">
          {jobHtml}
        </ul>
        <button onClick={addJob}>Add Job</button>
      </div>
      <h2>Skills</h2>
      
    </div>
  );
}

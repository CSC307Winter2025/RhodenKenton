'use client'

import JobItem from '@/components/jobItem';
import { useState } from 'react';
import Link from 'next/link';


export interface Job {
  id: number;
  name: string;
  date: number;
  description: string;
}

export default function Home() {

  const [jobList, setJobList] = useState<Job[]>([{
    id: 1,
    name: "Summer Undergraduate Research Program",
    date: 2024,
    description: "Worked on resume generation and optimization for ATS systems"
  }, {
    id: 2,
    name: "Senior Citizen Jigsaw Puzzle Game Assistant",
    date: 2024,
    description: "Collaborated with peers to delegate tasks, brainstorm ideas, create a Jigsaw game, and fix issues"
  }]);

  let sortedJobList = [...jobList].sort((a, b) => b.date - a.date);
  let jobHtml = sortedJobList.map((job) => <JobItem key={job.id} job={job}></JobItem>);

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
        <b>Github:</b> <Link href="http://github.com/Kenton227">http://github.com/Kenton227</Link>
      </p>
      <h2>Projects</h2>
      <ul className="list">
        <li>Banking Data Encryption/Decryption</li>
        <li>Virtual World Game</li>
        <li>Huffman Encoding Algorithm</li>
      </ul>
      <h2>Skills</h2>
      <ul className="list">
        <li>Unix</li>
        <li>Object oriented programming</li>
        <li>Binary exploitation</li>
      </ul>
      <div>
        <h2>Job List</h2>
        <ul className="list">
          {jobHtml}
        </ul>
        <button onClick={addJob}>Add Job</button>
      </div>
    </div>
  );
}

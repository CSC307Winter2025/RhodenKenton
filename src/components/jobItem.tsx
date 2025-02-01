import Link from 'next/link';
import type { Job } from '../app/page'

interface JobItemProps {
  job: Job;
}

export default function JobItem({ job }: JobItemProps) {
  //logic here
  return (
    <li key={job.id}>
      <span>
        <Link href={`/job/${job.id}?name=${encodeURIComponent(job.name)}&description=${encodeURIComponent(job.description)}`}>{job.name}</Link>
      </span>
      <span> {job.date}</span>
    </li>
  );
}
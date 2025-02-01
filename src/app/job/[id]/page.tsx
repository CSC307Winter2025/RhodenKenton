import Link from 'next/link';
import type { Job } from '../../page'

interface JobProps {
  params: Job;
}

export default function Job({params}: JobProps) {
  return (
    <div>
      This is more information about my job number: {params?.id}
      <br/>
      <p>Job description: {params.description}</p>
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}
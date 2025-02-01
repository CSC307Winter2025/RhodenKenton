'use client'

import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation'

export default function Job() {

  const params = useParams();
  const searchParams = useSearchParams();
  const description = searchParams.get("description")
  const name = searchParams.get("name")

  return (
    <div className="center">
      <br/>
      This is more information about job id: {params?.id}
      <h2>{name}</h2>
      Job description: {description}
      <br/>
      <br/>
      <Link href="/">Home</Link>
    </div>
  );
}
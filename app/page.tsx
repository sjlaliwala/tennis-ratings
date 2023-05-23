import Image from 'next/image'
import { RATING_VERSIONS, RatingVersion } from '@/lib/ratings'
import RatingView from '@/app/RatingView'

async function getRatingVersions(): Promise<RatingVersion[]> {
  return RATING_VERSIONS
}

export default async function Home() {
  const ratingVersions = await getRatingVersions();
  
  return (
    <main className="flex flex-col min-h-screen w-screen p-10">
      <div>
        <RatingView ratingVersions={ratingVersions}/>
      </div>
    </main>
  )
}

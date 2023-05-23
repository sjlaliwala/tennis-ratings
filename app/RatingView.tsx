'use client'

import { RatingVersion, AMATEUR, RatingSystem, Rating, RATING_BOUNDS } from "@/lib/ratings"
import React, { useState } from "react"
import Select from 'react-select'

interface RatingGridProps {
  ratingSystems: RatingSystem[]
}

const RatingGrid = ({ ratingSystems }: RatingGridProps) => {
  const numCols = ratingSystems.length
  return (
    <div className={`grid grid-cols-2 gap-1 lg:text-base`}>
      { ratingSystems.map((ratingSystem) => (
        <div key={ratingSystem.name} className="flex flex-col space-y-0.5 h-screen justify-center">
          <h3 className="flex justify-center">{ratingSystem.name}</h3>
          { ratingSystem.ratings.map((rating) => {
            const height = `${rating.range.max - rating.range.min}%`
            console.log(height)
            return (
              <div 
                key={`${ratingSystem.name}-${rating.name}`} 
                style={{ height: height }} 
                className={`flex px-2 justify-center items-center bg-blue-300 rounded-md shadow-sm`}
              >
                {rating.name}
              </div>
            )
          })}
      </div>
      ))}
    </div>
  )
}

interface RatingViewProps {
  ratingVersions: RatingVersion[]
}

export default function RatingView({ ratingVersions }: RatingViewProps) {
  const [selectedVersion, setSelectedVersion] = useState(AMATEUR)
  const ratingSystems = ratingVersions.filter((rv) => rv.name === selectedVersion)[0].ratingSystems

  return (
    <React.Fragment>
      <span>Rating Version</span>
      <Select
        id="version-select"
        className="basic-single"
        classNamePrefix="select"
        defaultValue={{value: AMATEUR, label: AMATEUR}}
        name="Rating Versions"
        options={ratingVersions.map(({ name }: RatingVersion) => ({ value: name, label: name }))}
        onChange={(e) => setSelectedVersion(e?.value)}
      />

      <RatingGrid ratingSystems={ratingSystems} />
    </React.Fragment>
  )
}
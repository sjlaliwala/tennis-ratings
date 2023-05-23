export const AMATEUR = 'Amateur'
export const COLLEGE = 'College'
export const PRO = 'Pro'

export const RATING_BOUNDS = [0, 100]

export interface Range {
  min: number,
  max: number
}

export interface Rating {
  name: string,
  description?: string,
  range: Range
}

export interface RatingSystem {
  name: string,
  backgroundColor: string,
  ratings: Rating[]
}

export interface RatingVersion {
  name: string,
  ratingSystems: RatingSystem[]
}

const AMATEUR_BASE_RATING_SYSTEM: RatingSystem = {
  name: 'Reference',
  backgroundColor: 'bg-gray-300',
  ratings: [
    {name: 'Development', range: {min: 0, max: 15}},
    {name: 'Beginner', range: {min: 15, max: 35}},
    {name: 'Intermediate', range: {min: 35, max: 63}},
    {name: 'Advanced', range: {min: 63, max: 87}},
    {name: 'Pro', range: {min: 87, max: 100}},
  ]
}

const NTRP_RATING_SYSTEM: RatingSystem = {
  name: 'NTRP',
  backgroundColor: 'bg-blue-200',
  ratings: [
    {name: '1.0', range: {min: 0, max: 4}},
    {name: '1.5', range: {min: 4, max: 10}},
    {name: '2.0', range: {min: 10, max: 15}},
    {name: '2.5', range: {min: 15, max: 23}},
    {name: '3.0', range: {min: 23, max: 33}},
    {name: '3.5', range: {min: 33, max: 47}},
    {name: '4.0', range: {min: 47, max: 58}},
    {name: '4.5', range: {min: 58, max: 67}},
    {name: '5.0', range: {min: 67, max: 75}},
    {name: '5.5', range: {min: 75, max: 83}},
    {name: '6.0', range: {min: 83, max: 90}},
    {name: '6.5', range: {min: 90, max: 96}},
    {name: '7.0', range: {min: 96, max: 100}},
  ]
}

export const RATING_VERSIONS: RatingVersion[] = [
  {
    name: AMATEUR,
    ratingSystems: [AMATEUR_BASE_RATING_SYSTEM, NTRP_RATING_SYSTEM]
  },
  {
    name: COLLEGE,
    ratingSystems: []
  },
  {
    name: PRO, 
    ratingSystems: []
  }
]
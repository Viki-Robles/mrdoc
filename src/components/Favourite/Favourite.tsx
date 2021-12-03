import React from 'react'
import { useFavourite } from './FavouriteProvider'

interface FavouriteProps {
  doctor_id: string
}
export const Favourite = ({ doctor_id }: FavouriteProps): JSX.Element => {
  const { isFaved, setFavouritedArray } = useFavourite()
  const favouriteDoctor = isFaved(doctor_id)

  return (
    <button onClick={setFavouritedArray}>
      {!favouriteDoctor ? 'isFavourite' : 'is not'}
    </button>
  )
}

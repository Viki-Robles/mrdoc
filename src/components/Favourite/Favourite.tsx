import React from 'react'
import { useFavourite } from './FavouriteProvider'

interface FavouriteProps {
  doctor_id: string
}
export const Favourite = ({ doctor_id }: FavouriteProps): JSX.Element => {
  const { isFaved, setFavourites } = useFavourite()
  const favouriteDoctor = isFaved(doctor_id)

  const handleToggleFave = (): void => {
    setFavourites(doctor_id)
  }
  return (
    <button onClick={handleToggleFave}>
      {favouriteDoctor ? 'isFavourite' : 'is not'}
    </button>
  )
}

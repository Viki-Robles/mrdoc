import React from 'react'
import { Image, IconButton } from 'theme-ui'
import { useFavourite } from './FavouriteProvider'
import emptyheart from '../NavBar/images/emptyHeart.svg'
import fullheart from '../NavBar/images/fullHeart.svg'

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
    <IconButton onClick={handleToggleFave}>
      {favouriteDoctor ? <Image src={fullheart} /> : <Image src={emptyheart} />}
    </IconButton>
  )
}

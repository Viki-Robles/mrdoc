import React, { useContext, ReactNode, useState } from 'react'
import useLocalStorageState from 'use-local-storage-state'

// interface FavouriteContextProps {
//   isFavourited: string[]
//   setIsFavourited: () => void
// }

// interface FavouriteProviderProps {
//   children: ReactNode
// }

// const FavouriteContext = React.createContext<FavouriteContextProps>({
//   isFavourited: [],
//   setIsFavourited: () => {
//     console.log('is favourited')
//   },
// })

// export const useFavourite = () => {
//   const { isFavourited, setIsFavourited } = useContext(FavouriteContext)

//   return {
//     isFavourited,
//     setIsFavourited,
//   }
// }

// export const FavouriteProvider = ({
//   children,
// }: FavouriteProviderProps): JSX.Element => {
//   const [favouritedStorage, setIsFavouriteStorage] = useLocalStorageState(
//     'favourited-storage',
//     [],
//   )

//   const isFaved = (doctor_id: string) => {
//     return favouritedStorage.includes(doctor_id)
//   }

//   const setFavourite = (doctor_id) => {
//     const isFavourited = isFaved(doctor_id)
//     if (!isFaved) {
//       favouritedStorage.push(isFavourited)
//       setIsFavouriteStorage(favouritedStorage)
//     }
//   }

//   return <FavouriteContext.Provider>{children}</FavouriteContext.Provider>
// }

interface FavouriteProps {
  doctor_id: string
}

export const Favourite = ({ doctor_id }: FavouriteProps): JSX.Element => {
  const [isFavourited, setIsFavourited] = useState<boolean>(false)
  const [favouritedArray, setFavouritedArray] = useLocalStorageState<string[]>(
    'favourited-storage',
    [],
  )

  const isFaved = (doctor_id: string): boolean => {
    return favouritedArray.includes(doctor_id)
  }
  const handdleFavourited = () => {
    const isFavouritedDoctor = isFaved(doctor_id)
    if (!isFavouritedDoctor) {
      const storageFaves = [...favouritedArray, doctor_id]
      setFavouritedArray(storageFaves)
      console.log('faves', storageFaves)
    }

    return { handdleFavourited, isFaved }
  }
  return (
    <button onClick={handdleFavourited}>
      {!isFavourited ? 'is Favourited' : 'is not Favourited'}
    </button>
  )
}

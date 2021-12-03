import React, { useContext, ReactNode } from 'react'
import useLocalStorageState from 'use-local-storage-state'

interface FavouriteProps {
  doctor_id: string
  children: ReactNode
}

interface FavouriteContextProps {
  isFaved: (doctor_id: string) => boolean
  faves: string[]
  setFavouritedArray: () => void
}

interface UseFavouriteReturn {
  isFaved: (doctor_id: string) => boolean
  setFavouritedArray: () => void
  faves: string[]
}

const FavouritedContext = React.createContext<FavouriteContextProps>({
  faves: [],
  setFavouritedArray: () => {
    console.log('favourited-doctor')
  },
  isFaved: (doctor_id: string): boolean => {
    return false
  },
})

export const useFavourite = (): UseFavouriteReturn => {
  const { faves, setFavouritedArray, isFaved } = useContext(FavouritedContext)
  return { faves, setFavouritedArray, isFaved }
}

export const FavouriteProvider = ({
  doctor_id,
  children,
}: FavouriteProps): JSX.Element => {
  const [faves, setFavouritedArray] = useLocalStorageState<string[]>(
    'favourited-storage',
    [],
  )

  const isFaved = (doctor_id: string): boolean => {
    return faves.includes(doctor_id)
  }

  const handdleFavourited = () => {
    const isFavouritedDoctor = isFaved(doctor_id)
    if (!isFavouritedDoctor) {
      const storageFaves = [...faves, doctor_id]
      setFavouritedArray(storageFaves)
      console.log('faves', storageFaves)
    }

    return { faves, isFaved, handdleFavourited }
  }
  return (
    <FavouritedContext.Provider
      value={{ isFaved, faves, setFavouritedArray: handdleFavourited }}
    >
      {children}
    </FavouritedContext.Provider>
  )
}

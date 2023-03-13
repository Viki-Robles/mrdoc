import React, { useContext, ReactNode } from "react";
import useLocalStorageState from "use-local-storage-state";

interface FavouriteProps {
  doctor_id: string;
  children: ReactNode;
}

interface FavouriteContextProps {
  isFaved: (doctor_id: string) => boolean;
  faves: string[];
  setFavourites: (doctor_id) => void;
}

interface UseFavouriteReturn {
  isFaved: (doctor_id: string) => boolean;
  setFavourites: (doctor_id) => void;
  faves: string[];
}

const FavouritedContext = React.createContext<FavouriteContextProps>({
  faves: [],
  setFavourites: (doctor_id) => {
    console.log("default setFavourite state");
  },
  isFaved: (doctor_id: string) => {
    return false;
  },
});

export const useFavourite = (): UseFavouriteReturn => {
  const { faves, setFavourites, isFaved } = useContext(FavouritedContext);
  return { faves, setFavourites, isFaved };
};

export default function FavouriteProvider({
  children,
}: FavouriteProps): JSX.Element {
  const [faves, setFavourites] = useLocalStorageState<string[]>(
    "favourited-storage",
    [],
  );

  const isFaved = (doctor_id: string): boolean => {
    return faves.includes(doctor_id);
  };

  const handdleFavourited = (doctor_id: string): void => {
    const isFavouritedDoctor = isFaved(doctor_id);
    if (!isFavouritedDoctor) {
      const storageFaves = [...faves, doctor_id];
      console.log("faves log", faves);
      setFavourites(storageFaves);
      console.log("setFavourites log", storageFaves);
    } else {
      const indexFavouritedId = faves.indexOf(doctor_id);
      const updatedFaves = faves;
      updatedFaves.splice(indexFavouritedId, 1);
      setFavourites(updatedFaves);
    }
  };
  return (
    <FavouritedContext.Provider
      value={{ isFaved, faves, setFavourites: handdleFavourited }}
    >
      {children}
    </FavouritedContext.Provider>
  );
}

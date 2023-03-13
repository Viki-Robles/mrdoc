import React, { useState, useEffect, useContext } from "react";
import { Image } from "theme-ui";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import BorderWrapper from "../BorderWrapper/BorderWrapper";
import { useUserContext } from "../../providers/AuthProvider";
import avatar from "../../images/avatar.png";

export interface ModifyUserPassword {
  password: string;
}

export default function UserProfile(): JSX.Element {
  const { user } = useUserContext();

  const db = getFirestore();
  // get user's uid
  const currentUserUid = getAuth().currentUser?.uid;
  // get user's profile
  // const userCollection = collection(db, 'users')
  // get user's document
  const docRef = doc(db, "users", currentUserUid as string);

  useEffect(() => {
    (async () => {
      try {
        const docSnap = await getDoc(docRef);
        console.log("userRef:", docSnap.data());
      } catch (error) {
        console.log(error);
      }
    })();
  });

  return (
    <BorderWrapper title="User Profile">
      <Image src={avatar} variant="images.avatarUser" />
    </BorderWrapper>
  );
}

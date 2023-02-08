import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { auth } from '../../src/config/firebase'

admin.initializeApp(functions.config().firebase)

const onSignUpCustomClaims = auth.onAuthStateChanged((user) => {
  const customClaims = {
    'https://hasura.io/jwt/claims': {
      'x-hasura-default-role': 'user',
      'x-hasura-allowed-roles': ['user'],
      'x-hasura-user-id': user?.uid,
    },
  }

  if (user !== null)
    return admin
      .auth()
      .setCustomUserClaims(user?.uid, customClaims)
      .then(() => {
        // Update real-time database to notify client to force refresh.
        const metadataRef = admin.database().ref('metadata/' + user.uid)

        // Set the refresh time to the current UTC timestamp.
        // This will be captured on the client to force a token refresh.
        return metadataRef.set({ refreshTime: new Date().getTime() })
      })
      .catch((error: Error) => {
        console.log(error)
      })

  return onSignUpCustomClaims
})

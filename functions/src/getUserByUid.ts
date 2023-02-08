import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import { UserRecord } from 'firebase-functions/lib/providers/auth'
import { APIResponse } from './api.models'

export const getUserByUid = async (
  uid: string,
): Promise<APIResponse<UserRecord>> => {
  try {
    const user = await admin.auth().getUser(uid)
    return {
      status: 200,
      data: user,
    }
  } catch (error) {
    functions.logger.error(`Error fetching user: ${JSON.stringify(error)}`)
    return {
      status: 400,
      error: {
        messages: ['Error fetching user'],
      },
    }
  }
}

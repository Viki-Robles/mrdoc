import { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios'
import { toast } from 'react-toastify'
import { isObject, isEmpty } from 'lodash'

const API_DEFAULT_MESSAGE_REQUEST = 'The request is invalid'

function handleError(serverError: any) {
  if (isObject(serverError)) {
    Object.entries(serverError).forEach(([, value]) => {
      const errorMessage = isEmpty(value) ? API_DEFAULT_MESSAGE_REQUEST : value
      toast.error(`${errorMessage}`)
    })
  }
}

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
  const accessToken = localStorage.getItem('access_token')

  if (accessToken) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${accessToken}`,
    }
  }

  return config
}

const onResponseError = (error: AxiosError): Promise<AxiosError> | null => {
  const { response } = error

  if (response?.status === 401) {
    localStorage.removeItem('access_token')
    localStorage.removeItem('profile')

    return null
  }

  handleError(error?.response?.data)
  return Promise.reject(error)
}

export default function setupInterceptorsTo(
  axiosInstance: AxiosInstance,
): AxiosInstance {
  axiosInstance.interceptors.request.use(onRequest, undefined)

  axiosInstance.interceptors.response.use(undefined, onResponseError)

  return axiosInstance
}

import axios from 'axios'
import config from './config'
import setupInterceptorsTo from './http-client-interceptor'

const instance = axios.create({
  baseURL: config.ApiUrl,
  headers: {
    'Content-type': 'application/json',
  },
})

export default setupInterceptorsTo(instance)

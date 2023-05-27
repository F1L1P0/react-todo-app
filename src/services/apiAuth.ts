import axios, { AxiosError, AxiosResponse } from 'axios'
import { CookieService } from '@/services/cookies/cookie.service'

const instanceAuth = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        accept: 'application/json',
    },
})

instanceAuth.interceptors.request.use(
    (config) => {
        try {
            const token = CookieService.getAccessToken()
            if (token) {
                // eslint-disable-next-line no-param-reassign
                config.headers!['Authorization'] = `Bearer ${token}`
            }
        } catch (err: any) {
            throw Error(err)
        }
        return config
    },
    (error) => {
        return Promise.reject(error)
    },
)

instanceAuth.interceptors.response.use(
    async <R>(response: AxiosResponse<R>) => {
        return response
    },
    async <R extends { code: string }>(error: AxiosError<R>) => {
        if (error.request.status === 401) {
            window.location.pathname = 'auth'
        }
        return Promise.reject(error)
    },
)

const getResponseBody = <R>(response: AxiosResponse<R>): R => response.data

export const requestsAuth = {
    post: async <T, R>(url: string, body?: T): Promise<R> => {
        return instanceAuth.post<T, AxiosResponse<R>>(url, body).then<R>(getResponseBody)
    },
}

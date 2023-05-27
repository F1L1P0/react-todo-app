import axios, { AxiosError, AxiosResponse } from 'axios'
import { CookieService } from '@/services/cookies/cookie.service'
import { RefreshTokenService } from '@/services/token/refreshToken.service'
import { Token } from '@/services/token/interface/token.interface'

const refreshToken: string = CookieService.getRefreshToken()
const accessToken: Token = CookieService.getAccessToken()

const instance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    headers: {
        'Content-type': 'application/json',
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`,
    },
})
instance.interceptors.response.use(
    <R>(response: AxiosResponse<R>) => {
        return response
    },
    async <R extends { code: string }>(error: AxiosError<R>) => {
        if (error.request.status === 401) {
            try {
                await RefreshTokenService.updateToken(refreshToken)
            } catch (err: any) {
                throw new Error(err)
            }
        }
        return Promise.reject(error)
    },
)

export const getResponseBodyApi = <R>(response: AxiosResponse<R>): R => response.data

export const requestsApi = {
    get: async <T, R>(url: string): Promise<R> => {
        return instance.get<T, AxiosResponse<R>>(url).then(getResponseBodyApi)
    },
    post: async <T, R>(url: string, body?: T): Promise<R> => {
        return instance.post<T, AxiosResponse<R>>(url, body).then<R>(getResponseBodyApi)
    },
    put: async <T, R>(url: string, body: T): Promise<R> => {
        return instance.put<T, AxiosResponse<R>>(url, body).then(getResponseBodyApi)
    },
    patch: async <T, R>(url: string, body: T): Promise<R> => {
        return instance.patch<T, AxiosResponse<R>>(url, body).then(getResponseBodyApi)
    },
    delete: async <R>(url: string): Promise<R> => {
        return instance.delete(url).then(getResponseBodyApi)
    },
}

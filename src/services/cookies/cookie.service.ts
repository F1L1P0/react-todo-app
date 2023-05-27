import Cookies from 'js-cookie'
import { NameToken } from '@/services/token/enum/tokenType.enum'
import { Token } from '@/services/token/interface/token.interface'

export const CookieService = {
    setToken: ({ name, hash }: Token): void => {
        Cookies.set(name, `${hash}`)
    },
    getAccessToken: (): Token => {
        return Cookies.get(NameToken.ACCESS_TOKEN)
    },
    getRefreshToken: (): string => {
        return Cookies.get(NameToken.REFRESH_TOKEN)
    },
    removeAccessToken: (): void => {
        return Cookies.remove(NameToken.ACCESS_TOKEN)
    },
    removeRefreshToken: (): void => {
        return Cookies.remove(NameToken.REFRESH_TOKEN)
    },
}

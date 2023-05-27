import { CookieService } from '@/services/cookies/cookie.service'
import { NameToken } from '@/services/token/enum/tokenType.enum'
import { AuthTokenList } from '@/services/token/interface/token.interface'
import { requestsAuth } from '@/services/apiAuth'

export const RefreshTokenService = {
    updateToken: async (refreshToken: string) => {
        const response: AuthTokenList = await requestsAuth.post('auth/refresh', { token: refreshToken })
        CookieService.setToken({
            name: NameToken.ACCESS_TOKEN,
            hash: response.access_token,
            // expiration: response.accessTokenExpiration,
        })
        CookieService.setToken({
            name: NameToken.REFRESH_TOKEN,
            hash: response.refresh_token,
            // expiration: response.refreshTokenExpiration,
        })
    },
}

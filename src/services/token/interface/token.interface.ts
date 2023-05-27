export interface Token {
    name: string
    hash: string
}

export interface TokenInfo {
    token: string
}

export interface AuthTokenList {
    access_token: string
    refresh_token: string
}

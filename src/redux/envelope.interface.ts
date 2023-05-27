export interface BasicEnvelope {
    error?: string | string[] | Record<string, string | string[]> | null
    error_code?: string | null
    status?: 'ok' | 'fail'
}

export interface ReducerEnvelope extends BasicEnvelope {
    isFetching: boolean
}

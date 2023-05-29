import { FC } from 'react'
import { Dashboard } from '@/pages/dashboard/Dashboard'
import { PokemonPage } from '@/pages/pokemon/PokemonPage'

export interface IRoute {
    path: string
    element: FC
}

export const routePublic: IRoute[] = [
    { path: '/', element: Dashboard },
    { path: '/pokemon', element: PokemonPage },
    { path: '*', element: Dashboard },
]

import { FC } from 'react'
import { Dashboard } from '@/pages/dashboard/Dashboard'

export interface IRoute {
    path: string
    element: FC
}

export const routePublic: IRoute[] = [
    { path: '/', element: Dashboard },
    { path: '*', element: Dashboard },
]

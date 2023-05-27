import { Role } from '@/services/exampleUser/enum/role.enum'

export interface ExampleUser {
    id: number
    firstName: string
    lastName: string
    avatar_id?: number
    create_date: string
    updated_date?: string
    role: Role
}

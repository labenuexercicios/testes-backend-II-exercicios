import { UserModel } from "../types"

export interface SignupInputDTO {
    name: unknown,
    email: unknown,
    password: unknown
}

export interface SignupOutputDTO {
    token: string
}

export interface LoginInputDTO {
    email: unknown,
    password: unknown
}

export interface LoginOutputDTO {
    token: string
}
export interface DeleteUserInputDTO{
    id: string
}
export interface GetUserInputDTO{
    id:string
}
export type GetAllOutputDTO = UserModel[]
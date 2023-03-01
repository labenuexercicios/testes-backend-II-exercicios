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
    token: unknown

}
export interface GetUserInputDTO{
    id:string
}
export interface GetByIdOutputDTO {
    user: UserModel
}
export type GetAllOutputDTO = UserModel[]
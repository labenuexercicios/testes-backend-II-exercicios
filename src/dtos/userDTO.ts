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

export type GetAllOutputDTO = UserModel[]

export interface RemoveInputUserDTO{
    id: string,
    token: string,
}

export interface RemoveOutputUserDTO{
    message: string,
}

export interface GetUserByID{
    id: string,
    token?: string| undefined,
}

export class UserDTO {

removeInputUser = (id: string, token:string ) :RemoveInputUserDTO =>{

    const result: RemoveInputUserDTO={
        id,
        token,
    }

    return result
}
}
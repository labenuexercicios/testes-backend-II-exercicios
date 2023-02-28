import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"
import { GetUserByID, LoginInputDTO, RemoveInputUserDTO, SignupInputDTO, SignupOutputDTO } from "../dtos/UserDTO"
import { BaseError } from "../errors/BaseError";
import {UserDTO} from '../dtos/UserDTO';

export class UserController {
    constructor(
        private userBusiness: UserBusiness,
    ) {}

    public signup = async (req: Request, res: Response) => {
        try {
            const input: SignupInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password
            }

            const output = await this.userBusiness.signup(input)

            res.status(201).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public login = async (req: Request, res: Response) => {
        try {
            const input: LoginInputDTO = {
                email: req.body.email,
                password: req.body.password
            }

            const output = await this.userBusiness.login(input)

            res.status(200).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public getAll = async (req: Request, res: Response) => {
        try {
            const output = await this.userBusiness.getAll()

            res.status(200).send(output)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                res.status(error.statusCode).send(error.message)
            } else {
                res.status(500).send("Erro inesperado")
            }
        }
    }

    public removeUser = async (req:Request, res: Response)=>{
        try {

            const input: RemoveInputUserDTO ={
                id: req.params.id,
                token: req.headers.authorization as string
            }

            await this.userBusiness.removeUser(input)

            res.status(201).send()
    
        } catch (error) {
            console.log(error)
        
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }   
        }
    }

    public getUserByID = async (req:Request, res: Response)=>{
        try {

            const input: GetUserByID ={
                id: req.params.id,
                token: req.headers.authorization as string
            }

            const output = await this.userBusiness.getUserByID(input)

            res.status(201).send(output)
    
    
        } catch (error) {
            console.log(error)
        
            if (req.statusCode === 200) {
                res.status(500)
            }
    
            if (error instanceof Error) {
                res.send(error.message)
            } else {
                res.send("Erro inesperado")
            }   
        }
    }
}
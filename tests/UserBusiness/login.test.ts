import { BADQUERY } from "dns"
import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginInputDTO } from "../../src/dtos/userDTO"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("login", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    
    test("login bem-sucedido em conta normal retorna token", async () => {
        const input: LoginInputDTO = {
            email: "normal@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.token).toBe("token-mock-normal")
    })

    test("login bem-sucedido em conta admin retorna token", async () => {
        const input: LoginInputDTO = {
            email: "admin@email.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        expect(response.token).toBe("token-mock-admin")
    })
    test("Dispara erro se e-mail não for string", async()=>{
        expect.assertions(2)
        try {
            const input: LoginInputDTO ={
                email: null,
                password:"bananinha"
            }
        const result = await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'email' deve ser string")
                expect(error.statusCode).toBe(400)
            }
            
        }
    })
    test("Dispara erro se password não for string", async()=>{
        expect.assertions(2)
        try {
            const input: LoginInputDTO ={
                email:"admin@email.com",
                password: null
            }
            const result = await userBusiness.login(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'password' deve ser string")
                expect(error.statusCode).toBe(400)
            }
        }
    })
    test("Dispara mensagem de erro caso e-mail não seja encontrado", async()=>{
        expect.assertions(2)
        try {
            const input: LoginInputDTO ={
                email: "email@mail",
                password: "bananinha"
            }
            const result = await userBusiness.login(input)
        } catch (error) {
            if(error instanceof NotFoundError){
                expect(error.message).toBe("'email' não cadastrado")
                expect(error.statusCode).toBe(404)
            }
        }
    })
    test("Dispara erro se senha estive incorreta", async()=>{
        expect.assertions(2)
        try {
            const input: LoginInputDTO ={
                email:"admin@email.com",
                password:"errada"
            }
            const result = await userBusiness.login(input)

        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("'password' incorreto")
                expect(error.statusCode).toBe(400)
            }
        }
    })
})
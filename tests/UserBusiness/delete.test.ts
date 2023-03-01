import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO, GetUserInputDTO } from "../../src/dtos/userDTO"
import { BadRequestError } from "../../src/errors/BadRequestError"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe ("Delete by Id",()=>{
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )
    test("Deve deletar usuário pelo id", async()=>{
        const input: DeleteUserInputDTO ={
            id:"id-mock-normal",
            token:"token-mock-admin"
        }
        const result = await userBusiness.deleteUser(input)
        expect(result).toEqual(undefined)
        
    })
    test("Dispara erro caso Id não seja encontrado", async()=>{
        expect.assertions(2)
        try {
            const input:DeleteUserInputDTO={
                id:"id-mok",
                token:"token-mock-admin"
            }
        const result = await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof NotFoundError){
            expect(error.message).toBe("Id não encontrado")
            expect(error.statusCode).toBe(404)
            }
        }
    })
    test("Dispara erro caso token não seja passado", async()=>{
        expect.assertions(2)
        try { const input:DeleteUserInputDTO={
            id:"id-mock-normal",
            token:null
        }
        const result = await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("requer token")
                expect(error.statusCode).toBe(400)

            }
        }
    })

    test("Dispara erro caso token seja inválido", async()=>{
        expect.assertions(2)
        try { const input:DeleteUserInputDTO={
            id:"id-mock-normal",
            token:"invalido"
        }
        const result = await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("token inválido")
                expect(error.statusCode).toBe(400)

            }
        }
    })
    test("Dispara erro caso user não seja admin", async()=>{
        expect.assertions(2)
        try { const input:DeleteUserInputDTO={
            id:"id-mock-normal",
            token:"token-mock-normal"
        }
        const result = await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof BadRequestError){
                expect(error.message).toBe("somente admins podem deletar contas")
                expect(error.statusCode).toBe(400)

            }
        }
    })
})
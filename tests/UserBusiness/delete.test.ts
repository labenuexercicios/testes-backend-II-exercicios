import { UserBusiness } from "../../src/business/UserBusiness"
import { DeleteUserInputDTO, GetUserInputDTO } from "../../src/dtos/userDTO"
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
        const input: GetUserInputDTO ={
            id:"id-mock"
        }
        const result = await userBusiness.deleteUser(input)
        expect(result).toEqual(undefined)
        
    })
    test("Dispara erro caso Id não seja encontrado", async()=>{
        expect.assertions(2)
        try {
            const input:DeleteUserInputDTO={
                id:"id-mok"
            }
        const result = await userBusiness.deleteUser(input)
        } catch (error) {
            if(error instanceof NotFoundError){
                            expect(error.message).toBe("Id não encontrado")
            expect(error.statusCode).toBe(404)
            }

        }
    })
})
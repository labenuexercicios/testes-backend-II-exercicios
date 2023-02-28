import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUserInputDTO } from "../../src/dtos/userDTO"
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
})
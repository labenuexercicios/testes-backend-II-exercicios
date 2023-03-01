import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUserInputDTO } from "../../src/dtos/userDTO"
import { NotFoundError } from "../../src/errors/NotFoundError"
import { USER_ROLES } from "../../src/types"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Get by Id", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Retorna usuário de acordo com id passado no input", async () => {

        const valorEsperado = {
            id: "id-mock",
            name: "Normal Mock",
            email: "normal@email.com",
            password: "bananinha",
            created_at: expect.any(String),
            role: USER_ROLES.NORMAL
        }
        const input: GetUserInputDTO = {
            id: "id-mock",

        }
        const result = await userBusiness.getUserById(input)

        expect(result).toEqual(valorEsperado)
    }
    )

    test("Dispara erro caso Id não seja encontrado", async () => {
        expect.assertions(2)
        try {
            const input: GetUserInputDTO ={
                id:"id-mk"
            }
            const result = await userBusiness.getUserById(input)
        } catch (error) {
            if(error instanceof NotFoundError){
                expect(error.message).toBe("Id não encontrado")
                expect(error.statusCode).toBe(404)
            }
        }
        // const input: GetUserInputDTO = {
        //     id: "id-mk"
        // }
        // expect(async () => { await userBusiness.getUserById(input) }).toThrow(NotFoundError)
    })
})

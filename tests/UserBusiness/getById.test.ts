import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUserInputDTO } from "../../src/dtos/userDTO"
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
            id: "id-mock"
        }
        const result = await userBusiness.getUserById(input)

        // expect(result?.id).toBe(valorEsperado.id)
        // expect(result?.name).toBe(valorEsperado.name)
        // expect(result?.email).toBe(valorEsperado.email)
        // expect(result?.password).toBe(valorEsperado.password)
        // expect(result?.created_at).toBe(valorEsperado.created_at)
        // expect(result?.role).toBe(valorEsperado.role)
        expect(result).toEqual(valorEsperado)
    }
    )
})

import { UserBusiness } from "../../src/business/UserBusiness"
import { RemoveInputUserDTO } from "../../src/dtos/UserDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("/:id", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Remover Users", async () => {
        const input: RemoveInputUserDTO = {token: "token-mock-admin", id: "id-mock"}

        const response = await userBusiness.removeUser(input)
        expect(response.message).toBe("Usuário removido com sucesso!")
    })
})
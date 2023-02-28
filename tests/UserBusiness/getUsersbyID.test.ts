import { UserBusiness } from "../../src/business/UserBusiness"
import { GetUserByID } from "../../src/dtos/UserDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"
import { USER_ROLES } from "../../src/types"

describe("/:id", () => {
    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Retorna User a partir do ID", async () => {
        const input: GetUserByID = {token:"token-mock-admin", id:"id-mock"}

        const response = await userBusiness.getUserByID(input)
        expect(response).toContainEqual({
            id: "id-mock",
            name: "Admin Mock",
            email: "admin@email.com",
            password: "hash-bananinha",
            createdAt: expect.any(String), // valor dinâmico (pode ser qualquer string)
            role: USER_ROLES.ADMIN
        })
    })
})
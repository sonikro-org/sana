import { helloMiddleware } from "./hello"
import { Response, Request } from "express"
describe("helloMiddleware", () => {

    const makeSut = () => {

        const mockRequest = {
            query: {}
        } as unknown as Request

        const mockResponse = {
            send: jest.fn()
        } as unknown as Response<any, Record<string, any>>

        return {
            sut: helloMiddleware,
            response: mockResponse,
            request: mockRequest
        }

    }
    it("returns stranger if no name is specified", () => {
        // Given
        const { sut, request, response } = makeSut()
        // When
        sut(request, response)
        // Then
        expect(response.send).toHaveBeenCalledWith({
            message: `Hello Stranger`
        })
    })

    it("returns specific name if name is specified", () => {
        // Given
        const { sut, request, response } = makeSut()
        request.query = { name: "Joselito" }
        // When
        sut(request, response)
        // Then
        expect(response.send).toHaveBeenCalledWith({
            message: `Hello World. I'm Joselito`
        })
    })
})
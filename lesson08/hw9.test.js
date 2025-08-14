import {rightTriangle, getLengthAndArea, quadraticEquation} from './hw9'

describe('hw9 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('rightTriangle', () => {
        test('should return true', () => {
            const res = rightTriangle(3,4,5)

            expect(res).toBeTruthy()
        })
        test('should return false', () => {
            const res = rightTriangle(1,1,1)

            expect(res).toBeFalsy()
        })
    })

    describe('getLengthAndArea', () => {
        test('should print to log a result', () => {
            const mockConsole = jest.spyOn(console, 'log')

            getLengthAndArea(5)

            expect(mockConsole).toHaveBeenCalledWith('длина окружности равна 31')
            expect(mockConsole).toHaveBeenCalledWith('площадь круга равна 78')
        })
    })

    describe('quadraticEquation', () => {
        test('should print x1 and x2', () => {
            const mockConsole = jest.spyOn(console, 'log')

            quadraticEquation(2, -5, 3)

            expect(mockConsole).toHaveBeenCalledWith('x1 = 1.5, x2 = 1')
        })
        test('should print x', () => {
            const mockConsole = jest.spyOn(console, 'log')

            quadraticEquation(1, -4, 4)

            expect(mockConsole).toHaveBeenCalledWith('x = 2')
        })

        test('should print no result', () => {
            const mockConsole = jest.spyOn(console, 'log')

            quadraticEquation(1, 1, 1)

            expect(mockConsole).toHaveBeenCalledWith('уравнение не имеет корней')
        })
    })
})
const {getMax, mapNumberToMonth, circleAndSquare} = require('./hw2')

describe('hw2 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('getMax', () => {
        test('should print to log first parameter', () => {
            const c = jest.spyOn(console, 'log')
            getMax(3,2)
            expect(c).toHaveBeenCalledWith(3)
        })
        test('should print to log second parameter', () => {
            const c = jest.spyOn(console, 'log')
            getMax(3,4)
            expect(c).toHaveBeenCalledWith(4)
        })
    })

    describe('mapNumberToMonth', () => {
        test('should print to log февраль', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('2')
            const c = jest.spyOn(console, 'log')

            mapNumberToMonth()

            expect(c).toHaveBeenCalledWith('февраль')
        })
        test('should print to log октябрь', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('10')
            const c = jest.spyOn(console, 'log')

            mapNumberToMonth()

            expect(c).toHaveBeenCalledWith('октябрь')
        })
    })

    describe('circleAndSquare', () => {
        test('should return true', () => {
            const res = circleAndSquare(10, 20)
            expect(res).toBeTruthy()
        })
        test('should return true', () => {
            const res = circleAndSquare(20, 10)
            expect(res).toBeFalsy()
        })
    })
})
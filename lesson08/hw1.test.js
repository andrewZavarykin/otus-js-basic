import {sum, countChars, promptNumberAndSumElements} from './hw1'

describe('hw1 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('sum', () => {
        test('should get sum and print to log', () => {
            const c = jest.spyOn(console, 'log')
            sum(1, 2)
            expect(c).toHaveBeenCalledWith(3)
        })
        test('should write error message to log when first parameter is not a number', () => {
            const c = jest.spyOn(console, 'log')
            const message = 'type is not a number'
            sum('1', 2)
            expect(c).toHaveBeenCalledWith(message)
        })
        test('should write error message to log when second parameter is not a number', () => {
            const s = jest.spyOn(console, 'log')
            const message = 'type is not a number'
            sum(1, undefined)
            expect(s).toHaveBeenCalledWith(message)
        })
    })

    describe('countChars', () => {
        test('should countChar and print to log', () => {
            const s = jest.spyOn(console, 'log')
            countChars('hi', 'man')
            expect(s).toHaveBeenCalledWith(5)
        })
        test('should print error to log when first parameter is not a string', () => {
            const s = jest.spyOn(console, 'log')
            countChars(123, 'four')
            expect(s).toHaveBeenCalledWith('type is not a string')
        })
        test('should print error to log when second parameter is not a string', () => {
            const s = jest.spyOn(console, 'log')
            countChars('one two', 34)
            expect(s).toHaveBeenCalledWith('type is not a string')
        })
    })

    describe('promptNumberAndSumElements', () => {
        test('should print to log result 27', () => {
            const input = '999'
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue(input)
            const s = jest.spyOn(console, 'log')

            promptNumberAndSumElements()

            expect(s).toHaveBeenCalledWith(27)
        })
        test('should print to log result', () => {
            const input = '111'
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue(input)
            const s = jest.spyOn(console, 'log')

            promptNumberAndSumElements()

            expect(s).toHaveBeenCalledWith(3)
        })
    })
})
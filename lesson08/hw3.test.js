import {printSumIntegers, sevenMultiply, findArithmeticMean} from './hw3'

describe('hw3 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })
    
    describe('printSumIntegers', () => {
        test('should print result to console', () => {
            const c = jest.spyOn(console, 'log')

            printSumIntegers()

            expect(c).toHaveBeenCalledWith(3825)
        })
    })

    describe('sevenMultiply', () => {
        test('should print to console multiply on seven', () => {
            const c = jest.spyOn(console, 'log')
            sevenMultiply()
            expect(c).toHaveBeenCalledWith('7 x 1 = 7')
            expect(c).toHaveBeenCalledWith('7 x 9 = 63')
        })
    })

    describe('findArithmeticMean', () => {
        test('should find arithmetic mean and print to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('5')
            const c = jest.spyOn(console, 'log')
            
            findArithmeticMean()
            
            expect(c).toHaveBeenCalledWith(3)
        })
    })
})

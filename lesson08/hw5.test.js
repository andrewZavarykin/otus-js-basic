const {array, printSum, copyArray, findMaxAndMin} = require('./hw5')

describe('hw 5 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('printSum', () => {
        test('should print sum to console', () => {
            const c = jest.spyOn(console, 'log')
            printSum()
            expect(c).toHaveBeenCalledWith(55)
        })
    })

    describe('copyArray', () => {
        test('should creat copy and multiply on 2', () => {
            const result = copyArray(array)

            expect(result[0]).toBe(array[0]*2)
            expect(result[9]).toBe(array[9]*2)
        })
    })

    describe('findMaxAndMin', () => {
        test('should print to log min and max', () => {
            const c = jest.spyOn(console, 'log')

            findMaxAndMin(array)

            expect(c).toHaveBeenCalledWith(1)
            expect(c).toHaveBeenCalledWith(10)
        })
    })
})
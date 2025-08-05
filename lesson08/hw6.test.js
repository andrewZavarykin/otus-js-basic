const {diff, isWord, pow} = require('./hw6')

describe('hw6 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('diff', () => {
        test('should print diff', () => {
            const result = diff(1, 3)
            expect(result).toBe(2)
        })
    })

    describe('isWord', () => {
        test('should return true', () => {
            const result = isWord('hello')
            expect(result).toBeTruthy()
        })

        test('should return false', () => {
            const result = isWord('hello world')
            expect(result).toBeFalsy()
        })
    })

    describe('pow', () => {
        test('should print 4', () => {
            const result = pow(2,2)
            expect(result).toBe(4)
        })
        test('should print 8', () => {
            const result = pow(2,3)
            expect(result).toBe(8)
        })
    })
})
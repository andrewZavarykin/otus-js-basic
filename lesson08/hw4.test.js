const {user, writeAge, createAdmin, destructuringObject} = require('./hw4')

describe('hw4 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('writeAge', () => {
        test('should write age to user', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('22')

            writeAge()

            expect(user.age).toBe(22)
        })
    })

    describe('createAdmin', () => {
        test('should return admin', () => {
            const admin = createAdmin()

            expect(admin.role).toBe('admin')
            expect(admin.name).toBe(user.name)
        })
    })

    describe('destructuringObject', () => {
        test('should destructuring object and print to log', () => {
            const c = jest.spyOn(console, 'log')
            const admin = createAdmin()

            destructuringObject(admin)

            expect(c).toHaveBeenCalledWith('John')
            expect(c).toHaveBeenCalledWith('admin')
        })
    })
})

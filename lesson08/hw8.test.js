const {getDay, printMinutes, getYoungUser} = require('./hw8')

describe('hw8 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('getDay', () => {
        test('should print day', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('04.02.1991')
            const mockConsole = jest.spyOn(console, 'log')
            getDay()
            expect(mockConsole).toHaveBeenCalledWith('понедельник')
        })
    })

    describe('printMinutes', () => {
        test('should print minutes', () => {
            const testDate = new Date(2025, 6, 31, 16, 19)
            const mockDate = jest.spyOn(Date, 'now')
            mockDate.mockReturnValue(testDate.getTime())
            const mockConsole = jest.spyOn(console, 'log')

            printMinutes()

            expect(mockConsole).toHaveBeenCalledWith(979)
        })
    })

    describe('getYoungUser', () => {
        test('should print first parameter', () => {
            const user1 = '20.11.1987'
            const user2 = '20.11.1986'
            const mockConsole = jest.spyOn(console, 'log')

            getYoungUser(user1, user2)

            expect(mockConsole).toHaveBeenCalledWith(user1)
        })
        test('should print second parameter', () => {
            const user1 = '20.10.1985'
            const user2 = '20.11.1986'
            const mockConsole = jest.spyOn(console, 'log')

            getYoungUser(user1, user2)

            expect(mockConsole).toHaveBeenCalledWith(user2)
        })

    })
})
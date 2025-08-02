const {isDate, isEmail, isPhoneNumber} = require('./hw10')

describe('hw10 tests', () => {
    afterEach(() => {
        jest.restoreAllMocks()
    })

    describe('isDate', () => {
        test('should print true to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('20.11.1987')
            const mockConsole = jest.spyOn(console, 'log')

            isDate()

            expect(mockConsole).toHaveBeenCalledWith(true)
        })

        test('should print false to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('20111987')
            const mockConsole = jest.spyOn(console, 'log')

            isDate()

            expect(mockConsole).toHaveBeenCalledWith(false)
        })
    })

    describe('isEmail', () => {
        test('should print true to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('test@mail.ru')
            const mockConsole = jest.spyOn(console, 'log')

            isEmail()

            expect(mockConsole).toHaveBeenCalledWith(true)
        })
        test('should print false to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('testmail.ru')
            const mockConsole = jest.spyOn(console, 'log')

            isEmail()

            expect(mockConsole).toHaveBeenCalledWith(false)
        })
    })

    describe('isPhoneNumber', () => {
        test('should print true to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('+79806554323')
            const mockConsole = jest.spyOn(console, 'log')

            isPhoneNumber()

            expect(mockConsole).toHaveBeenCalledWith(true)
        })
        test('should print false to console', () => {
            const mockPrompt = jest.spyOn(window, 'prompt')
            mockPrompt.mockReturnValue('79806554323')
            const mockConsole = jest.spyOn(console, 'log')

            isPhoneNumber()

            expect(mockConsole).toHaveBeenCalledWith(false)
        })
    })


})
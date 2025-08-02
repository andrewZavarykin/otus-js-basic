const { handleInput, handleButton,
        clearContainer, setHiddenOnButton,
        clearInput, getTextFromInput } = require('./hw7')
const fs = require('fs')

const htmlData = fs.readFileSync('./lesson08/hw7.html', 'utf-8')
describe('hw4', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  beforeEach(() => {
    document.body.innerHTML = htmlData
  })

  describe('handleInput', () => {
    test('is function', () => {
      const type = typeof handleInput
      expect(type).toBe('function')
    })
    test('should setHiddenOnButtonFalse when value present', () => {
      const input = document.querySelector('input');
      input.value = 'test';
      handleInput()
      const button = document.querySelector('button')
      expect(button.hidden).toBe(false)
    })
    test('should setHiddenOnButtonTrue when value not present', () => {
      const input = document.querySelector('input');
      input.value = ' ';
      handleInput()
      const button = document.querySelector('button')
      expect(button.hidden).toBe(true)
    })
  })

  describe('setHiddenOnButton', () => {
    test('is function', () => {
      const type = typeof setHiddenOnButton
      expect(type).toBe('function')
    })
    test('should set hidden on button true', () => {
      const button = document.querySelector('button')
      setHiddenOnButton(' ')
      expect(button.hidden).toBeTruthy()
    })
    test('should set hidden on button false', () => {
      const button = document.querySelector('button')
      setHiddenOnButton('hi')
      expect(button.hidden).toBeFalsy()
    })
  })

  describe('handleButton', () => {
    test('is function', () => {
      const type = typeof handleButton
      expect(type).toBe('function')
    })
    test('should add paragraph and write value', () => {
      const input = document.querySelector('input');
      input.value = "hello"
      handleButton()
      const container = document.querySelector('.container')
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs.length).toBe(4)
      expect(paragraphs[3].innerText).toBe('hello')
    })
    test('should not add paragraph when string is empty', () => {
      const input = document.querySelector('input');
      input.value = " "
      handleButton()
      const container = document.querySelector('.container')
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs.length).toBe(3)
    })
    test('should clear container when there are 4 paragraphs', () => {
      const input = document.querySelector('input');
      input.value = "hello"
      const paragraph = document.createElement('p')
      const container = document.querySelector('.container')
      container.append(paragraph)
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs.length).toBe(4)
      handleButton()
      const container2 = document.querySelector('.container')
      const paragraphs2 = container.querySelectorAll('p')
      expect(paragraphs2.length).toBe(4)
    })
  })

  describe('clearContainer', () => {
    test('is function', () => {
      const type = typeof clearContainer
      expect(type).toBe('function')
    })
    test('should delete first and write last', () => {
      const container = document.querySelector('.container')
      const paragraph = document.createElement('p')
      paragraph.innerText = 'hello'
      container.append(paragraph)
      clearContainer()
      const paragraphs = document.querySelectorAll('p')
      expect(paragraphs.length).toBe(3)
      expect(paragraphs[2].innerText).toBe('hello')
    })
  })

  describe('clear input', () => {
    test('is function', () => {
      const type = typeof clearInput
      expect(type).toBe('function')
    })
    test('should clear input', () => {
      const input = document.querySelector('input')
      input.value = 'hello'
      expect(input.value).toBe('hello')
      clearInput()
      expect(input.value).toBe('')
    })
  })

  describe('getTextFromInput', () => {
    test('is function', () => {
      const type = typeof getTextFromInput
      expect(type).toBe('function')
    })
    test('should return text', () => {
      const input = document.querySelector('input')
      input.value = 'hello'
      const result = getTextFromInput()
      expect(result).toBe('hello')
    })
  })

})
const {handleInput, handleButton} = require('./hw4')

describe('hw4', () => {
  beforeEach(() => {
    document.body.innerHTML = 
    '<div class="container">' + 
    '<p>текст1</p>' +
    '<p>текст2</p>' +
    '<p>текст3</p>' +
    '</div>' +
    '<input type="text">' +
    '<button>отправить</button>'
  })
  describe('handleInput', () => {
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
  describe('handleButton', () => {
    test('should add paragraph', () => {
      const input = document.querySelector('input');
      input.value = "hello"

      handleButton()

      const container = document.querySelector('.container')
      const paragraphs = container.querySelectorAll('p')
      expect(paragraphs.length).toBe(4)
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
})
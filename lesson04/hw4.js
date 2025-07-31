function handleInput() {
  const input = document.querySelector("input");
  const value = input.value;
  setHiddenOnButton(value);
}

function setHiddenOnButton(value) {
  const button = document.querySelector("button");
  if (value.trim()) {
    button.hidden = false;
  } else {
    button.hidden = true;
  }
}

function handleButton() {
  clearContainer();
  addParagraph();
  clearInput();
}

function addParagraph() {
  const text = getTextFromInput();
  if (text.trim()) {
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    const container = document.querySelector(".container");
    container.append(paragraph);
  }
}

function getTextFromInput() {
  const input = document.querySelector("input");
  return input.value;
}

function clearContainer() {
  const container = document.querySelector(".container");
  const paragraphs = container.querySelectorAll("p");
  if (paragraphs.length >= 4) {
    paragraphs[0].remove();
  }
}

function clearInput() {
  const element = document.querySelector("input");
  element.value = "";
}

module.exports = {
  handleInput,
  handleButton,
  clearContainer,
  setHiddenOnButton,
  addParagraph,
  clearInput,
  getTextFromInput,
};

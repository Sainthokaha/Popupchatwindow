const popup = document.querySelector('.chat-popup');
const chatBtn = document.querySelector('.chat-btn');
const submitBtn = document.querySelector('.submit');
const chatArea = document.querySelector('.chat-area');
const inputElm = document.querySelector('input');
// const picker = new EmojiButton();
// const emojiBtn = document.querySelector('#emoji-btn');

// window.addEventListener('DOMContentLoaded', () => {
//     picker.on('emoji', (emoji) => {
//         document.querySelector('input').value += emoji;
//     })

//     emojiBtn.addEventListener('click', () => {
//         picker.togglePicker(emojiBtn);
//     })
// })

// Chat button toggler
chatBtn.addEventListener('click', () => {
  popup.classList.toggle('show');
})

submitBtn.addEventListener('click', () => {
  let userInput = inputElm.value;
  
  let temp = `
    <div class="out-msg">
      <span class="my-msg">${userInput}</span>
      <img src="img/Hope.jpg" class="avatar"</img>
  `;

  chatArea.insertAdjacentHTML("beforeend", temp);
  inputElm.value = '';
})
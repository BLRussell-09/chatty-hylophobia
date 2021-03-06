
const buildDomString = (messagesArray) => {
  let domString = '';
  messagesArray.forEach((message) => {
    domString +=  `<div class="complete-message" id="${message.id}">`;
    domString +=    `<h4 class="displayed-username">${message.username} </h4>`;
    domString +=    `<p class="displayed-time">[${message.timestamp}]: </p>`;
    domString +=    `<p class="displayed-message">${message.message}</p>`;
    domString +=    `<button class="edit" id="edit">Edit</button>`;
    domString +=    `<button class="delete-message" id="delete">Delete</button>`;
    domString +=  `</div>`;
  });
  printToDom('messages-display', domString);
};

const printToDom = (divId, string) => {
  document.getElementById(divId).innerHTML = string;
};

module.exports = buildDomString;

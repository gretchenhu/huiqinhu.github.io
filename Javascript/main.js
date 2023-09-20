const username = document.getElementById("username");
const email = document.getElementById("email");
const message = document.getElementById("message");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (username.value === "" || username.value == null) {
    messages.push("Name is required");
  }

  if (email.value.length <= 6) {
    messages.push("Email must be longer than 6 characters to be a valid email");
  }

  if (message.value.length <= 0) {
    messages.push("Message cannot be empty");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(",");
  }
});

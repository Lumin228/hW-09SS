const forma = document.querySelector(".feedback-form")
const email_text = document.querySelector('.feedback-form input[type="email"]');
const message_text = document.querySelector('.feedback-form textarea');

const EMAIL_KEY = "Email";
const MESSAGE_KEY = "Message"
email_text.value = localStorage.getItem(EMAIL_KEY)
message_text.value = localStorage.getItem(MESSAGE_KEY)


forma.addEventListener('input', (evt) => {
    localStorage.setItem(EMAIL_KEY, evt.currentTarget.email.value)
    localStorage.setItem(MESSAGE_KEY, evt.currentTarget.message.value)
    evt.currentTarget.email.value = localStorage.getItem(EMAIL_KEY)
    evt.currentTarget.message.value = localStorage.getItem(MESSAGE_KEY)
})

forma.addEventListener('submit', (evt) => {
    evt.preventDefault()
    localStorage.removeItem(EMAIL_KEY)
    localStorage.removeItem(MESSAGE_KEY)
    evt.currentTarget.email.value = ""
    evt.currentTarget.message.value = ""

})

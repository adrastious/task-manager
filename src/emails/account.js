const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'carlosdelangel@outlook.com',
    subject: 'Thanks for joining in',
    text: `Welcome to the app, ${name}. Let me know how you get along with the app!`
  })
}

const sendCancellationEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'carlosdelangel@outlook.com',
    subject: 'Sorry to see you go...',
    text: `So sorry to see you go ${name} but we understand. What could we do to improve your experience ?`
  })
}

module.exports = {
  sendWelcomeEmail,
  sendCancellationEmail
}

/* sgMail.send({
  to: 'carlosdelangel@outlook.com',
  from: 'carlosdelangel@outlook.com',
  subject: 'This is my first email from sendgrid',
  text: 'I hope this one actually gets to you boi.',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
}).then(() => {
  console.log('Email sent')
})
.catch((error) => {
  console.error(error)
}) */
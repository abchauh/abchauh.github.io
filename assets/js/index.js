function sendEmail() {
Email.send({
    Host : "smtp.mailtrap.io",
    Username : "a1792c4a04dbc0",
    Password : "4a7eb3d14e8e06",
    To : 'abhinav.chauhan@kitehive.com',
    From : "sender@example.com",
    Subject : "Sign up alert",
    Body : "<html><h2>Header</h2><strong>Bold text</strong><br></br><em>Italic</em></html>"
}).then(
  message => alert(message)
);
}

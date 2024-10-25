function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
function sendEmail() {
  const templateParams = {
    name: "Sender's Name",           // Add the sender's name here
    message: "Hello Akshaya, I would like to discuss...", // The message content
    email: "sender@example.com"      // Add the sender's email here
  };

  emailjs.send('service_fm0smzs', 'template_rqrch4f', templateParams)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      alert('Email sent successfully!');
    }, (error) => {
      console.error('Failed to send email:', error);
      alert('Failed to send email.');
    });
}



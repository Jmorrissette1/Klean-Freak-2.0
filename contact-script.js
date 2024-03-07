const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;

  const body = `Name: ${name} \nEmail: ${email} \nMessage: ${message}`;

  window.location.href = `mailto:jmorrissette@haselwood.com?subject=Contact Form&body=${body}`;
});

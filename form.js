// Register page
const main = document.getElementById('main');
const submitbtn = document.getElementById('button');
const nameInput = document.createElement('input');
const emailInput = document.createElement('input');
const buttonInput = document.createElement('input');
const form = document.createElement('form');
const section = document.createElement('section');
const x = document.createElement('div');

x.textContent = 'X';
x.style.fontSize = '20px';
x.style.margin = '2rem 0 4rem';
x.style.alignSelf = 'flex-end';
x.style.backgroundColor = '#ec5242';
x.style.color = '#fff';
x.style.padding = '5px 15px';
x.style.borderRadius = '50%';
x.style.cursor = 'pointer';
x.addEventListener('click', () => {
  section.style.display = 'none';
});
form.appendChild(x);

submitbtn.addEventListener('click', () => {
  section.style.display = 'block';
});

function createForm() {
  section.style.display = 'none';
  section.style.position = 'fixed';
  section.style.zIndex = '30';
  section.style.top = '0';
  section.style.width = '100%';
  section.style.height = '100%';
  section.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';

  form.style.display = 'flex';
  form.style.flexDirection = 'column';
  form.style.gap = '1rem';
  form.style.padding = '0 1rem';
  form.style.width = '400px';
  form.style.margin = '100px auto';
  form.style.backgroundColor = '#888';
  form.style.height = '60%';
  form.style.borderRadius = '10px';

  nameInput.placeholder = 'Full Name';
  nameInput.setAttribute('type', 'text');
  nameInput.style.padding = '0 1rem';
  nameInput.style.height = '40px';
  nameInput.style.borderRadius = '4px';
  nameInput.style.border = 'none';

  emailInput.placeholder = 'Email Address';
  emailInput.setAttribute('type', 'email');
  emailInput.style.padding = '0 1rem';
  emailInput.style.height = '40px';
  emailInput.style.borderRadius = '4px';
  emailInput.style.border = 'none';

  buttonInput.textContent = 'Register';
  buttonInput.setAttribute('type', 'submit');
  buttonInput.style.padding = '0 1rem';
  buttonInput.style.height = '40px';
  buttonInput.style.borderRadius = '4px';
  buttonInput.style.cursor = 'pointer';
  buttonInput.style.border = 'none';
  buttonInput.style.backgroundColor = '#ec5242';
  buttonInput.style.color = '#fff';
  buttonInput.style.textTransform = 'uppercase';
  section.appendChild(form);
  form.appendChild(nameInput);
  form.appendChild(emailInput);
  form.appendChild(buttonInput);

  main.appendChild(section);
}

createForm();

function createFormObj(e) {
  e.preventDefault();
  const formObj = {
    formName: nameInput.value,
    formEmail: emailInput.value,
  };

  const stringify = JSON.stringify(formObj);
  localStorage.setItem('formObj', stringify);
}

form.addEventListener('submit', createFormObj);

function getForm() {
  localStorage.getItem('formObj');
  emailInput.value = localStorage.getItem('formObj.formName');
  const string = JSON.parse(localStorage.getItem('formObj'));
  nameInput.value = string.formName;
  emailInput.value = string.formEmail;
}
getForm();

// Success page
const success = document.createElement('section');
const successDiv = document.createElement('div');
const successImg = document.createElement('div');
successImg.innerHTML = '<i class="fas fa-check-circle"></i>';
const successParagraph = document.createElement('p');
const exit = document.createElement('button');
exit.textContent = 'EXIT';
exit.addEventListener('click', () => {
  success.style.display = 'none';
});

buttonInput.addEventListener('click', () => {
  success.style.display = 'block';
  section.style.display = 'none';
});

successParagraph.textContent = 'Your registration was successful';
successDiv.appendChild(successImg);
successDiv.appendChild(successParagraph);
successDiv.appendChild(exit);
success.appendChild(successDiv);
main.appendChild(success);

success.style.display = 'none';
success.style.position = 'fixed';
success.style.zIndex = '30';
success.style.top = '0';
success.style.width = '100%';
success.style.height = '100%';
success.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';

successDiv.style.display = 'flex';
successDiv.style.flexDirection = 'column';
successDiv.style.alignItems = 'center';
successDiv.style.justifyContent = 'center';
successDiv.style.gap = '1rem';
successDiv.style.padding = '0 1rem';
successDiv.style.width = '400px';
successDiv.style.margin = '100px auto';
successDiv.style.backgroundColor = '#fff';
successDiv.style.height = '60%';
successDiv.style.borderRadius = '10px';

successImg.style.margin = '0 0 2rem';
successImg.style.padding = '5px 15px';
successImg.style.borderRadius = '50%';
successImg.style.fontSize = '70px';
successImg.style.color = '#ec5242';

successParagraph.style.fontSize = '20px';
successParagraph.style.fontFamily = 'cursive';
successParagraph.style.color = '#888';
successParagraph.style.margin = '0 0 2rem';

exit.style.padding = '0 1rem';
exit.style.height = '40px';
exit.style.borderRadius = '4px';
exit.style.cursor = 'pointer';
exit.style.border = 'none';
exit.style.backgroundColor = '#888';
exit.style.color = '#fff';
exit.style.textTransform = 'uppercase';

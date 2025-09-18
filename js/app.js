const form=document.getElementById('ContactForm');  //получаем элемент формы
const emailInput=document.getElementById('Email');//получаем поле ввода email
const phoneInput=document.getElementById('phone');
const button=document.getElementById('Submit');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const emailValid = validateEmail();
  const phoneValid = validatePhone();
  if (emailValid && phoneValid) {
    alert("Форма успешно отправлена!");
  }
}); //на событие ввода email будет вызываться функция validateEmail()

function validateEmail(){
  //функция проверки корректности email
  const emailRegex=/[A-Za-z0-9_\-\.]{2,10}@[a-z0-9\.\-_]{1,10}\.[a-z]{2,3}/;
  if(emailRegex.test(emailInput.value)){
    removeError(emailInput);
    return true;
  }
  else{
    showError(emailInput, "Email не соответствует формату. Пример: ivanov@mail.ru");
    return false;
  }
}
function validatePhone(){
  const phoneRegex = /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/;
  if(phoneRegex.test(phoneInput.value)){
    removeError(phoneInput);
    return true;
  }
  else{
    showError(phoneInput, "Телефон не соответствует формату. пример: +7(999)123-45-67");
    return false;
  }
}
function showError(input, message){   //функция показа ошибки
  const formControl = input.parentElement;  //получаем родительскую форму
  const errorElement = formControl.querySelector('error') || document.createElement('div');

  errorElement.className='error';
  errorElement.textContent = message;

  formControl.appendChild(errorElement);
  input.style.borderColor = 'red';
}
function removeError(input){    //функция скрытия ошибки
  const formControl = input.parentElement;
  const errorElement = formControl.querySelector('error');

  if(errorElement){
    formControl.removeChild(errorElement);
  }
  input.style.borderColor = 'green';
}

const contactModal = document.getElementById("contactModal");
const form = document.getElementById('feedbackForm');

// Открытие модального окна
document.getElementById('openContactModal').addEventListener('click', () => {
  contactModal.showModal();
});

// Обработчик отправки
document.getElementById('submitBtn').addEventListener('click', function() {
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const formData = new FormData(form);
  const data = {
    name: formData.get('name'),
    phone: formData.get('phone'),
    email: formData.get('email'),
    category: formData.get('category'),
    message: formData.get('message')
  };

  console.log('Данные формы:', data);
  alert('Спасибо! Ваше обращение отправлено.');

  contactModal.close();
  form.reset();
});

// Отмена
document.getElementById('cancelBtn').addEventListener('click', () => {
  contactModal.close();
});

// Закрытие по клику на фон
contactModal.addEventListener('click', function(event) {
  if (event.target === this) {
    this.close();
  }
});

// Предотвращение отправки по Enter вне textarea
form.addEventListener('keypress', function(event) {
  if (event.key === 'Enter' && event.target.tagName !== 'TEXTAREA') {
    event.preventDefault();
  }
});

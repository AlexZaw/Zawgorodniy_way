const buyButtons = document.querySelectorAll('.buy-tour');
const formPopupTemplate = document.querySelector('#form-popup').content.querySelector('.modal');
const successPopupTemplate = document.querySelector('#success-message').content.querySelector('.success-message');
const mainForm = document.forms['main-form'];

const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';
const isPopupForm =() => document.querySelector('.modal');

const onClosePopup =(evt) =>{
  const popup = document.querySelector('.active-popup');
  if (isEscKey(evt) || evt.target.classList.contains('close-popup')) {
    closePopup(popup);
  }
};

function closePopup(popup){
  popup.remove();
  document.removeEventListener('keydown', onClosePopup);
}

const closePopupListener = (popup) =>{
  document.addEventListener('keydown', onClosePopup);
  popup.addEventListener('click', onClosePopup);
};


const showPopup = (template) =>{
  const popup = template.cloneNode(true);
  popup.classList.add('active-popup');
  const phoneField = popup.querySelector('.modal__phone');
  document.body.insertAdjacentElement('beforeend', popup);
  if(phoneField){
    popup.querySelector('.modal__form').addEventListener('submit', onSubmitForm);
    phoneField.focus();
  }
  closePopupListener(popup);
};

function onSubmitForm(evt){
  evt.preventDefault();
  const form = isPopupForm();
  if(form){
    closePopup(form);
  }
  showPopup(successPopupTemplate);
}

const showForm = (evt) => {
  evt.preventDefault();
  showPopup(formPopupTemplate);
};
mainForm.addEventListener('submit', onSubmitForm);
buyButtons.forEach((button) => button.addEventListener('click', showForm));

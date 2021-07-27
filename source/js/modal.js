import { setPhoneInputListener, setEmailInputListener } from './form-check.min.js';
import { fillForm, onEmptyPhoneFocus } from './form-autofill.min.js';
import { onFormSubmit } from './form-submit.min.js';
import { isEscKey } from './utils.min.js';

const buyButtons = document.querySelectorAll('.buy-tour');
const formPopupTemplate = document.querySelector('#form-popup').content.querySelector('.modal');
const successPopupTemplate = document.querySelector('#success-message').content.querySelector('.success-message');

const isPopupForm = () => document.querySelector('.modal');

const onClosePopup = (evt) => {
  const popup = document.querySelector('.active-popup');
  if (isEscKey(evt) || evt.target.classList.contains('close-popup')) {
    closePopup(popup);
  }
};

function closePopup(popup) {
  popup.remove();
  document.removeEventListener('keydown', onClosePopup);
}

const closePopupListener = (popup) => {
  document.addEventListener('keydown', onClosePopup);
  popup.addEventListener('click', onClosePopup);
};

const showPopup = (template) => {
  const popup = template.cloneNode(true);
  popup.classList.add('active-popup');
  const phoneField = popup.querySelector('.modal__phone');
  document.body.insertAdjacentElement('beforeend', popup);
  if (phoneField) {
    const form = popup.querySelector('.modal__form');
    const popupFormSubmitButton = form.querySelector('[type="submit"]');
    popupFormSubmitButton.addEventListener('click', onFormSubmit);
    setPhoneInputListener(form);
    setEmailInputListener(form);
    onEmptyPhoneFocus(form);
    phoneField.focus();
    fillForm(form);
  }
  closePopupListener(popup);
};

const showForm = (evt) => {
  evt.preventDefault();
  showPopup(formPopupTemplate);
};


const onBuyTourButtonsClick = () => {
  buyButtons.forEach((button) => button.addEventListener('click', showForm));
};

export { onBuyTourButtonsClick, closePopup, showPopup, isPopupForm, successPopupTemplate };

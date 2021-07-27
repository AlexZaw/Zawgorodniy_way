import { showPopup, successPopupTemplate,closePopup, isPopupForm } from './modal.min.js';
const phoneFieldLength = 12;

const showErrorTooltip = (form) =>{
  const inputs= form.querySelectorAll('input');
  [...inputs].forEach((input) =>{
    if(input.validity.valid === false) {
      input.closest('.error-data').classList.add('error-data--show');
    }
    else{
      input.closest('.error-data').classList.remove('error-data--show');
    }
  });
};

const checkPhoneField = (userPhoneField) =>{
  const valueLength = userPhoneField.value.length;
  if (valueLength < phoneFieldLength) {
    userPhoneField.setCustomValidity(`Введите еще ${phoneFieldLength - valueLength}
    симв.`);
  } else if (valueLength > phoneFieldLength) {
    userPhoneField.setCustomValidity(`Удалите лишние ${valueLength - phoneFieldLength}
    симв.`);
  } else {
    userPhoneField.setCustomValidity('');
  }
  userPhoneField.reportValidity();
};

const onPhoneInput = (evt) => {
  const userPhoneField = evt.target;
  checkPhoneField(userPhoneField);
};

const checkForm = (form) => {
  const inputs = form.querySelectorAll('input');
  const userPhoneField = form['user-phone'];
  checkPhoneField(userPhoneField);
  showErrorTooltip(form);
  if([...inputs].every((input) => input.validity.valid))
  {
    const popupForm = isPopupForm();
    if(popupForm){
      closePopup(popupForm);
    }
    showPopup(successPopupTemplate);
  }
};

const setPhoneInputListener = (form) =>{
  form['user-phone'].addEventListener('input', onPhoneInput);
};
export { setPhoneInputListener, checkForm, onPhoneInput };

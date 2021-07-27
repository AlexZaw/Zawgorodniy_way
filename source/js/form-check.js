import { showPopup, successPopupTemplate,closePopup, isPopupForm } from './modal.min.js';
const phoneFieldLength = 12;
const phoneRegular = /^\+\d{11}/;
const emailRegular = /^([a-zA-Z0-9_\-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;


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
  } else if(!phoneRegular.test(userPhoneField.value)){
    userPhoneField.setCustomValidity('Номер телефона должен быть вида: +712345678901');
  } else if (valueLength > phoneFieldLength) {
    userPhoneField.setCustomValidity(`Удалите лишние ${valueLength - phoneFieldLength}
    симв.`);
  } else {
    userPhoneField.setCustomValidity('');
    userPhoneField.closest('.error-data').classList.remove('error-data--show');

  }
  userPhoneField.reportValidity();
};

const checkEmailField = (userEmailField) => {
  if(!emailRegular.test(userEmailField.value) && userEmailField.value.length){
    userEmailField.setCustomValidity('Введите корректный E-mail');
  }
  else {
    userEmailField.setCustomValidity('');
    userEmailField.closest('.error-data').classList.remove('error-data--show');

  }
  userEmailField.reportValidity();

};

const onEmailInput = (evt) =>{
  const userEmailField = evt.target;
  checkEmailField(userEmailField);
};

const onPhoneInput = (evt) => {
  const userPhoneField = evt.target;
  checkPhoneField(userPhoneField);
};

const checkForm = (form) => {
  const inputs = form.querySelectorAll('input');
  const userPhoneField = form['user-phone'];
  const userEmailField = form['user-email'];
  checkPhoneField(userPhoneField);
  checkEmailField(userEmailField);
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
const setEmailInputListener = (form) =>{
  form['user-email'].addEventListener('input', onEmailInput);
};
export { setPhoneInputListener, checkForm, onPhoneInput, setEmailInputListener };

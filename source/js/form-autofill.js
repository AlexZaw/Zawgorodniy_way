const phonePrefix = '+7';
const phonePrefixLength = 2;
const mainForm = document.forms['main-form'];
let userPhoneSaved = '';
let userEmailSaved = '';

const isStorage = () =>{
  try {
    userPhoneSaved = localStorage.getItem('userPhoneSaved');
    userEmailSaved = localStorage.getItem('userEmailSaved');
    return true;
  } catch (err) {
    return false;
  }
};

const fillForm = (form) => {
  isStorage();
  const userPhoneField = form['user-phone'];
  const userEmailField = form['user-email'];
  if (userPhoneSaved) {
    userPhoneField.value = userPhoneSaved;
  }
  if (userEmailSaved) {
    userEmailField.value = userEmailSaved;
  }
};

const onPhoneFieldBlur = (evt) =>{
  const userPhoneField = evt.target;
  if(userPhoneField.value.length <= phonePrefixLength){
    userPhoneField.value = '';
  }
  userPhoneField.removeEventListener('blur', onPhoneFieldBlur);
};

const fillEmptyPhone =(evt) =>{
  const userPhoneField = evt.target;
  if(userPhoneField.value.length < phonePrefixLength){
    userPhoneField.value = phonePrefix;
  }
  userPhoneField.addEventListener('blur', onPhoneFieldBlur);
};

const onEmptyPhoneFocus = (form) =>{
  form['user-phone'].addEventListener('focus', fillEmptyPhone);
};

onEmptyPhoneFocus(mainForm);
fillForm(mainForm);

export { fillForm, isStorage };

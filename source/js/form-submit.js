import { isStorage, fillForm } from './form-autofill.min.js';
import { checkForm } from './form-check.min.js';

const mainForm = document.forms['main-form'];
const mainFormSubmitButton = mainForm.querySelector('[type="submit"]');

const isStorageSupport = isStorage();

const onFormSubmit = (evt) => {
  evt.preventDefault();
  const form = evt.target.closest('form');
  checkForm(form);
  if (isStorageSupport) {
    localStorage.setItem('userPhoneSaved', form['user-phone'].value);
    localStorage.setItem('userEmailSaved', form['user-email'].value);
    fillForm(mainForm);
  }
};

const submitFormListener = () => mainFormSubmitButton.addEventListener('click', onFormSubmit);

export { onFormSubmit, submitFormListener, mainForm };

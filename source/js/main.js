import { onSmoothLinksClick } from './anchor.min.js';
import { setPhoneInputListener, setEmailInputListener } from './form-check.min.js';
import { submitFormListener, mainForm } from './form-submit.min.js';
import { onMobileMenuClick } from './menu.min.js';
import { onBuyTourButtonsClick } from './modal.min.js';
import { onTabListClick, onPlacesCardClick } from './tabs.min.js';

onMobileMenuClick();
onSmoothLinksClick();
onPlacesCardClick();
onTabListClick();
onBuyTourButtonsClick();
submitFormListener();
setPhoneInputListener(mainForm);
setEmailInputListener(mainForm);

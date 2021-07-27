const scrollToElement = (element) =>{
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};
const isEscKey = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

export { scrollToElement, isEscKey };

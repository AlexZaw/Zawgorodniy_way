const tabLinkClassName = 'tabs-titles__link';
const placeLinkClassName = 'places-card';
const tabActiveLinkClassName = 'tabs-titles__link--active';
const tabClassName = 'tabs-list__item';
const tabActiveClassName = 'tabs-list__item--active';
const placesLinksParent = document.querySelector('.places-list');
const tabsLinksParent = document.querySelector('.tabs-titles');
const tabsLinks = tabsLinksParent.querySelectorAll(`.${tabLinkClassName}`);
const tabs = document.querySelectorAll(`.${tabClassName}`);
const tabsParent = document.querySelector('.tabs-list');

const scrollTo = (elementClass) =>{
  elementClass.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
};

const changeTab = (evt) =>{
  evt.preventDefault();
  const target = evt.target;
  try {
    const country = target.closest('[data-country]').dataset.country;
    if(target.closest('[data-country]').classList.contains(placeLinkClassName)){
      scrollTo(tabsLinksParent);
    }
    tabs.forEach((tab) => tab.classList.remove(tabActiveClassName));
    tabsLinks.forEach((link) => link.classList.remove(tabActiveLinkClassName));
    tabsLinksParent.querySelector(`[data-country='${country}']`).classList.add(tabActiveLinkClassName);
    tabsParent.querySelector(`[data-tab='${country}']`).classList.add(tabActiveClassName);
    scrollTo(tabsLinksParent.querySelector(`[data-country='${country}']`));
  } catch (err){
    return err;
  }

};

tabsLinksParent.addEventListener('click', changeTab);
placesLinksParent.addEventListener('click', changeTab);

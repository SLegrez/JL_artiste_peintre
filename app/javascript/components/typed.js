import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  if (document.getElementById('banner-typed-text')) {
    new Typed('#banner-typed-text', {
      strings: ["« Regarder pour voir »"],
      typeSpeed: 50,
      loop: true,
      backSpeed: 50
    })
  };
}

export { loadDynamicBannerText };
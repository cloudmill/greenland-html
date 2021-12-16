import initCoverSlider from './cover-slider';
import initMissionSlider from './mission-slider';
import initConditionsSlider from './conditions-slider';
import initProjectsSlider from './projects-slider';
import initFadeSliders from './fade-slider';
import initBrandsSlider from './brands-slider';
import initCatalogSlider from './catalog-slider';
import initBrandsLogosSlider from './brands-logos-slider';
import initOtherSlider from './other-news-slider';
import productProjects from './product-projects-slider';
import productDesc from './product-desc-slider';
import coverModal from './cover-modal-slider';
import abonementsSlider from './abonements-slider';

import Swiper, {Navigation, Pagination, Mousewheel} from 'swiper';
Swiper.use([Navigation, Pagination, Mousewheel]);

document.addEventListener('DOMContentLoaded', () => {

	window.sliders = [];

	try {
		initCoverSlider();
	} catch {};
	
	try {
		initMissionSlider();
	} catch {};
	
	try {
		initConditionsSlider();
	} catch {}
	
	try {
		initProjectsSlider();
	} catch {}

	try {
		initFadeSliders();
	} catch {}
	
	try {
		initBrandsSlider();
	} catch {}

	try {
		initCatalogSlider();
	} catch {}

	try {
		initBrandsLogosSlider();
	} catch {}

	try {
		initOtherSlider();
	} catch {}

	try {
		productProjects();
	} catch {}

	try {
		productDesc();
	} catch {}

  try {
    coverModal();
  } catch {}

	// try {
  //   abonementsSlider();
  // } catch {}

});
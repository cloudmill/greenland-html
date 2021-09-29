/* src/app.js */

// Styles
import 'Styles/_app.scss';

import initCoverSlider from 'assets/scripts/cover-slider';
import initMissionSlider from './assets/scripts/mission-slider';
import initConditionsSlider from './assets/scripts/conditions-slider';
import FullPage from './assets/scripts/fullpage';
import initProjectsSlider from './assets/scripts/projects-slider';
import initFadeSliders from './assets/scripts/fade-slider';
import initBrandsSlider from './assets/scripts/brands-slider';
import initCatalogSlider from './assets/scripts/catalog-slider';
import initBrandsLogosSlider from './assets/scripts/brands-logos-slider';

import LocomotiveScroll from 'locomotive-scroll';

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

	

	// new FullPage();

	// const scroll = new LocomotiveScroll({
	// 	el: document.querySelector('[data-scroll-container]'),
  //   smooth: true,
	// 	getDirection: true,
  //   getSpeed: true,
  //   lerp: 0.05
	// });

	// document.body.onload = () => {
	// 	console.log('load');
	// 	scroll.update()
	// }

});
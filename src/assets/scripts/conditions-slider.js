import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import Linear from 'gsap'

import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

$(() => {
  
  if ($('#conditions-container').length) {

    const sections = $('.conditions__slider')
    const controller = new ScrollMagic.Controller()
    const items = $('.conditions-nav__item')
  
    const wipeAnimation = new TimelineMax()
      .fromTo(sections[0], 1, {x: "0"}, {x: "0%", ease: Linear.easeIn})
      .fromTo(sections[1], 1, {x: "100%"}, {x: "0%", ease: Linear.easeIn}, {repeat: 2})
      .fromTo(sections[2], 1, {x: "100%"}, {x: "0%", ease: Linear.easeIn}) 
  
    const scene = new ScrollMagic.Scene({
      triggerElement: "#conditions-container",
      triggerHook: "onLeave",
      duration: "500%"
    })
      .setPin("#conditions-container")
      .setTween(wipeAnimation)
      .addTo(controller);

    
    const state = {
      boxActive: {background: '#65BA7F', borderColor: '#65BA7F', width: "12px", height: "12px"},
      boxDefault: {background: 'transparent', borderColor: '#fff', width: "6px", height: "6px"},
    }
    
    const wipe = new TimelineMax()
      .fromTo(items.eq(0).find('.conditions-nav__line'), 1, {width: "0%"}, {width: "100%", ease: Linear.easeIn})
      .to(items.eq(0).find('.conditions-nav__box'), {...state.boxDefault})
      .to(items.eq(1).find('.conditions-nav__box'), {...state.boxActive})
      .fromTo(items.eq(1).find('.conditions-nav__line'), 1, {width: "0%"}, {width: "100%", ease: Linear.easeIn})
      .to(items.eq(1).find('.conditions-nav__box'), {...state.boxDefault})
      .to(items.eq(2).find('.conditions-nav__box'), {...state.boxActive})
  
    const scene2 = new ScrollMagic.Scene({
      triggerElement: "#conditions-container",
      triggerHook: "onLeave",
      duration: "500%"
    })
      .setTween(wipe)
    
    controller.addScene(scene2)
  }
})
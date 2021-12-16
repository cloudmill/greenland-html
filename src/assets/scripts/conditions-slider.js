import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import Linear from 'gsap'

import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

$(() => {
  const controller = new ScrollMagic.Controller()
  const sections = $('.conditions__slider')
  const items = $('.pagina__item')

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
  
  const wipe = new TimelineMax()
    .fromTo(items.eq(0).find('.pagina__line'), 1, {width: "0%"}, {width: "100%", ease: Linear.easeIn})
    .to(items.eq(0).find('.pagina__box'), {background: 'transparent', borderColor: 'black'})
    .to(items.eq(1).find('.pagina__box'), {background: 'green', borderColor: 'green'})
    .fromTo(items.eq(1).find('.pagina__line'), 1, {width: "0%"}, {width: "100%", ease: Linear.easeIn})
    .to(items.eq(1).find('.pagina__box'), {background: 'transparent', borderColor: 'black'})
    .to(items.eq(2).find('.pagina__box'), {background: 'green', borderColor: 'green'})

  const scene2 = new ScrollMagic.Scene({
    triggerElement: "#conditions-container",
    triggerHook: "onLeave",
    duration: "500%"
  })
    .setTween(wipe)
  
  controller.addScene(scene2)

  // scene.on('progress', function(event) {
  //   console.log(event.target);
  // })
})
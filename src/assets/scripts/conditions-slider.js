import * as ScrollMagic from "scrollmagic";
import { TweenMax, TimelineMax } from "gsap";
import { ScrollMagicPluginGsap } from "scrollmagic-plugin-gsap";
import Linear from 'gsap'

import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

ScrollMagicPluginGsap(ScrollMagic, TweenMax, TimelineMax);

$(() => {
  
  if ($('#conditions-container').length) {

    const items = $('.conditions-nav__item')
    const sections = $('.conditions__slider')
    const controller = new ScrollMagic.Controller({
      refreshInterval: 0,
    })
    
    const wipe = new TimelineMax()
    const scene = new ScrollMagic.Scene({
      triggerElement: "#conditions-container",
      triggerHook: "onLeave",
      duration: "500%",
    })
      .setPin("#conditions-container")
      .setTween(wipe)
      .addTo(controller);
    
    sections.each(function(index) {
      const content = $(this).find('.conditions__slide-container')
      const contentOut = TweenMax.to(content, 0.3, {y: "50%", opacity: 0, ease: Linear.easeIn})

      const slideTitle = items.eq(index).find('.conditions-nav__text')

      if (index) {
        wipe.add(TweenMax.to(items.eq(index - 1).find('.conditions-nav__text'), 0.1, {color: "#FFF"}))
        wipe.add(TweenMax.fromTo($(this), 1, {x: "100%"}, {x: "0%", ease: Linear.easeIn}))
        wipe.add(TweenMax.to(slideTitle, 0.1, {color: "#65BA7F"}, {color: "#FFF"}))
        wipe.add(TweenMax.fromTo(content, 0.3, {y: "-50%", opacity: 0}, {y: "0%", opacity: 1}))
        if (index !== sections.length - 1) {
          wipe.add(contentOut)
        } 
      } else {
        wipe.add(contentOut)
        wipe.add(TweenMax.fromTo(slideTitle, 0.1, {color: "#65BA7F"}, {color: "#FFF"}))
      }
    })

    const wipe2 = new TimelineMax()
    const scene2 = new ScrollMagic.Scene({
      triggerElement: "#conditions-container",
      triggerHook: "onLeave",
      duration: "500%"
    })
      .setTween(wipe2)
      .addTo(controller)

    items.each(function(i) {
      const line = $(this).find('.conditions-nav__line')
      const box = $(this).find('.conditions-nav__box')

      const lineChange = TweenMax.fromTo(line, 1, {width: "0%"}, {width: "100%", ease: Linear.easeIn})
      const boxDefault = TweenMax.to(box, 0.3, {background: 'transparent', borderColor: '#fff', width: "6px", height: "6px"})
      const boxActive = TweenMax.to(box, 0.3, {background: '#65BA7F', borderColor: '#65BA7F', width: "12px", height: "12px"})

      if (i) {
        if (i === items.length - 1) {
          wipe2.add(boxActive)
        } else {
          wipe2.add(boxActive)
          wipe2.add(lineChange)
          wipe2.add(boxDefault)
        }
      } else {
        wipe2.add(lineChange)
        wipe2.add(boxDefault)
      }
    })
  }
})
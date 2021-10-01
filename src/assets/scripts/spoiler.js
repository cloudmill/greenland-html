import { event } from "jquery";

{
  $(() => {

    // const spoiler = $('.spoiler');
    const spoilerBtn = $('.spoiler__button');
    const spoilerDrop = $('.spoiler__dropdown');

    // console.log(123);

    spoilerBtn.on('click', event => {
      const currentSpoiler = $(event.target).closest('.spoiler');
      currentSpoiler.toggleClass('spoiler--active');
      currentSpoiler.find(spoilerDrop).slideToggle(500);
    })

  })
}
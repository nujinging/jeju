$(document).ready(function () {
  //Swiper
  new Swiper('.swiper-container', {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  //Scroll Object Init
  var scrollObj = window.Scrollbar.init(document.querySelector('.scrollWrap'), { thumbMinSize: 10, speed: 2 });
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  ScrollTrigger.scrollerProxy('.scrollWrap', {
    scrollTop: function (value) {
      if (arguments.length) {
        scrollObj.scrollTop = value;
      }
      return scrollObj.scrollTop;
    },
  });

  scrollObj.addListener(function (e) {
    ScrollTrigger.update();
  });
  ScrollTrigger.defaults({ scroller: document.querySelector('.scrollWrap') });

  gsap.timeline({
    defaults: {
      ease: 'none',
    },
    scrollTrigger: {
      start: function start() {
        return 0;
      },
      end: function end() {
        return $('#content').height();
      },
      invalidateOnRefresh: true,
      scrub: 1,
    },
  });

  //section1 binding - intro
  gsap.to('#intro', {
    scrollTrigger: {
      trigger: '#intro',
      start: 'top top',
      scrub: true,
    },
    delay: 0.5,
    opacity: '0',
    ease: 'none',
  });

  gsap.to('#intro .intro_text', {
    scrollTrigger: {
      trigger: '#intro',
      start: 'top top',
      scrub: true,
    },
    delay: 0.5,
    yPercent: +300,
    ease: 'none',
  });

  //section2 binding
  gsap.to('.section02', {
    scrollTrigger: {
      trigger: $('.section02'),
      start: 'top 0%',
      end: '500',
      pin: true,
    },
  });

  gsap.to('.room_box', {
    scrollTrigger: {
      trigger: $('.room_box'),
      start: 'top 0%',
      pin: true,
      pinSpacing: false,
    },
  });

  

  //section3 binding
  gsap.to('.section03', {
    scrollTrigger: {
      trigger: $('.section03'),
      start: 'top 0%',
      end: '+=1700',
      pin: true,
      pinSpacing: false,
    },
  });

  //section4 binding
  gsap.to('.section04', {
    scrollTrigger: {
      trigger: $('.section04'),
      start: 'top 0%',
      pin: true,
      pinSpacing: false,
    },
  });

  //section5 binding
  gsap.to('.section05', {
    scrollTrigger: {
      trigger: $('.section05'),
      start: 'top 0%',
      end: '+=600',
      pin: true,
    },
  });

  //section6 binding


  //top button
  $('.top_btn').on('click', function (e) {
    e.preventDefault();

    scrollObj.scrollTo(0, 0, 1000);
  });
});

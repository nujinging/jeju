const togglePlay = (e) => {
  const _this = $(e.target);
  const video = _this.hasClass('video') ? _this.get(0) : _this.find('video')[0];
  const videoBox = $(video).parent();

  if (video.paused || video.ended) {
    videoBox.removeClass('video_box');
    videoBox.addClass('active_video_box');
    video.play();
  } else {
    videoBox.removeClass('active_video_box');
    videoBox.addClass('video_box');
    video.pause();

    e.preventDefault();
  }
};

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

  //Video
  $('.video_box').on('click', togglePlay);

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
      end: '+=500',
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
      pin: true,
      pinSpacing: false,
    },
  });
  gsap.to('.room_box', {
    scrollTrigger: {
      trigger: $('.section03'),
      scrub: true,
    },
    ease: 'none',
    opacity: 0,
  });
  gsap.to('.section02', {
    scrollTrigger: {
      trigger: $('.section03'),
      scrub: true,
    },
    yPercent: 12,
    ease: 'none',
    opacity: 0,
  });

  //section4 binding
  gsap.to('.section04', {
    scrollTrigger: {
      trigger: $('.section04'),
      start: 'top 0%',
      end: '+=600',
      pin: true,
    },
  });

  gsap.to('.cont_box', {
    scrollTrigger: {
      trigger: $('.section04'),
      scrub: true,
    },
    yPercent: -100,
    ease: 'none',
    opacity: 0,
  });

  //section5 binding
  gsap.to('.section05', {
    scrollTrigger: {
      trigger: $('.section05'),
      start: 'top 0%',
      pin: true,
      pinSpacing: false,
    },
  });

  gsap.to('.section04 .inner', {
    scrollTrigger: {
      trigger: $('.section05'),
      scrub: true,
    },
    yPercent: 15,
    ease: 'none',
    duration: 700,
    opacity: 0,
  });

  //section6 binding
  gsap.to('.section06', {
    scrollTrigger: {
      trigger: $('.section06'),
      start: 'top 0%',
      pin: true,
      pinSpacing: false,
      scrub: true,
    },
    opacity: 1,
  });

  gsap.to('.section06', {
    scrollTrigger: {
      trigger: $('.section06'),
      start: 'top 80%',
      scrub: true,
    },
    ease: 'power2',
    opacity: 1.6,
  });

  gsap.to('.section05 .inner', {
    scrollTrigger: {
      trigger: $('.section06'),
      start: 'top 95%',
      scrub: true,
    },
    yPercent: -20,
    ease: 'none',
    opacity: 0,
  });

  gsap.to('.footer', {
    scrollTrigger: {
      trigger: $('.footer'),
      start: 'top 86%',
      pin: true,
      pinSpacing: false,
    },
  });

  //top button
  $('.top_btn').on('click', function (e) {
    e.preventDefault();

    scrollObj.scrollTo(0, 0, 1000);
  });

  //txt motion
  var txtMotionList = gsap.utils.toArray('.motion');
  $(txtMotionList).each(function (index, item) {
    if ($(item).attr('id') === 'swiper') {
      ScrollTrigger.create({
        start: 'top 50%',
        trigger: item,
        onEnter: () => {
          $(item).addClass('animate');
          $(item).removeClass('ready');
        },
      });
    } else {
      ScrollTrigger.create({
        start: 'top 95%',
        trigger: item,
        onEnter: () => {
          $(item).addClass('animate');
          $(item).removeClass('ready');
        },
      });
    }
  });
});

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
  const STANDARD_VIEWPORT_HEIGHT = 937;
  const DEFAULT_FOOTER_PADDING = 110;
  const viewportHeight = $(window).height();
  const footerPadding = DEFAULT_FOOTER_PADDING + (viewportHeight - STANDARD_VIEWPORT_HEIGHT);

  console.log(footerPadding);

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
  $('.section03 .list .motion').on('click', function () {
    const url = $(this).attr('data-url');
    const modalBox = $(`<div class="modal_box"></div>`);
    const videoBox = $(`<div class="video"></div>`);
    const closeButton = $(`<button type="button" class="modal_close"><span class="blind">닫기</span></button>`);
    modalBox.appendTo('body');
    videoBox.appendTo(modalBox);
    closeButton.appendTo(videoBox);

    const iframe = $(`<iframe width="${videoBox.width()}" height="${videoBox.height()}" src="${url}" frameborder="0" allowfullscreen></iframe>`);
    iframe.appendTo(videoBox);
    closeButton.on('click', function () {
      $(this).parent().parent().detach();
    });
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

  //top button
  $('.top_btn').on('click', function (e) {
    e.preventDefault();

    scrollObj.scrollTo(0, 0, 1000);
  });

  //Animation
  ScrollTrigger.matchMedia({
    
    // desktop
    "(min-width: 1200px)": function () {
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
          start: 'top bottom',
          end: 'top top',
          scrub: true,
        },
        yPercent: 6,
        ease: 'none',
        opacity: 0.5,
      });


      //section4 binding
      gsap.to('.section03', {
        scrollTrigger: {
          trigger: $('.section04'),
          scrub: true,
          start: 'top 85%',
          pin: '.section03',
          pinSpacing: false,
        },
      });
      gsap.to('.section04', {
        scrollTrigger: {
          trigger: $('.section04'),
          scrub: true,
          start: 'top top',
          end: '100',
          pin: true,
        },
      });


      gsap.to('.cont_box', {
        scrollTrigger: {
          trigger: $('.section04'),
          scrub: true,
          start: 'top bottom'
        },
        y: -300,
        ease: Power0,
        opacity: 0.5,
      });

      //section5 binding
      gsap.to('.section04 .inner', {
        scrollTrigger: {
          trigger: $('.section05'),
          scrub: true,
          start: 'top bottom',
          end: 'top top'
        },
        yPercent: 5,
        ease: Power3,
      });


      //section6
      gsap.to('.section05', {
        scrollTrigger: {
          trigger: $('.section06'),
          start: 'top 85%',
          pin: '.section05',
          pinSpacing: false,
        },
      });

      gsap.to('.section06', {
        scrollTrigger: {
          trigger: $('#section06'),
          start: 'top top',
          scrub: true,
          pin: true,
          pinSpacing: false,
        },
      });

      gsap.to('.section05 .inner', {
        scrollTrigger: {
          trigger: $('#section06'),
          start: 'top 80%',
          scrub: true,
        },
        yPercent: -40,
        ease: 'none',
        opacity: 0.5,
      });

      gsap.to('.section06', {
        scrollTrigger: {
          trigger: $('#section06'),
          start: 'top 80%',
          scrub: true,
        },
        ease: Power0,
        opacity: 1.2,
      });

      gsap.to('.section06', {
        scrollTrigger: {
          trigger: '#section06',
        },
        paddingBottom: footerPadding,
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
    },

    // mobile
    "(max-width: 1199px)": function () {
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
        yPercent: +200,
        ease: 'none',
      });

      //txt motion
      var txtMotionList = gsap.utils.toArray('.motion');
      $(txtMotionList).each(function (index, item) {
        if ($(item).attr('id') === 'swiper') {
          ScrollTrigger.create({
            start: 'top 60%',
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
    },

    // all 
    "all": function () {
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
    }
  });
});
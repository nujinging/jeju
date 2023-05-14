
window.onload = function () {

    TweenLite.defaultEase = Linear.easeNone;

    // ScollMagic 컨트롤러 생성
    const controller = new ScrollMagic.Controller({
        globalSceneOptions: {
            triggerHook: 'onLeave',
        }
    });

    // animation object 생성
    const timeline1 = new TimelineMax();

    timeline1.to(".section01 .tit", 1, { opacity: 0, x: 150})

    // scene1 (Scene object 생성)
    new ScrollMagic
        .Scene({
            triggerElement: ".sect01", // 스크롤 애니메이션 시작 시점
            duration: '100%' // 애니메이션 재생 시간, 100%일 경우 화면 높이에따라 유동적으로 end 위치 정해짐
        })
        .setTween(timeline1) // 애니메이션 오브젝트 추가
        .addTo(controller); // 스크롤매직 컨트롤러 추가



    // scene3
    const timeline3 = new TimelineMax();

    timeline3.to(".section03", 1, {  y: 0 }, 1)
            .to(".section04", 1, {  y:-900 }, 1)

    new ScrollMagic
        .Scene({
            triggerElement: ".section03",
            duration: "100%"
        })
        .setClassToggle(".section03", "active")
        .setPin(".section03")
        .setTween(timeline3)
        .addTo(controller);



    // scene3
    const timeline4 = new TimelineMax();

    timeline4.to(".section05", 1, {  y:-900 ,delay: 0.6 }, 1)

    new ScrollMagic
        .Scene({
            triggerElement: ".section05",
            duration: "100%"
        })
        .setClassToggle(".section05", "active")
        .setPin(".section05")
        .setTween(timeline4)
        .addTo(controller);





};



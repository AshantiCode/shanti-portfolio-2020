function init() {
  // Smooth Scrolling
  // not working when i register plugin
  // gsap.registerPlugin(ScrollTrigger);

  // Smooth Scrolling not working with Scroll Trigger

  // const scroll = new LocomotiveScroll({
  // 	el: document.querySelector('.smooth-scroll'),
  // 	smooth: true
  // });

  // *********************     ScrollTriger code fuer Locomotive   ******************
  //
  // 	scroll.on("scroll", ScrollTrigger.update);
  // 	// Tell Scrollrigger to use this proxy
  // 	ScrollTrigger.scrollerProxy(".smooth-scroll", {
  // 		scrollTop(value) {
  // 			return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  // 		},
  // 		getBoundingClientRect() {
  // 			return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  // 		},
  // 		pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
  // 	});

  // 	// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  // 	ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // 	// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  // 	ScrollTrigger.refresh();
  // *********************     ScrollTriger code fuer Locomotive   ******************
  // // Lottie Animations

  const linkedin = document.getElementById("linkedin");
  const github = document.getElementById("github");
  const mail = document.getElementById("mail");
  const flower = document.getElementById("flower");
  const hello = document.getElementById("hello");
  const scroll = document.getElementById("arrow-scroll");
  const loader = document.getElementById("loader");

  // BODYMOVIN WAS NOT WORKING ANYMORE, I LEAVE IT IN FOR REFERRENCE
  //   let animation1 = bodymovin.loadAnimation({
  //     container: loader,
  //     renderer: "svg",
  //     path: "js/hello.json",
  //     autoplay: true,
  //     loop: true,
  //     speed: 0.5,
  //   });

  linkedin.addEventListener("mouseenter", function () {
    animation1.play();
  });

  linkedin.addEventListener("mouseleave", function () {
    animation1.stop();
  });

  github.addEventListener("mouseenter", function () {
    animation2.play();
  });

  github.addEventListener("mouseleave", function () {
    animation2.stop();
  });

  mail.addEventListener("mouseenter", function () {
    animation3.play();
  });

  mail.addEventListener("mouseleave", function () {
    animation3.stop();
  });

  // =====   hello pre srceen  =====================
  // ***** Comment out for development ***********

  //   var tl = gsap.timeline();

  //   tl.to("#loader", {
  //     duration: 3.2,
  //   });

  //   tl.to("#loader", {
  //     duration: 2,
  //     scale: 2,
  //     opacity: 0,
  //     zIndex: 0,
  //   });
  // =====   hello pre srceen  =====================

  //pin resume
  const resumeTl = gsap.timeline();

  resumeTl;
  gsap.to("#resumeHeading", {
    duration: 1,
    scrollTrigger: {
      id: "resume",
      trigger: "#resumeHeading",
      start: "top top+=200",
      //   pin: true,
      //   anticipatePin: 1,
      //   markers: true,
      onToggle: () => console.log("Toggle"),
    },
  });

  // Const
  const startSlide = 1;

  //reset the stage for slides
  gsap.set(".slide", { x: "-100%", autoAlpha: 0 });
  gsap.set(".slides", { autoAlpha: 1 });

  runResumeSlides(startSlide);

  //SLIDE IN TIMELINE
  function createTimelineIn(index) {
    const element = document.querySelector("div.slide0" + index);
    const tlIn = gsap.timeline();

    tlIn.fromTo(
      element,
      {
        x: "100%",
      },
      {
        duration: 1.9,
        x: 0,
        autoAlpha: 1,
        ease: "power2.out",
      }
    );
    return tlIn;
  }

  //SLIDE OUT TIMELINE
  function createTimelineOut(index) {
    const element = document.querySelector("div.slide0" + index);
    const tlOut = gsap.timeline();
    tlOut.to(element, {
      x: -350,
      autoAlpha: 0,
    });
    return tlOut;
  }

  // RUN ALL SLIDES  /MASTERTIMELINE
  function runResumeSlides(index) {
    const masterTimeline = gsap.timeline();

    const slide1In = createTimelineIn(index);
    const slide1Out = createTimelineOut(index);
    const slide2In = createTimelineIn(index + 1);

    masterTimeline.add(slide1In).add(slide1Out, "+=2").add(slide2In);
  }

  //Tild Images Selected Work
  function initImageTild() {
    document.querySelector("section.work").addEventListener("mousemove", moveImages);
  }
  // MOVE IMAGES
  function moveImages(e) {
    console.log(e);
    const { offsetX, offsetY, target } = e;
    const { clientWidth, clientHeight } = target;
    const xPos = offsetX / clientWidth - 0.5;
    const yPos = offsetY / clientHeight - 0.5;

    const workImages = gsap.utils.toArray(".work-item");
    workImages.forEach((image, index) => {
      const modifier = (index) => index * 1.2 + 1.25;

      gsap.to(image, {
        duration: 1.2,
        rotateY: xPos * 40,
        rotateX: yPos * 30 * modifier(index),
      });
    });
  }
  initImageTild();
}

window.addEventListener("load", function () {
  init();
});

//********** HE HAS THIS SET UP **********
// function init() {
// 	initNavigation();
// 	initHeaderTilt();
//   }

//   window.addEventListener("load", function () {
// 	init();
//   });

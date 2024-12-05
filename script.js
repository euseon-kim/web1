document.addEventListener("DOMContentLoaded", function () {
    // AOS.init({
    //     duration: 1500,  // 애니메이션 지속 시간 (밀리초)
    //     easing: 'ease-in-out',  // 애니메이션의 이징 함수
    //     delay: 0,  // 애니메이션 지연 시간 (밀리초)
    //     offset: 0,  // 스크롤 감지의 시작 위치 (픽셀)     
    //   });

      window.addEventListener('resize', function () {
        // AOS.refresh();
        window.scrollTo(0, 0);
    });
   
  
    gsap.registerPlugin(ScrollTrigger);

    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');
    const header = document.querySelector('header');

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    header.classList.add('hide-header');

    setTimeout(function () {
        window.scrollTo(0, 0);
        loader.classList.add('hide-loader');
        mainContent.classList.add('show-main-content');
        header.classList.add('show-header');

        const tl = gsap.timeline({
            onComplete: () => {
              // 여기에 GSAP함수들 순차적으로 넣어주세요.
              initSectionTwoAnimation();
              initSectionThreeAnimation();
              initSectionFiveAnimation();
            },
          });
        
        gsap.set(mainContent, {
            y: '100%',
            opacity: 0,
            scale: 0.6
        });
        
        tl.to(mainContent, {
            y: '60%',
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out'
        })
        .to(mainContent, {
            y: '60%',
            duration: 0,
            onStart: () => {
                mainContent.style.transformOrigin = 'center center';
            }
        })
        .to(mainContent, {
            y: '0%',
            scale: 1,
            duration: 1,
            ease: 'power3.inOut',
            onComplete: () => {
                document.body.style.overflow = 'hidden';
                document.documentElement.style.overflow = 'auto';
            }
        });
       
    }, 4500);  

    window.addEventListener('scroll', function() {
        const header = document.querySelector(".head");
        const menuItem = document.querySelectorAll(".menu a");
        
        if(window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255,255,255,0.3)';
            menuItem.forEach(item => {
                item.style.color = 'black';
            })
    
        } else {
            header.style.backgroundColor = 'transparent';
            menuItem.forEach(item => {
                item.style.color = 'white';
            })
        }
    })

    gsap.registerPlugin(ScrollTrigger);

   function initSectionTwoAnimation() {
    gsap.timeline({
        scrollTrigger : {
            trigger:".global-one",
            start : "top 20%",
            end: "bottom 20%",
            pin:".section-two",
            scrub: true,
            // markers:true,  
        }
    })
    .fromTo ( ".global-two",{scale:1.4}, {y:"-65.4vh", scale:1, duration:10} )
    .fromTo ( ".global-three",{scale:1.4}, {y:"-130.8vh", scale:1, duration:20} )
   }
    function initSectionThreeAnimation() {

        gsap.timeline({
            scrollTrigger: {
                trigger: '.section-three-top',
                start: '70% 80%',
                end: '70% 20%',
                scrub: 2,
                invalidateOnRefresh: true,
                // markers:true,
            }
        })
            .fromTo('.section-three-top .a', { x: '-100%', opacity: 0 }, { x: '0%', ease: 'power3', opacity: 1, duration: 10 }, 0)
            .fromTo('.section-three-top .b', { x: '100%', opacity: 0 }, { x: '0%', ease: 'power3', opacity: 1, duration: 10 }, 0);
    }
    
    
    function initSectionFiveAnimation() {
        gsap.to(".news-wrapper", {
            scrollTrigger: {
              trigger: ".section-five", 
              start: "top top", 
              end: "bottom top", 
              scrub: 0.3, 
              pin: true, 
              invalidateOnRefresh: true, 
            },
            scrollLeft: () => {
              let newsWrapper = document.querySelector('.news-wrapper');
              let scrollWidth = newsWrapper.scrollWidth;
              let sectionFiveHeight = document.querySelector('.section-five').getBoundingClientRect().height;
              let newsWrapperHeight = newsWrapper.getBoundingClientRect().height;
              let verticalScrollHeight = sectionFiveHeight - newsWrapperHeight;
          
              return (scrollWidth / verticalScrollHeight) * (window.scrollY) * 0.1;
            },
            ease: "none", 
          });
        }
});









    // document.addEventListener('scroll', onScroll);

    // let globalOne = document.querySelector('.global-one');
    // let globalTwo = document.querySelector('.global-two');
    // let globalThree = document.querySelector('.global-three');
    

    // let sectionHeight = window.innerHeight-50; 
    
    // function onScroll() {
    //   let scrollY = window.scrollY; 
    
    //   let sectionTwoProgress = (scrollY - sectionHeight) / sectionHeight; 
    //   let sectionThreeProgress = (scrollY - 2 * sectionHeight) / sectionHeight; 
    
    //   if (scrollY >= sectionHeight && scrollY < 2 * sectionHeight) {
    //     globalTwo.style.transform = `translateY(-${Math.min(sectionTwoProgress * 100, 100)}%)`; 
    //     globalOne.style.transform = `translateY(${Math.min(sectionTwoProgress * 100, 100)}%)`;
    //   }

    //   if (scrollY >= 2 * sectionHeight) {
    //     globalThree.style.transform = `translateY(-${Math.min(sectionThreeProgress * 100, 100)}%)`; 
    //     globalTwo.style.transform = `translateY(${Math.min(sectionThreeProgress * 100, 100)}%)`;
    //   }
    // }

       // document.addEventListener('scroll', horizontalScroll);

    // let newsWrapper = document.querySelector('.news-wrapper');
    // let sectionFive = document.querySelector('.section-five');
    // let newsContents = document.querySelectorAll('.news-content');

    // let scrollWidth = newsWrapper.scrollWidth;
    // let verticalScrollHeight = sectionFive.getBoundingClientRect().height - newsWrapper.getBoundingClientRect().height;

    // function horizontalScroll() {

    //     let stickyPosition = newsWrapper.getBoundingClientRect().top;
    //     if (stickyPosition > 1) {
    //         return;
    //     } else {
    //         let scrolled = sectionFive.getBoundingClientRect().top; 
    //         newsWrapper.scrollLeft = (scrollWidth / verticalScrollHeight) * (-scrolled )* 0.3;
 
    //     }
    // }
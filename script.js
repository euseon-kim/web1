document.addEventListener("DOMContentLoaded", function () {
  
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    setTimeout(function () {
        loader.classList.add('hide-loader');
        mainContent.classList.add('show-main-content');

        gsap.fromTo(mainContent, {
            y: '100%', 
            opacity: 0,
            scale:0.6
        },{
            y: '0%', 
            opacity: 1,
            duration: 2, 
            scale:1,
            ease: 'power3' ,
            onStart: () => {
                mainContent.style.transformOrigin = 'center center';
            },
            onComplete: () => {
                document.body.style.overflow = 'auto';
                document.documentElement.style.overflow = 'auto';
            }
        });         
    }, 4500);
});


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

gsap.timeline({
    scrollTrigger:{
        trigger:'.section-three-top',
        start:'70% 80%',
        end:'70% 20%',
        scrub:2,
        // markers:true,
    }
})
.fromTo('.section-three-top .a', {x:'-100%', opacity:0}, {x:'0%', ease:'power3',opacity:1, duration:10},0)
.fromTo('.section-three-top .b', {x:'100%', opacity:0}, {x:'0%', ease:'power3',opacity:1, duration:10},0);

gsap.to(".news-wrapper", {
  x: () => -(document.querySelector(".section-five").scrollWidth -
   document.documentElement.clientWidth) + 'px',
  ease: "none", 
  scrollTrigger: {
    trigger: ".section-five", 
    start: "top", 
    scrub: 1,
    pin: true, 
    pinSpacing: false, 
    invalidateOnRefresh: true,
    end: () => `+=${document.querySelector(".section-five").offsetWidth}`,
    // markers: true,
  }
});






















// gsap.utils.toArray('section').forEach((section,i)=>{
//     ScrollTrigger.create({
//         trigger:section,
//         start:'bottom bottom',
//         end: '30% 30%',
//         pinSpacing:false,
//         markers:true,
//     })
    
// })
// .to('.global-two', { marginTop: '-654px', scale: 1, })
// .to('.global-three', { marginTop: '-654px', scale: 1, });

// gsap.utils.toArray('.section-two').forEach((section, index) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: '60% 80%',
//         end: '60% 20%',
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//         markers: true,
//         scale: 1,
//     })

// })
//     // .to('.global-one', { marginTop: '-654px', scale: 1, })
//     .to('.global-two', { marginTop: '-654px', scale: 1, })
//     .to('.global-three', { marginTop: '-654px', scale: 1, });



// gsap.timeline({
//     scrollTrigger:{
//         trigger:'.section-two',
//         start:'120% 80%',
//         end:'120% 20%',
//         scrub:2,
//         markers:true,
//     }
// })
// .fromTo('.global-one', {y:'100%', }, {y:'0%', ease:'power3', duration:10},0)
// .fromTo('.global-two', {y:'100%', }, {y:'0%', ease:'power3', duration:10},0)
// .fromTo('.global-three', {y:'100%', }, {y:'0%', ease:'power3', duration:10},0);

  
// gsap.utils.toArray('.section-two').forEach((section, index) => {
//     ScrollTrigger.create({
//         trigger: section,
//         start: '60% 80%',
//         end: '60% 20%',
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//         markers: true,
//         scale: 1,
//     })

// })
//     // .to('.global-one', { marginTop: '-654px', scale: 1, })
//     .to('.global-two', { marginTop: '-654px', scale: 1, })
//     .to('.global-three', { marginTop: '-654px', scale: 1, });




// gsap.utils.toArray('section').forEach((section,i)=>{
//     ScrollTrigger.create({
//         trigger:section,
//         start:'top top',
//         pin:true,
//         pinSpacing:false,
//         markers:true,
//     })

// })


  

  

// gsap.registerPlugin(ScrollTrigger);


// gsap.timeline({
//     scrollTrigger: {
//         trigger: ".global-one",
//         start: "top+=1270px",
//         end: "+=1308",
//         pin: true,
//         pinSpacing: false,
//         scrub: true,
//     },
//     scale: 1,
// })
//     .to('.global-two', { marginTop: '-654px', scale: 1, })
//     .to('.global-three', { marginTop: '-654px', scale: 1, });



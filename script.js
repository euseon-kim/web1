document.addEventListener("DOMContentLoaded", function () {
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    setTimeout(function () {
        loader.classList.add('hide-loader');
        mainContent.classList.add('show-main-content');
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

gsap.utils.toArray('section').forEach((section, index) => {
  ScrollTrigger.create({
    trigger:section,
    start:'top top',
    pin:true,
    pinSpacing:false,
    markers:true,
})
  });

  

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



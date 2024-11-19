document.addEventListener("DOMContentLoaded", function () {
  
    const loader = document.getElementById('loader');
    const mainContent = document.getElementById('main-content');

    // document.body.style.overflow = 'hidden';
    // document.documentElement.style.overflow = 'hidden';

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
                // document.body.style.overflow = 'auto';
                // document.documentElement.style.overflow = 'auto';
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



// gsap.registerPlugin(ScrollTrigger);
// gsap.utils.toArray('section').forEach((section,i)=>{
//     ScrollTrigger.create({
//         trigger:section,
//         start:'top top',
//         pin:true,
//         pinSpacing:false,
//         markers:true,
//     })

// })


  
// gsap.utils.toArray('section').forEach((section, index) => {
//   ScrollTrigger.create({
//     trigger: section,
//     start:'top+=90px top',
//     end:'+=1308',
//     pin:'.section-two',
//     pinSpacing:false,
//     scrub:true,
//     markers:true,
//     scale:1,
// })

//   })
// .to('.global-two',{marginTop:'-654px',scale:1,})
// .to('.global-three',{marginTop:'-654px',scale:1,});


  

  

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



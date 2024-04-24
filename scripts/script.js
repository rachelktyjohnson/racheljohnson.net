// document.querySelector(".content").addEventListener('click',(e)=> {
//     if (e.target.closest('.facet-header')) {
//
//         document.querySelector("body").className="";
//
//         if( e.target.closest('.facet-header').classList.contains("facet-open")){
//             e.target.closest('.facet-header').classList.remove("facet-open")
//             e.target.closest('.facet-header').nextElementSibling.classList.remove("body-open")
//
//         } else {
//             document.querySelectorAll('.facet-header').forEach((element)=>{
//                 element.classList.remove("facet-open");
//                 element.nextElementSibling.classList.remove("body-open")
//             })
//             e.target.closest('.facet-header').classList.add("facet-open")
//             e.target.closest('.facet-header').nextElementSibling.classList.add("body-open")
//         }
//
//     }
// })
//
document.querySelectorAll('.decorator').forEach((element)=>{
    element.style.transform = "scaleX(0)";
    element.style.maxWidth = "0";
})

document.querySelector('#educator').innerText = "educate"



document.querySelector(".content").addEventListener('mouseover', (e)=>{
    if (e.target.closest('.facet-header')) {
        if (e.target.closest('#designer')){
            revealDecorator('#designer+.decorator')
        }
        if (e.target.closest('#developer')){
            revealDecorator('#developer+.decorator')
        }
        if (e.target.closest('#learner')){
            revealDecorator('#learner+.decorator')
        }
        if (e.target.closest('#educator')){
            document.querySelector('#educator').innerText = "educat"
            revealDecorator('#educator+.decorator')
        }
    }
})

function revealDecorator(targets) {
    if (!document.querySelector(targets).classList.contains('decorated')) {
        anime({
            targets: targets,
            scaleX: [0, 1],
            maxWidth: [0, 100],
            duration: 500
        })
        document.querySelector(targets).classList.add('decorated')

    }
}

function hideDecorator(targets){
    if (document.querySelector(targets).classList.contains('decorated')) {
        anime({
            targets: targets,
            scaleX: [1, 0],
            maxWidth: [100, 0],
            duration: 100,
            easing: 'linear'
        })
        document.querySelector(targets).classList.remove('decorated')
        }
}
//
// function animateTypewriter(textEl, text, duration, delay= 0, ) {
//     anime({
//         targets: textEl,
//         opacity: 1,
//         easing: 'linear'
//     });
//
//     anime({
//         targets: textEl,
//         innerHTML: [0, text.length],
//         easing: 'linear',
//         round: 1,
//         delay: delay,
//         duration: duration, // Update duration for slower animation
//         update: function () {
//             textEl.innerHTML = text.substring(0, Math.round(textEl.innerHTML));
//         },
//     })
// }


// animateTypewriter(document.querySelector('.decorator'), 'er', 400)

let timeline = anime.timeline({
    easing: 'easeOutExpo',
    duration: 500
})

timeline
    .add({
        targets: 'h1',
        translateX: [-350, 0],
    })
    .add({
        targets: '.socials a',
        translateX: [350, 0],
        delay: anime.stagger(100)
    }, "-=500")
    .add({
        targets: '.facet',
        translateY: [800,0],
        delay: anime.stagger(100),
    })

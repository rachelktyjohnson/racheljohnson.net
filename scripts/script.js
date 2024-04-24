function triggerFlair(triggerBool){
    if (triggerBool){
        anime({
            targets: '.flair',
            translateY: [500, 0],
            duration: 1000,
        })
    } else {
        anime({
            targets: '.flair',
            translateY: [0, 500],
            duration: 1000,
        })
    }
}

document.querySelector("#designer").addEventListener('mouseover',(element)=>{
    document.querySelector('.flair').style.backgroundImage = "url('../img/des.png')";
    triggerFlair(true)
})
document.querySelector("#designer").addEventListener('mouseout',(element)=>{
    triggerFlair(false)
})

document.querySelector("#developer").addEventListener('mouseover',(element)=>{
    document.querySelector('.flair').style.backgroundImage = "url('../img/dev.png')";
    triggerFlair(true)
})
document.querySelector("#developer").addEventListener('mouseout',(element)=>{
    triggerFlair(false)
})

document.querySelector("#learner").addEventListener('mouseover',(element)=>{
    document.querySelector('.flair').style.backgroundImage = "url('../img/learn.png')";
    triggerFlair(true)
})
document.querySelector("#learner").addEventListener('mouseout',(element)=>{
    triggerFlair(false)
})
document.querySelector("#educator").addEventListener('mouseover',(element)=>{
    document.querySelector('.flair').style.backgroundImage = "url('../img/ed.png')";
    triggerFlair(true)
})
document.querySelector("#educator").addEventListener('mouseout',(element)=>{
    triggerFlair(false)
})

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

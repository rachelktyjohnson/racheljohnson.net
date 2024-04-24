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

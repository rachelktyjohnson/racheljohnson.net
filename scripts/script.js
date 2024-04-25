function triggerHoverFlair(triggerBool, target) {
    if (!anyFlairOpen()){
        if (triggerBool) {
            //if we want it to show
            //but we need to check if someone else is already open
            anime({
                targets: target,
                translateY: [600, 200],
                duration: 1000,
            })
        } else {
            //if we want flair to hide
            anime({
                targets: target,
                translateY: [200, 600],
                duration: 1000,
            })
        }
    }
}

function triggerClickFlair(triggerBool, target) {
    if (!anyFlairOpen()){
        if (triggerBool) {
            //if we want it to show
            //but we need to check if someone else is already open
            anime({
                targets: target,
                translateY: [200, 0],
                duration: 1000,
            })
        } else {
            //if we want flair to hide
            anime({
                targets: target,
                translateY: [0, 600],
                duration: 1000,
            })
        }
    }
}
function anyFlairOpen(){
    let flairOpen = false;
    document.querySelectorAll('.flair').forEach((element)=>{
        if (element.classList.contains('showing')){
            flairOpen = true
        }
    })
    return flairOpen;
}

//HOVER EFFECTS
//START

document.querySelector("#designer").addEventListener('mouseover', (e) => {
    if (!anyFlairOpen()) {
        triggerHoverFlair(true, '.flair-designer')
    }
})
document.querySelector("#designer").addEventListener('mouseout', (element) => {
        triggerHoverFlair(false, '.flair-designer')


})

document.querySelector("#developer").addEventListener('mouseover', (element) => {
    if (!anyFlairOpen()) {
        triggerHoverFlair(true, '.flair-developer')
    }
})
document.querySelector("#developer").addEventListener('mouseout', (element) => {
    triggerHoverFlair(false, '.flair-developer')
})

document.querySelector("#learner").addEventListener('mouseover', (element) => {
    if (!anyFlairOpen()) {
        triggerHoverFlair(true, '.flair-learner')
    }
})
document.querySelector("#learner").addEventListener('mouseout', (element) => {
    triggerHoverFlair(false, '.flair-learner')
})
document.querySelector("#educator").addEventListener('mouseover', (element) => {
    if (!anyFlairOpen()) {
        triggerHoverFlair(true, '.flair-educator')
    }
})
document.querySelector("#educator").addEventListener('mouseout', (element) => {
    triggerHoverFlair(false, '.flair-educator')
})

//END
//HOVER EFFECTS

document.querySelector("#designer").addEventListener('click', toggleFacet);
document.querySelector("#developer").addEventListener('click', toggleFacet);
document.querySelector("#learner").addEventListener('click', toggleFacet);
document.querySelector("#educator").addEventListener('click', toggleFacet);

function toggleFacet(e) {
    if (e.target.classList.contains('facet-open')) {
        closeFacet(e.target)
    } else {

        //close any other facets
        if(document.querySelector('.facet-open')){
            closeFacet(document.querySelector('.facet-open'))
        }

        openFacet(e.target)

    }
}

function closeFacet(el) {
    el.parentElement.nextElementSibling.classList.remove('body-open')
    el.classList.remove('facet-open');
    const flair_showing = document.querySelector(".flair.showing");
    flair_showing.classList.remove('showing')
    //trigger thingy
    triggerClickFlair(false, flair_showing)
}

function openFacet(el) {
    el.parentElement.nextElementSibling.classList.add('body-open')
    el.classList.add('facet-open')
    const flair_to_open = document.querySelector(`.flair-${el.id}`)
    triggerClickFlair(true, flair_to_open)
    flair_to_open.classList.add('showing');
}

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
        translateY: [800, 0],
        delay: anime.stagger(100),
    })

document.querySelectorAll('.facet-header span').forEach((element)=>{
    element.style.display="none";
})

document.querySelector("#educator").innerText = "educate";

let design_open
let develop_open
let learn_open
let educate_open

document.querySelector(".content").addEventListener('mouseover',(e)=>{
    if (e.target.id){
        e.target.nextElementSibling.style.display="inline";
        if (e.target.id==="educator"){
            e.target.innerText = "educat"
        }
    }
})

document.querySelector(".content").addEventListener('mouseout',(e)=>{
    if (e.target.id){
        e.target.nextElementSibling.style.display="none";
        if (e.target.id==="educator"){
            e.target.innerText = "educate"
        }
    }
})
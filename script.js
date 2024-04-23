document.querySelectorAll('.facet-header span').forEach((element)=>{
    element.style.display="none";
})

document.querySelectorAll('.current').forEach((element)=>{
    element.style.display="none";
})

document.querySelector("#educator").innerText = "educate";

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

document.querySelector(".content").addEventListener('click',(e)=>{
    if (e.target.id){
        document.querySelectorAll('.current').forEach((el)=>{
            el.style.display="none";
        })
        e.target.parentNode.parentNode.lastElementChild.style.display="block";
    }
})
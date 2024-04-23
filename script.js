// // document.querySelectorAll('.facet-header span').forEach((element)=>{
// //     element.style.display="none";
// // })
//
// document.querySelectorAll('.current').forEach((element)=>{
//     element.style.display="none";
// })
//
// document.querySelector("#educator").innerText = "educate";
//
// let design_open = false
// let develop_open = false
// let learn_open = false
// let educate_open = false

// document.querySelector(".content").addEventListener('mouseover',(e)=>{
//     if(e.target.closest('.facet-header')){
//         if (e.target.closest('.facet-header').firstElementChild.id==="educator"){
//             e.target.closest('.facet-header').firstElementChild.innerText="educat"
//         }
//         // e.target.closest('.facet-header').lastElementChild.style.display = "block";
//         e.target.closest('.facet-header').lastElementChild.classList.add("show")
//     }

})
//
// document.querySelector(".content").addEventListener('mouseout',(e)=>{
//     if(e.target.closest('.facet-header')){
//         if (e.target.closest('.facet-header').firstElementChild.id==="educator"){
//             e.target.closest('.facet-header').firstElementChild.innerText="educate"
//         }
//         e.target.closest('.facet-header').lastElementChild.style.display = "none";
//         e.target.closest('.facet-header').lastElementChild.classList.remove("show")
//     }
// })
//
// document.querySelector(".content").addEventListener('click',(e)=>{
//     if (e.target.id){
//         document.querySelectorAll('.current').forEach((el)=>{
//             el.style.display="none";
//         })
//         e.target.parentNode.parentNode.lastElementChild.style.display="block";
//     }
// })
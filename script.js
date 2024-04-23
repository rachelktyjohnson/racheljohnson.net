document.querySelector(".content").addEventListener('click',(e)=> {
    if (e.target.closest('.facet-header')) {

        document.querySelector("body").className="";
        if( e.target.closest('.facet-header').classList.contains("facet-open")){
            e.target.closest('.facet-header').classList.remove("facet-open")
            e.target.closest('.facet-header').nextElementSibling.classList.remove("body-open")
            document.querySelector("body").classList.remove('body-designer')
        } else {
            document.querySelectorAll('.facet-header').forEach((element)=>{
                element.classList.remove("facet-open");
                element.nextElementSibling.classList.remove("body-open")
            })
            e.target.closest('.facet-header').classList.add("facet-open")
            e.target.closest('.facet-header').nextElementSibling.classList.add("body-open")
            if (e.target.closest('.facet-header').firstElementChild.id==="designer"){
                document.querySelector("body").classList.add('body-designer')
            }
        }

    }
})
$( document ).ready(function() {
    $('.filtercards').on('click', (e)=>{
        if (e.target.tagName==="LI"){
            let allFilters = document.querySelectorAll('.filtercards li');
            for (let i=0; i<allFilters.length; i++){
                allFilters[i].classList.remove('selected');
            }
            e.target.classList.add('selected');
            let textvalue = e.target.innerHTML.toLowerCase();
            if (textvalue === 'design+development'){ textvalue = 'development';}
            if (textvalue === 'all'){ textvalue = '';}
            $(".item").filter(function() {
                if ( $(this).data('tags').toLowerCase().indexOf(textvalue) > -1 ){
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });
});


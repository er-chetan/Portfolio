
window.onscroll=function() {
    scrolltoptobottom();
    navbarscroll();
}

function scrolltoptobottom(){
    if(document.body.scrollTop>300 || document.documentElement.scrollTop>300){
        document.getElementById('toptobottom').style.display='block';
    }else{
        document.getElementById('toptobottom').style.display='none';
    }
}
function navbarscroll(){
    if(document.body.scrollTop>5 || document.documentElement.scrollTop>5){
        document.getElementById('navbarscroll').style.background='black';
    }else{
        document.getElementById('navbarscroll').style.background='none';
    } 
}
function screentop(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

function view_work(){
    const element=document.getElementById('recents_projects');
    element.scrollIntoView();
}



$(document).ready(()=>{
    $('#navmenu').addClass('d-none');

    $('#showmenu').click(()=>{
        $('#navmenu').removeClass('d-none');
        $('#navmenu').addClass('d-block');
    })
    $('#hidemenu').click(()=>{
        $('#navmenu').removeClass('d-block');
        $('#navmenu').addClass('d-none');
    })

})

window.sr=ScrollReveal();

sr.reveal('.about-me',{
    delay:100,
    duration:1000,
    reset:true
})
sr.reveal('.tech-field',{
    delay:100,
    duration:1000,
    reset:true
})
sr.reveal('.summary-resume',{
    delay:100,
    duration:1000,
    reset:true
})
sr.reveal('.skills',{
    delay:100,
    duration:1000,
    reset:true
})

$('.my-quotes-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    dots:true,

    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})



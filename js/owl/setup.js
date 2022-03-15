$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,  /* Se mantém os icones de nav (< >) abaixo dos filmes.*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

function abrirModal(){
    document.getElementById('modal').style.top = "0";
}

function fecharModal(){
    document.getElementById('modal').style.top = "100%"
}
//ScrollTop 

$(document).ready(function () {
    $(".scrollTop").click(function () {
        $(window).scrollTop(0);
    });
});

//scroll tek Elementet specifike

$(document).ready(function () {
    $("#brandScroll").click(function () {
        var scrollBrand = document.getElementById('featuredBrands').offsetTop;
        window.scrollTo({ top: scrollBrand - 90, behavior: 'smooth' });
    });
});

//shfaqja e buttoni kur t bomi scroll

let mybutton = document.getElementById("scrollTop");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}
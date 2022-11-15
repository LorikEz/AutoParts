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

$(document).ready(function () {
    $("#teamScroll").click(function () {
        var scrollBrand = document.getElementById('ourTeam').offsetTop;
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


//Butoni per addmore 

//Add more 

$(document).on("click", '#showMore', function () {
    $("#showLess").prop("disabled", false);
    $('.container .box:hidden').slice(0, 4).slideDown(100).addClass('show-hide');
    if ($(".container .box:hidden").length == 0) {
        $("#showMore").prop("disabled", true);
    }
});

//Add less

// $(document).on('click', "#showLess", function () {
//     if ($(".show-hide").length > 4) {

//         let x = $(".show-hide").length;
//         for (let index = 0; index <= x; index++) {
//             $(".show-hide").slice(x - 4, x).removeclass("show-hide").slideUp();
//             $("#showMore").removeAttr('disabled');
//         }
//     } else {
//         $("#showLess").prop("disabled", true);
//         $(".show-hide").slice(0, 4).removeClass('show-hide').slideUp();
//     }
// });


/*---------------------*/
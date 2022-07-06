$=jQuery.noConflict();

$(document).ready(function(){
    console.log ("custom js loaded 2!");

    ToggleBurgerMenuPages();

    window.addEventListener('popstate', function (event) {
        // Log the state data to the console
        console.log("url changed");
        ToggleBurgerMenuPages();
    });



    waitForElementToDisplay(
        '.transition-group>div.lesson',
        CodeAfterSideMenuLoads,
        25,
        10000
    );

    $('#custom-bar .burger-wrapper a').on("click", function(ev) {
        ev.preventDefault();
        if ($('.transition-group>div.lesson').hasClass('lesson--open')) {
            $('#custom-bar .burger-wrapper img').attr('src','assets_extra/menu_burger_icon.png');
        }
        else {
            $('#custom-bar .burger-wrapper img').attr('src','assets_extra/close_icon.png');
        }
        $('.transition-group>div.lesson').toggleClass("lesson--open");
    });



});

function ToggleBurgerMenuPages() {
    if (window.location.href.indexOf("lessons") < 0) {
        $('body').addClass('homepage');
    }
    else {
        $('body').removeClass('homepage');
    }
}

function CodeAfterSideMenuLoads() {
    $('.transition-group>div.lesson').removeClass("lesson--open");
    $('nav a.lesson-link').on("click",function() {
        $('#custom-bar .burger-wrapper a').click();
    });
}



function waitForElementToDisplay(selector, callback, checkFrequencyInMs, timeoutInMs) {
    var startTimeInMs = Date.now();
    (function loopSearch() {
        if (document.querySelector(selector) != null) {     // object exists - call the function
            callback();
            return;
        }
        else {
            setTimeout(function () {
                if (timeoutInMs && Date.now() - startTimeInMs > timeoutInMs)
                    return;
                loopSearch();
            }, checkFrequencyInMs);
        }
    })();
}



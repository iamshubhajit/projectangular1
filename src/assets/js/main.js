$(document).ready(function () {
    $(document).ready(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(function () {
        $.scrollify({
            section: ".easyparallax1",
        });
    });
    $(document).on('click', ".homebg_down", function (e) {

        $("body, html").animate({
            scrollTop: $($(".about_us_bg")).offset().top
        }, 500);

    });
    $(window).scroll(function (e) {
        var scrollTop = $(window).scrollTop();
        $(".easyparallax").each(function () {
            var divOffset = $(this).offset().top;
            var speed = $(this).attr('data-speed');
            var dist = (divOffset - scrollTop) / speed;
            $(this).css('background-position-y', dist + '% ');
        });
    });

    $(document).on('click', ".elevator", function (e) {

        $("body, html").animate({
            scrollTop: $($(".homebg")).offset().top
        }, 1000);

    });

    $(document).on('click', ".ourabout_menu_circle", function (e) {

        $("body, html").animate({
            scrollTop: $($(".about_us_bg")).offset().top
        }, 1000);

    });

    $(document).on('click', ".ourteam_menu_circle", function (e) {

        $("body, html").animate({
            scrollTop: $($(".our_team_bg")).offset().top
        }, 1000);

    });

    $(document).on('click', ".ourservices_menu_circle", function (e) {

        $("body, html").animate({
            scrollTop: $($(".our_service_bg")).offset().top
        }, 1000);

    });
    $(document).on('click', ".ourcontact_menu_circle", function (e) {

        $("body, html").animate({
            scrollTop: $($(".our_contact_bg")).offset().top
        }, 1000);

    });

    $(document).on('click', ".menu li", function (e) {
        var menuLi = $(this).attr("data-target");
        $('.open_menu i').removeClass('fa-times');
        $('.open_menu i').addClass('fa-bars').css('color', '#000');
        $('.menu').fadeOut("fast");
        $("body").css("overflow", 'auto');
        $(".wrapper").css('filter', 'blur(0px)');
        $("body, html").animate({
            scrollTop: $($("." + menuLi)).offset().top
        }, 1000);

    });


    $(document).on('click', '.open_menu i', function (e) {
        if ($(this).hasClass('fa-bars'))
        {
            $(this).removeClass('fa-bars');
            $(this).addClass('fa-times').css('color', '#fff');
            $('.menu').fadeIn("fast");
            $("body").css("overflow", 'hidden');
            $(".wrapper").css('filter', 'blur(10px)');
        } else {
            $(this).removeClass('fa-times');
            $(this).addClass('fa-bars').css('color', '#000');
            $('.menu').fadeOut("fast");
            $("body").css("overflow", 'auto');
            $(".wrapper").css('filter', 'blur(0px)');

        }
    });

});


(function ($) {

    $.fn.isOnScreen = function (x, y) {

        if (x == null || typeof x == 'undefined')
            x = 1;
        if (y == null || typeof y == 'undefined')
            y = 1;

        var win = $(window);

        var viewport = {
            top: win.scrollTop(),
            left: win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var height = this.outerHeight();
        var width = this.outerWidth();

        if (!width || !height) {
            return false;
        }

        var bounds = this.offset();
        bounds.right = bounds.left + width;
        bounds.bottom = bounds.top + height;

        var visible = (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

        if (!visible) {
            return false;
        }

        var deltas = {
            top: Math.min(1, (bounds.bottom - viewport.top) / height),
            bottom: Math.min(1, (viewport.bottom - bounds.top) / height),
            left: Math.min(1, (bounds.right - viewport.left) / width),
            right: Math.min(1, (viewport.right - bounds.left) / width)
        };

        return (deltas.left * deltas.right) >= x && (deltas.top * deltas.bottom) >= y;

    };

})(jQuery);


$(document).ready(function () {
    if ($(".homebg").isOnScreen(0, 0.1))
    {
        $(".open_menu").fadeOut("fast");
        $(".elevator").fadeOut("fast");
    } else {
        $(".open_menu").fadeIn("fast");
        $(".elevator").fadeIn("fast");
    }
    $(document).scroll(function (event) {


        if ($(".homebg").isOnScreen(0, 0.1))
        {
            $(".open_menu").fadeOut("fast");
            $(".elevator").fadeOut("fast");
        } else {
            $(".open_menu").fadeIn("fast");
            $(".elevator").fadeIn("fast");
        }
    });
});
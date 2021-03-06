$("#exampleInput").keyup(function(event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        $("#search").click();
    }
});


$(document).ready(function() {
    "use strict";
    $(".animsition").animsition({
        inClass: "fade-in",
        outClass: "fade-out",
        inDuration: 300,
        outDuration: 300,
        linkElement: ".animsition-link",
        loading: !0,
        loadingParentElement: "body",
        loadingClass: "animsition-loading",
        unSupportCss: ["animation-duration", "-webkit-animation-duration", "-o-animation-duration"],
        overlay: !1,
        overlayClass: "animsition-overlay-slide",
        overlayParentElement: "body"
    }), $(".bg-image").css("background", function() {
        var a = "url(" + $(this).data("image-src") + ") no-repeat center center";
        return a
    }), $(".bg-image").css("background-size", "cover"), $("#ex2").slider({}), $("#ex2").on("slide", function(a) {
        $("#ex2SliderVal").text(a.value)
    });
    var a = document.querySelector("#header"),
        e = new Headroom(a, {
            offset: 80,
            tolerance: 40,
            classes: {
                initial: "animated",
                pinned: "fadeInDown",
                unpinned: "fadeOutUp"
            }
        });
    e.init(), e.init();
    var n = $(".restaurant-listing");
    n.isotope({
        filter: "*",
        animationOptions: {
            duration: 750,
            easing: "linear",
            queue: !1
        }
    }), $("nav.primary ul a").click(function() {
        var a = $(this).attr("data-filter");
        return n.isotope({
            filter: a,
            animationOptions: {
                duration: 750,
                easing: "linear",
                queue: !1
            }
        }), !1
    });
    var i = $("nav.primary ul"),
        t = i.find("a");
    t.click(function() {
        var a = $(this);
        if (a.hasClass("selected")) return !1;
        var e = a.parents("nav.primary ul");
        e.find(".selected").removeClass("selected"), a.addClass("selected")
    }), $("#slider-range").slider({
        range: !0,
        min: 0,
        max: 500,
        values: [75, 300],
        slide: function(a, e) {
            $(".minvalue").html("$" + e.values[0]), $(".maxvalue").html("$" + e.values[1])
        }
    }), $("#amount").val("$" + $("#slider-range").slider("values", 0) + " - $" + $("#slider-range").slider("values", 1)), $(".up").on("click", function() {
        var a = $(this),
            e = a.parent().find("input"),
            n = parseInt(e.val()),
            i = n + 1;
        e.val(i)
    }), $(".down").on("click", function() {
        var a = $(this),
            e = a.parent().find("input"),
            n = parseInt(e.val()),
            i = n - 1;
        i >= 0 && e.val(i)
    })
});
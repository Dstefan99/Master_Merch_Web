$(".wir").mouseover(function () {
    $(this).width(180).height(280);
    $(".wir").mouseleave(function () {
        $(this).width(120).height(200);
        $("#david").width(140);
    });
});
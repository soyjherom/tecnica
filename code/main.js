$(function(){
    var $page = jQuery.url.attr("file");
    $('nav.menu ol li a').each(function(){
        var $href = $(this).attr('href');
        if ( ($href == $page) || ($href == '') ) {
            $(this).addClass('on');
        } else {
            $(this).removeClass('on');
        }
    });
});

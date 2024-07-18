$(document).ready(function() {

    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

})
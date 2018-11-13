cssVars();

$('.nav-prompt').click(function (){

    if ($('.nav-inner').attr('aria-expanded') == 'false') {

            $('.nav-inner').attr('aria-expanded', 'true');

            $('.nav-prompt').text('Close Navigation');

    } else {

        $('.nav-inner').attr('aria-expanded', 'false');
        
        $('.nav-prompt').text('Open Navigation');

        }
});


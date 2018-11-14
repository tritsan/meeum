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


// nav active class
function activeMenu() {

    var url = window.location.href;

    $('.nav-inner a').filter(function() {

        return this.href == url;

    }).addClass('active');
}

activeMenu();


// image gallery
function imageGallery() {
   
    if (!$('.image-gallery').length) {
        return;
    }

    $('.image-gallery a').simpleLightbox();

}

imageGallery();


(function ($) {
    'use strict';

    $(document).ready(function() {

        const blurItemsMenu = $('main, footer');

        $('.modal-trigger').on('click', function(e){
            e.preventDefault();

            overlay.removeClass('hidden');
            blurItemsMenu.addClass('blur-md');
            $('body').addClass('modal-open overflow-hidden');

            let id = $(this).attr('href');

            $(id).removeClass('hidden').addClass('opened');



        });

        $(document).on('overlayClicked', function(){

            if( $('body').hasClass('modal-open') ){
                blurItemsMenu.removeClass('blur-md');
                $('.modal.opened').removeClass('opened').addClass('hidden');
                $('body').removeClass('modal-open overflow-hidden');
            }

        });

        const mobileMenu = $('#mobileMenu');
        const blurItems = $('main, header, footer');
        const overlay = $('#overlay');

        $('#toggleMobileMenu').on('click', function (e) {
            e.preventDefault();
            mobileMenu.addClass('active');
            blurItems.addClass('blur-md overflow-hidden');
            overlay.removeClass('hidden');
        });

        $('#closeMobileMenu, #overlay').on('click', function (e) {
            e.preventDefault();
            mobileMenu.removeClass('active');
            blurItems.removeClass('blur-md overflow-hidden');
            overlay.addClass('hidden');
            $(document).trigger('overlayClicked');
        });

        $('.has-submenu').on('click', function (e) {
            e.preventDefault();

            if (!$(this).hasClass('active')) {

                $('.has-submenu.active').removeClass('active');
                $('.active-submenu').removeClass('active-submenu').addClass('hidden');

                $(this).addClass('text-blue active');
                $(this).closest('li').find('ul').removeClass('hidden').addClass('active-submenu');
            } else {
                $(this).removeClass('text-blue active');
                $(this).closest('li').find('ul').addClass('hidden').removeClass('active-submenu');
            }

        });

        $('.tab-item').on('click', function(e){
            e.preventDefault();
            let id = $(this).attr('href')
            let el = $(id);

            $('.tab-content').addClass('hidden');
            $('.tab-item.active').removeClass('active');
            $(this).addClass('active');
            el.removeClass('hidden');
        })


    });

})( jQuery );

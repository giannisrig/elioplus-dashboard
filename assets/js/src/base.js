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

        $('#triggerClose, #overlay').on('click', function (e) {
            e.preventDefault();
            blurItemsMenu.removeClass('blur-md overflow-hidden');
            overlay.addClass('hidden');
            $(document).trigger('overlayClicked');
        });

        $(document).on('overlayClicked', function(){

            if( $('body').hasClass('modal-open') ){
                blurItemsMenu.removeClass('blur-md');
                $('.modal.opened').removeClass('opened').addClass('hidden');
                $('body').removeClass('modal-open overflow-hidden');
            }

        });

        const activeItems = $('#mobileMenu, main');
        const overlay = $('#overlay');

        $('#toggleMobileMenu').on('click', function (e) {
            e.preventDefault();
            activeItems.toggleClass('active');
            $('#headerLogo').toggleClass('hidden');
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

        $('.open-menu').on('click', function(e){
            e.preventDefault();
            let id = $(this).attr('href')
            let el = $(id);
            el.toggleClass('hidden');
        });

        $('.tab-item').on('click', function(e){
            e.preventDefault();
            let id = $(this).attr('href')
            let el = $(id);

            $(this).closest('.tabs-section, .card').find('.tab-content').addClass('hidden');
            $(this).closest('.tabs').find('.tab-item.active').removeClass('active');
            $(this).addClass('active');
            el.removeClass('hidden');
        })

        $('.trigger-filters').on('click', function(e){
            e.preventDefault();
            $(this).parent().find('.filters').toggleClass('hidden');

        })
        $('.trigger-folders').on('click', function(e){
            e.preventDefault();
            $(this).parent().find('.folders').toggleClass('hidden');

        })

        $('.actions-trigger').on('click', function(e){
            e.preventDefault();
            $(this).parent('.cell-actions').find('.actions-content').toggleClass('hidden');

        });

        $(document).on('click', function(e){

            if($(e.target).closest('.cell-actions').length)
                return;

            $('.actions-content').addClass('hidden');


        });

        $('.stepTab').on('click', function(e){
            e.preventDefault();
            let id = $(this).attr('href')
            let el = $(id);

            $('.step-content').addClass('hidden');
            $('.stepTab.active').removeClass('active');
            $(this).addClass('active');
            el.removeClass('hidden');
        })

        $('.step-nav-btn').on('click', function(e){
            e.preventDefault();
            let id = $(this).attr('href')
            let el = $(id);
            el.trigger('click');
        })



    });

})( jQuery );

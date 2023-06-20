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

        $('#triggerClose, #overlay, .trigger-close').on('click', function (e) {
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

        $('#toggleMobileMenu, #closeMobileMenu').on('click', function (e) {
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
            el.find('.tabs .tab-item.active').trigger('click');
        })

        $(".go-to-trigger").click(function(e) {
            e.preventDefault();

            let id = $(this).attr('href');
            $(id).trigger('click');

            $('html, body').animate({
                scrollTop: $(id).closest('.tabs').offset().top - 120
            }, 700);

        });

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
            if($(e.target).closest('.menu-group, .open-menu').length)
                return;

            $('.actions-content, .menu-group').addClass('hidden');


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


        $('.toast-demo').on('click', function(e){
            e.preventDefault();
            let type = $(this).attr('data-type')
            let options = {};

            switch(type){

                case 'info':
                    options = {
                        heading: 'Information',
                        text: 'Some notification message here that describes the result of the user action.',
                        icon: 'info',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#fff',  // To change the background
                        position: {
                            top: "80px",
                            right:"20px",
                        }
                    };
                    break;

                case 'success':
                    options = {
                        heading: 'Success',
                        text: 'Some notification message here that describes the result of the user action.',
                        icon: 'success',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#fff',  // To change the background
                        position: {
                            top: "80px",
                            right:"20px",
                        }
                    };
                    break;

                case 'warning':
                    options = {
                        heading: 'Warning',
                        text: 'Some notification message here that describes the result of the user action.',
                        icon: 'warning',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#fff',  // To change the background
                        position: {
                            top: "80px",
                            right:"20px",
                        }
                    };
                    break;

                case 'error':
                    options = {
                        heading: 'Error',
                        text: 'Some notification message here that describes the result of the user action.',
                        icon: 'error',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#fff',  // To change the background
                        position: {
                            top: "80px",
                            right:"20px",
                        }
                    };
                    break;

                default:
                    options = {
                        heading: 'Simple',
                        text: 'Some notification message here that describes the result of the user action.',
                        loader: true,        // Change it to false to disable loader
                        loaderBg: '#E2EDFF',  // To change the background
                        position: {
                            top: "80px",
                            right:"20px",
                        }
                    };
                    break;

            }

            $.toast( options );

        });


    });

})( jQuery );

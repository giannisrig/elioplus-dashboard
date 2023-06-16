(function ($) {
    'use strict';

    $(document).ready(function(){

        console.log('tablees');

        $(".sortable").sortable({
            connectWith: ".sortable",
            appendTo: "parent",
            helper: "clone",
            cursor: "move",
            zIndex: 999990,
            update: function () {

                // $('.mytable').each(function () {
                //
                //     $(this).find('.numbering').each(function (j) {
                //         var humanNum = j + 1;
                //         $(this).html(humanNum + '');
                //     });
                //
                // });
            },
        });

    });

})( jQuery );

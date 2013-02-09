jQuery.fn.ready(function(){

    // jQuery as $
    (function($){
        $theBook = $('#theBook');


        // Call imagesLoaded with multiple callbacks, and save the deferred object
        var dfd = $theBook.imagesLoaded({
            callback: function($images, $proper, $broken){

                console.log( $images.length );
                console.log( $proper.length );
                console.log( $broken.length );

            }
            ,progress: function (isBroken, $images, $proper, $broken) {

                console.log(Math.round( ( ( $proper.length + $broken.length ) * 100 ) / $images.length ) + '%');

                // var loadingSpan = this.siblings('.loading');

                // if( isBroken ){
                //     loadingSpan.removeClass('loading').addClass('broken');
                // } else {
                //     loadingSpan.fadeOut(200, function(){ $(this).remove(); });
                // }

                // $progressBar.css({ width: Math.round( ( ( $proper.length + $broken.length ) * 100 ) / $images.length ) + '%' });

            }
        });

        // Subsequent deferred method registration (not to be used with progress method)
        dfd.always(function(){

            console.log('terminouuu');

            $('#theBook').booklet({
                closed: true
                ,width: 606
                ,autoCenter: true
                ,pageNumbers: false
                ,pagePadding: 0
            });

            // var dfdState = dfd.state();

            // $dfdLabel.addClass( 'label-' + ( dfdState === 'resolved' ? 'success' : 'important' ) ).text( dfdState );

            // $progress.hide();
            // $statusBar.show();
            // $progressBar.css({ width: 0 });

        });

    })(jQuery);

});

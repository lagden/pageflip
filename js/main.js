jQuery.fn.ready(function(){

    // jQuery as $
    (function($){

        var loading = new Loading('#loadingIcon');

        var $theBook = $('#theBook');

        // Preload das imagens
        loading.show();
        var dfd = $theBook.imagesLoaded({
            callback: function($images, $proper, $broken){

                console.log( $images.length );
                console.log( $proper.length );
                console.log( $broken.length );

            }
            ,progress: function (isBroken, $images, $proper, $broken) {

                console.log(Math.round( ( ( $proper.length + $broken.length ) * 100 ) / $images.length ) + '%');

            }
        });

        // Preload concluído
        dfd.always(function(){

            console.log('images loaded!!');
            loading.hide();

            $theBook.booklet({
                closed: true
                ,width: 960
                ,height: 634
                ,autoCenter: true
                ,pageNumbers: false
                ,pagePadding: 0
            })
            .removeClass('hidden')
            .css({'opacity':0})
            .animate({'opacity':1}, 1000);

            $('.triggerZoom').fancybox({
                padding: 0
                ,scrollOutside: false
                ,scrolling: false
                ,fitToView: true
                ,autoCenter: true
                ,afterShow: function(){
                    new TouchScroll(".fancybox-inner");
                    $(".fancybox-inner").bind("dragstart", function(e) {
                        if (e.target.nodeName.toUpperCase() == "IMG")
                            return false;
                    });
                }
            });
        });

    })(jQuery);

});

// Loading
function Loading(seletor)
{
    var self = this;
    var loading = jQuery(seletor);
    var arc = loading.find('.loadingArc').eq(0);
    TweenLite.to(arc, 1, {css:{rotation:360}, repeat: -1, ease:Linear.easeNone});
    self.show = function()
    {
        loading.removeClass('hidden');
        TweenLite.to(loading, 1, {css:{autoAlpha:1}});
    },
    self.hide = function()
    {
        TweenLite.to(loading, 1, {css:{autoAlpha:0}, onComplete:function(){
            loading.addClass('hidden');
        }});
    }
};

// Touch
function TouchScroll(container)
{
    container = jQuery(container);
    var content = jQuery(">.content", container);

    var self = this;
    var hammer = new Hammer(container.get(0), {
        drag: true,
        drag_vertical: true,
        drag_horizontal: true,
        drag_min_distance: 0,
        transform: false,
        tap: false,
        tap_double: false,
        hold: false
    });

    function getScrollPosition()
    {
        return {
            top: parseInt(content.css('top'), 10),
            left: parseInt(content.css('left'), 10)
        };
    }

    function getDimensions( el )
    {
        return {
            width: el.outerWidth(),
            height: el.outerHeight()
        };
    }

    this.scrollTo = function(x, y)
    {};

    var scroll_start = {};
    var scroll_dim = {};
    var content_dim = {};

    hammer.ondragstart = function()
    {
        scroll_start = getScrollPosition();
        scroll_start.time = new Date().getTime();

        scroll_dim = getDimensions( container );
        content_dim = getDimensions( content );
    };

    hammer.ondrag = function( ev )
    {
        if(ev.direction == 'up' || ev.direction == 'left')
            ev.distance = 0-ev.distance;

        var delta = 1;
        var top = scroll_start.top + ev.distance * delta;
        content.css({ top: top });
    };

    hammer.ondragend = function( ev )
    {
        var scroll = getScrollPosition();
        var corrections = {};
        if(scroll.top > 0)
        {
            corrections.top = 0;
        }
        else if(scroll.top < -(content_dim.height - scroll_dim.height) )
        {
            corrections.top = -(content_dim.height - scroll_dim.height);
        }
        content.animate(corrections, 400);
    };
}

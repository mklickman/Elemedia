(function($, window, undefined){
  $.fn.extend({ 
      
    //plugin name
    elemedia: function(mediaQuery, threshold) {


      /* REQUIRED ARGUMENTS
      /*------------------------------------------------------------------------------------------------//
      
        mediaQuery: [str] 'min-width': apply class when element is >= threshold
                          'max-width': apply class when element is <= threshold 
        threshold:  [int] Width in pixels that will add/remove custom class name

      */


      return this.each(function() {
        
        var $this = $(this);
        var className = 'mq-' + mediaQuery + '-' + threshold;

        var checkWidth = function() {

          // min-width behavior
          //----------------------------------------------------------------------------------//
          if (mediaQuery == 'min-width') {

            if ($this.width() >= threshold && !$this.hasClass(className)) {
              $this.addClass(className);
            }

            if ($this.hasClass(className) && $this.width() < threshold) {
              $this.removeClass(className);
            }
          }

          

          // max-width behavior
          //----------------------------------------------------------------------------------//
          if (mediaQuery == 'max-width') {

            if ($this.width() <= threshold && !$this.hasClass(className)) {
              $this.addClass(className);
            }

            if ($this.hasClass(className) && $this.width() > threshold) {
              $this.removeClass(className);
            }
          }

          
        }

        // Call once to set 
        checkWidth();

        // Call on resize.
        $(window).on('resize', checkWidth);
      });
    }

  });
})(jQuery, window);
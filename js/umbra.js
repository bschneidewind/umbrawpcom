/**
* comment-fix.js
*
* Quick JS to move the moderation note to below the comment content.
*/
( function( $ ) {
	var $notes = $('.comment-awaiting-moderation');

	if ( $notes.length > 0 ){

		$notes.each( function( index, element ){
			var $destination = $(element).closest( '.comment-body' ).find('.comment-content'),
				$note        = $(element).detach();

			$note.appendTo( $destination );
		});

	}

})( jQuery );
/**
* navigation.js
*
* Handles toggling the navigation menu for small screens.
*/
( function( $ ) {

	/**
	 * Run this code when the #toggle-menu link has been tapped
	 * or clicked
	 */
	$( '.menu-toggle' ).on( 'touchstart click', function(e) {
		e.stopPropagation();
		e.preventDefault();

		var $body = $( 'body' ),
			$page = $( '#content' ),
			$sidebar = $( '#masthead, .site-header-bg' ),

			/* Cross browser support for CSS "transition end" event */
			transitionEnd = 'transitionend webkitTransitionEnd otransitionend MSTransitionEnd';

		/* When the toggle menu link is clicked, animation starts */
		$body.addClass( 'animating' );

		/**
		 * Determine the direction of the animation and
		 * add the correct direction class depending
		 * on whether the menu was already visible.
		 */
		if ( $body.hasClass( 'menu-visible' ) ) {
			$body.addClass( 'close' );
		} else {
			$body.addClass( 'open' );
		}

		/**
		 * When the animation (technically a CSS transition)
		 * has finished, remove all animating classes and
		 * either add or remove the "menu-visible" class
		 * depending whether it was visible or not previously.
		 */
		$page.on( transitionEnd, function() {
			$body
				.removeClass( 'animating open close' )
				.toggleClass( 'menu-visible' );

			if ( $body.hasClass('rtl') ) {
				$( window ).scrollLeft( '100%' );
			}

			$page.off( transitionEnd );
		});

	});

})( jQuery );
( function() {
	var is_webkit = navigator.userAgent.toLowerCase().indexOf( 'webkit' ) > -1,
	    is_opera  = navigator.userAgent.toLowerCase().indexOf( 'opera' )  > -1,
	    is_ie     = navigator.userAgent.toLowerCase().indexOf( 'msie' )   > -1;

	if ( ( is_webkit || is_opera || is_ie ) && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var element = document.getElementById( location.hash.substring( 1 ) );

			if ( element ) {
				if ( ! /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) )
					element.tabIndex = -1;

				element.focus();
			}
		}, false );
	}
})();

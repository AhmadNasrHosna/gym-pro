
import GLightbox from 'glightbox'

;( function ( document, window, index )
{
	var inputs = document.querySelectorAll( '.inputfile' );
	Array.prototype.forEach.call( inputs, function( input )
	{
		var label	 = input.nextElementSibling,
			labelVal = label.innerHTML;

		input.addEventListener( 'change', function( e )
{
			var fileName = '';
			if( this.files && this.files.length > 1 )
				fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
			else
				fileName = e.target.value.split( '\\' ).pop();

			if( fileName )
				label.querySelector( 'span' ).innerHTML = fileName;
			else
				label.innerHTML = labelVal;
		});

		// Firefox bug fix
		input.addEventListener( 'focus', function(){ input.classList.add( 'has-focus' ); });
		input.addEventListener( 'blur', function(){ input.classList.remove( 'has-focus' ); });
	});
}( document, window, 0 ));


// -------

var lightbox = GLightbox();
var lightboxDescription = GLightbox({selector: 'glightbox2'});
var lightboxVideo = GLightbox({
	selector: 'glightbox3',
	jwplayer: {
		api: 'https://content.jwplatform.com/libraries/QzXs2BlW.js',
		licenseKey: 'imB2/QF0crMqHks7/tAxcTRRjnqA9ZwxWQ2N1A=='
	}
});
var lightboxInlineIframe = GLightbox({'selector': 'glightbox4'});
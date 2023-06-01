document.addEventListener( 'click', e => {
	if ( ! e.target.matches( '[x-toggle]' ) ) {
		return;
	}
	const [ selector, className ] = e.target.getAttribute( 'x-toggle' ).split( ':' );
	document.querySelector( selector ).classList.toggle( className );
} );

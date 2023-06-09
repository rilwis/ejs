{
	document.addEventListener( 'click', e => loop( e.target, 'x-toggle', toggle ) );

	// Run a callback for the element and its parents.
	const loop = ( el, attribute, callback ) => {
		do {
			callback( el, attribute );
			el = el.parentNode?.closest( `[${attribute}]` );
		} while ( el );
	}

	const toggle = ( el, attribute ) => {
		if ( ! el.matches( `[${attribute}]` ) ) {
			return;
		}
		const [ selector, className ] = el.getAttribute( attribute ).split( ':' );
		document.querySelector( selector ).classList.toggle( className );
	}
}
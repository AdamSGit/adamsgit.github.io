(function() {
	'use strict';

	// Get real page height on mobile
	document.documentElement.style.setProperty('--vhdyn', `${window.innerHeight * 0.01}px`);

	// Feather icons initialisation
	feather.replace();

	// Copy install code to clipboard on clip and display notice
	document.querySelector('.install-command').addEventListener('click', function() {
		document.querySelector('#install-command-copy').select();
        document.execCommand('copy');

        document.querySelector('.copied-notice').classList.add('visible');

        setTimeout(function () {
        	document.querySelector('.copied-notice').classList.remove('visible');
        }, 500)
	});
})();
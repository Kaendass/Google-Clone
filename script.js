document.getElementById('search_').addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
		search();
	}
});

function search() {
	const input = document.getElementById('search_').value;
	words = input.split(' ');
	new_input = '';
	if (words.length > 1) {
		for (i = 0; i < words.length; i++) {
			new_input = new_input + words[i] + '+';
		}
		new_input = new_input.slice(0, -1);
	} else {
		new_input = input;
	}
	search_link =
		'https://www.google.com.tr/search?q=' +
		new_input +
		'&sxsrf=AOaemvLk4h6RZQVG4b9aPQ2f_bBpd5NFXQ%3A1639573252219&source=hp&ei=BOe5YcmaCeiUxc8PkNKbSA&iflsig=ALs-wAMAAAAAYbn1FOLpY20pMM3DGb7GcwBz2360KhiE&ved=0ahUKEwjJrJyq7uX0AhVoSvEDHRDpBgkQ4dUDCAc&uact=5&oq=' +
		new_input +
		'&gs_lcp=Cgdnd3Mtd2l6EAMyCAguEIAEELEDMggIABCABBCxAzIICC4QgAQQsQMyCAgAEIAEELEDMggIABCABBCxAzIOCC4QgAQQsQMQxwEQrwEyCwguEIAEEMcBEK8BMggIABCABBCxAzIFCC4QgAQyCAguEIAEELEDOgcIIxDqAhAnOg0ILhDHARCjAhDqAhAnOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6BQgAEIAEOg4ILhCABBCxAxDHARDRA1DGzQhYnNIIYN3TCGgCcAB4AIABjgGIAY8FkgEDMC41mAEAoAEBsAEK&sclient=gws-wiz';

	location.assign(search_link);
	document.getElementById('search_').value = '';
}

function feel_lucky() {
	location.assign('https://www.google.com/doodles');
}

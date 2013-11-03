jQuery(document).ready(function($) {
	$.getJSON('/json/article.json').then(function (response) {
		// headline

		// subhed
		$('.lead').html(response.post.excerpt).val();
		// Author

		// body
	  $('#article').html(response.post.content).val();
	});
});
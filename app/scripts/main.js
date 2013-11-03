jQuery(document).ready(function($) {
	$.getJSON('/json/article.json').then(function (response) {
		// body
	  $('#article').html(response.post.content).val();

	  //$('.cover').backstretch(response.post.custom_fields.cover_image_url);
	});

	$('.cover').backstretch('/images/cover.jpg');
	$('.page-header').find('h1').fitText(0.8);
});
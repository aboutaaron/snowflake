jQuery(document).ready(function($) {
	$.getJSON('/json/article.json').then(function (response) {
		// body
	  $('#article').html(response.post.content).val();
	  $('#article').find('p:first').lettering('words');
	  $('.word1').lettering();
	  //$('.cover').backstretch(response.post.custom_fields.cover_image_url);

	  $('body').scrollspy({ target: 'p:nth-child(3)' })

	  $('p:nth-child(3)').on('activate.bs.scrollspy', function () {
  		alert('Activateeeeeeeeeeeeeeeed');
		})
	});

	$('.cover').backstretch('/images/cover.jpg');
	$('.page-header').find('h1').fitText(1.2);
});
'use strict';

jQuery(document).ready(function($) {
    $.getJSON('https://s3.amazonaws.com/media.apps.cironline.org/misc/article.json').then(function (response) {
        // body
        $('#article').html(response.post.content).val();
        $('#article').find('p:first').lettering('words');
        $('.word1').lettering();

        $('body').scrollspy({
            target: 'p:nth-child(3)'
        });
    });

    $('.cover').backstretch('https://s3.amazonaws.com/media.apps.cironline.org/misc/cover.jpg');
    $('.page-header').find('h1').fitText(1.2);
});
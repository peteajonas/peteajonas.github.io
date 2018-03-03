var josh_warren ='<iframe class="boom" src="https://open.spotify.com/embed?uri=spotify:track:53ilk7tL2sH2iWvPphQtJ2" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'
var amal = '<iframe class="boom" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/407852838&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
var hypo = '<iframe class="boom" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/372670877&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>'

$('.music__card').click(function() {
  $('.boom').remove();
  if ($(this).data('music') == 'hypo') {
    $('.music__player').append(hypo);
  }

  else if ($(this).data('music') == 'amal') {
    $('.music__player').append(amal);
  }

  else if ($(this).data('music') == 'josh_warren') {
    $('.music__player').append(josh_warren);
  }
});

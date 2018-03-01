var vampire = '<iframe class="boom" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/295768003&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
var waltz = '<iframe class="boom" width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/296955527&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>';
var jonas_warren = '<iframe class="boom" src="https://open.spotify.com/embed?uri=spotify:artist:5qCMxTtGJmNQJVFrPUeCA5&theme=white" width="400" height="480" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>'

$('.music__card').click(function() {
  $('.boom').remove();
  if ($(this).data('music') == 'jonas_warren') {
    $('.music__player').append(jonas_warren);
  } else if ($(this).data('music') == 'vampires') {
    $('.music__player').append(vampire);
  } else if ($(this).data('music') == 'waltz') {
    $('.music__player').append(waltz);
  }
});

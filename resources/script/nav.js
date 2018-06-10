$('ul.nav li.chapters > a').click(function(e){
  e.preventDefault();
  if ($('body').hasClass('menuopen')) {
    // close menu
    $('body').removeClass('menuopen');
    $('ul.nav li.chapters > a').html('<i class="far fa-bars fa-2x"></i> Chapters');
  }
  else {
    // open menu
    $('body').addClass('menuopen');
    $('ul.nav li.chapters > a').html('<i class="far fa-times fa-2x"></i> Close');
  }
});

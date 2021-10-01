$(function(){

  'use script'

  $('#burgerMenu').on('click', function(e){
    e.preventDefault();
    $('body').toggleClass('show-menu');
  })
});

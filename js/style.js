//Particles(トップ画面)
window.onload = function() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#fff4e6', '#ffe9e4', 'rgba(0,187,221,.2)'
    ]
  });
};

//modal
$(function(){
  $('.js-modal-open').each(function(){
      $(this).on('click',function(){
          var target = $(this).data('target');
          var modal = document.getElementById(target);
          $(modal).fadeIn();
      });
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
  }); 
});
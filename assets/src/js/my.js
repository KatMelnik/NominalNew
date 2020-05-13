/* svg */
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});

/*tabs news*/
$(function(){
    var max = $(".most-articles__choice").hide(), inp = $("input[name='deals']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});

$('.most-articles__tabs-item input').on('click', function() {
      $('.most-articles__tabs-item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.most-articles__tabs-item').addClass('active');
        }
});

/*tabs kurs*/
$(function(){
    var max = $(".kurs-val__table").hide(), inp = $("input[name='kurs']");
    inp.click(function() {
        var indx = inp.index(this);
        max.hide().eq(indx).show().css({display:'flex'});
    }).filter(':checked').click();
});
$('.kurs-val__tabs-item input').on('click', function() {
      $('.kurs-val__tabs-item').removeClass('active');
      if ($('input').is(':checked')) {
            $(this).closest('.kurs-val__tabs-item').addClass('active');
        }
});
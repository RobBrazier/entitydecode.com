$(function(){
  $("a[id=example]").on('click', function(){
    $("textarea#encoded").val('%57%65l%63om%65%20%74o%20%45nt%69t%79%44%65%63o%64%65%21');
    $("textarea#decoded").val(unescape(html_entity_decode('%57%65l%63om%65%20%74o%20%45nt%69t%79%44%65%63o%64%65%21')));
    return false;
  });
  $("textarea[id=encoded]").on('keyup', function(){
    var inputValue = $(this).val();
    $("textarea[id=decoded]").val(unescape(html_entity_decode(inputValue)));
  });
  $("textarea[id=decoded]").on('keyup', function(){
    var inputValue = $(this).val();
    $("textarea[id=encoded]").val(htmlentities(inputValue));
  });
  $("a.htmlent").on('click', function() {
    $('#htmlent').modal('show');
    return false;
  });
  $("a.urlencoding").on('click', function() {
    $('#urlencoding').modal('show');
    return false;
  });
  $('a.what').on('click', function(){
    $('#about').collapse('toggle');
    return false;
  });
});
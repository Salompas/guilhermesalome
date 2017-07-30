window.onload = function() {
  $(".blog-post").click(function(e) {
    var postLink = $(this).find(".title").html().split(' ').join('-').toLowerCase();
    window.location.href = '/posts/' + postLink + '.html';
    return false;
  })
}

$(document).ready(function() {
  $(window).resize(function() {
    $("#debug").text($(window).width());
  })
})
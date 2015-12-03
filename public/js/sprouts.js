
// For forcing the scroll back to the top upon refresh
$(document).ready(function(){
  $("body").scrollTop(0);
});

// Counter for pagination
var pageNumber = 2

// Paginating upon scroll
$(window).scroll(function(event) {
  if($(window).scrollTop() + $(window).height() === $(document).height()) {
    $.ajax({
      method: "GET",
      url: "/tweets.json",
      data: { page: pageNumber }
    }).done(function(data) {
      pageNumber++;
      for(i = 0; i < data.length; i++) {
        $(".tweets").append(
          "<li class='tweet'>" +
            "<div class='body'>" + data[i].text + "</div>" +
            "<div class='user'>" + data[i].username + "</div>" +
          "</li>"
        );
      }
    });
  }
  return false;
});

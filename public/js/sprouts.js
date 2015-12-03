// when click more more tweets link
  // inhibit the default behaviour
  // make an asynchronous request to the server with a specified page number
  // append the list of tweets with the response data
  // update the page number for the next request

var pageNumber = 2

$(document).ready(function(){
    $(this).scrollTop(0);
});

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

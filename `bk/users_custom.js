'use strict';
$(document).ready(function () {
  $('#table').DataTable({
    "dom": "<'row'<'col-md-5 col-12 float-left'l><'col-md-7 col-12'f>r><'table-responsive't><'row'<'col-md-5 col-12'i><'col-md-7 col-12'p>>", // datatable layout without  horizobtal scroll
    "responsive": true
  });
});


! function ($) {
  var t = function () {
      var t = [];
      return $("img").each(function () {
        var a = $(this).data("alt");
        t.push(a)
      }), t
    },
    a = t(),
    r = [];
  $.each(a, function (t) {
    r[t] = new Image, r[t].src = a[t]
  }), $("span").on("click", function () {
    var t = $(this),
      a = t.index(),
      r = t.children("img"),
      i = r.attr("src"),
      n = r.attr("data-alt"),
      c = n.split(".");
    "gif" === c[1] ? r.attr("src", r.data("alt")).attr("data-alt", i) : r.attr("src", n).attr("data-alt", r.data("alt")), t.toggleClass("play")
  })
}(jQuery);


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {
    slideIndex = 1
  }
  if (n < 1) {
    slideIndex = x.length
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex - 1].style.display = "block";
}



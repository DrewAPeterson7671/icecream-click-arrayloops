$(document).ready(function() {

  var elements = ['h1', 'p', 'img'];

  elements.forEach(function(element) {
      $(element).click(function() {
      alert('this is a ' + element);
    });
  });

var flavors = ['vanilla', 'chocolate', 'mocha'];

flavors.forEach(function(sofa) {
  $('#list').append('<li>' + sofa + '</li>');
  });
});
      // $("h1").click(function() {
        //   alert("This is a header.");
        // });
        //
        // $("p").click(function() {
          //   alert("This is a paragraph.");
          // });
          //
          // $("img").click(function() {
            //   alert("This is an image.");
            // });

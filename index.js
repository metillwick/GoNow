var $form = $('form#test-form'),
    url = 'https://script.google.com/macros/s/AKfycbzQO9T0m-1BqiJMpi3_ZL6EJ-Ryli_HnVYsZPOMO8pmjdrDDHY/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    $("span").removeAttr("hidden")
  );
})

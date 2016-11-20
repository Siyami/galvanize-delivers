(function() {
  'use strict';
  let subTotal = 0;

  $('#products').on('click', 'a', function(event) {
    let orderName = $(event.target).attr('name');
    let orderPrice = $(event.target).attr('value');
    subTotal += parseFloat(orderPrice);
    Math.round(subTotal * 100) / 100;

    // $('#orderName').text(orderName);
    // $('#orderPrice').text(orderPrice);

    $('tbody').prepend('<tr><td>' + orderName + '<td><td>' + orderPrice +
      '<td><tr>');
    $('#subTotal').text(subTotal);
    console.log(subTotal);


  });

})();

// $('ul').on('click', 'li', function(event) {
//     $(event.target).toggleClass('completed');
//   });
//
//   $('span').on('click', function(event) {
//     $(event.target).parent().remove();
//     event.stopPropagation();
//   });
//
//   $("button").click(function(event) {
//     let newToDo = $('input[type="text"]').val();
//     $('ul').append('<li>' + newToDo + '<li>');
//     $('input').val('');
//     event.stopPropagation();
//   });

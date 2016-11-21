(function() {
  'use strict';
  let subTotal = 0;
  const tax = 0.08;
  let totalTax;
  let total;

  $('#products').on('click', 'a', function(event) {
    let orderName = $(event.target).attr('name');
    let orderPrice = $(event.target).attr('value');
    //convert orderPrice from a string to float
    subTotal += parseFloat(orderPrice);
    //round to at most 2 decimal places
    subTotal = Math.round(subTotal * 100) / 100;
    totalTax = tax * subTotal;
    //round to at most 2 decimal places
    totalTax = Math.round(totalTax * 100) / 100;
    total = subTotal + totalTax;
    //round to at most 2 decimal places
    total = Math.round(total * 100) / 100;

    // $('#orderName').text(orderName);
    // $('#orderPrice').text(orderPrice);

    $('thead').append('<tr><td>' + orderName + '<td><td>' + '$' +
      orderPrice +
      '<td><tr>');
    $('#subTotal').text('$' + subTotal);
    $('#tax').text('$' + totalTax);
    $('#total').text('$' + total);

  });

  console.log($('#icon_address').attr('class') === "validate validated");
  //

  $('#placeOrder').on('click', function(event) {
    if (subTotal > 0 && $('#icon_fullName').attr('class') ===
      "validate valid" && $('#icon_telephone').attr('class') ===
      "validate valid" && $('#icon_address').attr('class') ===
      "validate valid") {
      alert('Your order has been placed successfully!');
    } else if (subTotal > 0 && $('#icon_fullName').attr('class') !==
      "validate valid" && $('#icon_telephone').attr('class') ===
      "validate valid" && $('#icon_address').attr('class') ===
      "validate valid") {
      alert('Please enter your name.');
    } else if (subTotal > 0 && $('#icon_fullName').attr('class') ===
      "validate valid" && $('#icon_telephone').attr('class') !==
      "validate valid" && $('#icon_address').attr('class') ===
      "validate valid") {
      alert('Please enter your phone number.');
    } else if (subTotal > 0 && $('#icon_fullName').attr('class') ===
      "validate valid" && $('#icon_telephone').attr('class') ===
      "validate valid" && $('#icon_address').attr('class') !==
      "validate valid") {
      alert('Please enter your address.');
    } else if (subTotal === 0 && $('#icon_fullName').attr('class') ===
      "validate valid" && $('#icon_telephone').attr('class') ===
      "validate valid" && $('#icon_address').attr('class') ===
      "validate valid") {
      alert('Please add an item.');
    }
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

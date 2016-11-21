(function() {
  'use strict';
  let subTotal = 0;
  const tax = 0.08;
  let totalTax;
  let total;

  $('#products').on('click', 'a', (event) => {
    const orderName = $(event.target).attr('name');
    const orderPrice = $(event.target).attr('value');

    // convert orderPrice from a string to float
    subTotal += parseFloat(orderPrice);
    // round to at most 2 decimal places
    subTotal = Math.round(subTotal * 100) / 100;
    totalTax = tax * subTotal;
    // round to at most 2 decimal places
    totalTax = Math.round(totalTax * 100) / 100;
    total = subTotal + totalTax;
    // round to at most 2 decimal places
    total = Math.round(total * 100) / 100;

    // $('#orderName').text(orderName);
    // $('#orderPrice').text(orderPrice);

    $('thead').append('<tr><td>' + orderName + '<td><td>' + '$' +
      orderPrice + '<td><tr>');
    $('#subTotal').text('$' + subTotal);
    $('#tax').text('$' + totalTax);
    $('#total').text('$' + total);
  });

  $('#placeOrder').on('click', () => {
    if (subTotal > 0 && $('#icon_fullName').attr('class') ===
      'validate valid' && $('#icon_telephone').attr('class') ===
      'validate valid' && $('#icon_address').attr('class') ===
      'validate valid') {
      alert('Your order has been placed successfully!');
    } else if (subTotal > 0 && $('#icon_fullName').attr('class') !==
      'validate valid' && $('#icon_telephone').attr('class') ===
      'validate valid' && $('#icon_address').attr('class') ===
      'validate valid') {
      alert('Please enter your name.');
    } else if (subTotal > 0 && $('#icon_fullName').attr('class') ===
      'validate valid' && $('#icon_telephone').attr('class') !==
      'validate valid' && $('#icon_address').attr('class') ===
      'validate valid') {
      alert('Please enter your phone number.');
    } else if (subTotal > 0 && $('#icon_fullName').attr('class') ===
      'validate valid' && $('#icon_telephone').attr('class') ===
      'validate valid' && $('#icon_address').attr('class') !==
      'validate valid') {
      alert('Please enter your address.');
    } else if (subTotal === 0 && $('#icon_fullName').attr('class') ===
      'validate valid' && $('#icon_telephone').attr('class') ===
      'validate valid' && $('#icon_address').attr('class') ===
      'validate valid') {
      alert('Please add an item.');
    }
  });
  event.preventDefault();
})();

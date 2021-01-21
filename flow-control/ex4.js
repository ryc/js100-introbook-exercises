// flow control - ex4.js

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113'); 
/* logs the following because there is no break for the case clauses:
Product2
Product3
Product not found!
*/
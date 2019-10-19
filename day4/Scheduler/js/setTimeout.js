function sayHi() {
  alert('Hello');
}

setTimeout(sayHi, 1000);

function sayHello(phrase, who) {
  alert( phrase + ', ' + who );
}

setTimeout(sayHello, 2000, "Hello", "John"); // Hello, John
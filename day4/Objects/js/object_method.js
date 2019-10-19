let user = {
    name: "John",
    age: 30
  };
  
  user.sayHi = function() {
    alert("Hello!");
  };
  
  user.sayHi(); // Hello!

  // these objects do the same

// user = {
//     sayHi: function() {
//       alert("Hello");
//     }
//   };
  
//   // method shorthand looks better, right?
//   user = {
//     sayHi() { // same as "sayHi: function()"
//       alert("Hello");
//     }
//   };
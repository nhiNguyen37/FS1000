try {
    alert('Start of try runs');  // (1) <--
    lalala; // error, variable is not defined!
    alert('End of try (never reached)');  // (2)
  } catch(err) {
    alert(err.name); // ReferenceError
    alert(err.message); // lalala is not defined
    alert(err.stack); // ReferenceError: lalala is not defined at (...call stack)
  
    // Can also show an error as a whole
    // The error is converted to string as "name: message"
    alert(err); // ReferenceError: lalala is not defined
  }

//For try..catch to work, the code must be runnable. In other words, it should be valid JavaScript.
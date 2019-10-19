try {
    setTimeout(function() {
      noSuchVariable; // script will die here
    }, 1000);
  } catch (e) {
    alert( "won't work" );
  }
  
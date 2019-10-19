let user = {
    name: "John",
    age: 30
  };

alert(Object.keys(user));
alert(Object.values(user));
alert(Object.entries(user));

// loop over values
for (let value of Object.values(user)) {
  alert(value); // John, then 30
}
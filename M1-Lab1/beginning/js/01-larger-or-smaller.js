(() => {
  function print(...parts){
    const msg = parts.join(" ");
    console.log(msg);
    const r = document.getElementById('results');
    if (r) r.textContent += msg + "\n";
  }

  let n1 = parseInt(prompt("Enter first number:"), 10);
  let n2 = parseInt(prompt("Enter second number:"), 10);

  if (Number.isNaN(n1) || Number.isNaN(n2)) {
    print("One or both entries were not valid numbers.");
  } else if (n1 > n2) {
    print(n1 + " is larger");
  } else if (n2 > n1) {
    print(n2 + " is larger");
  } else {
    print("Both are equal");
  }
})();

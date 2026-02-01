(() => {
  function print(...parts){
    const msg = parts.join(" ");
    console.log(msg);
    const r = document.getElementById('results');
    if (r) r.textContent += msg + "\n";
  }

  const raw = prompt("Enter a number to count down from:");
  if (raw === null) {
    print("Countdown cancelled by user.");
  } else {
    const start = parseInt(raw, 10);
    if (Number.isNaN(start)) {
      print("That was not a valid number.");
    } else {
      print("Countdown from " + start + ":");
      for (let i = start; i >= 0; i--) {
        print(i);
      }
    }
  }
})();

(() => {
  function print(...parts){
    const msg = parts.join(" ");
    console.log(msg);
    const r = document.getElementById('results');
    if (r) r.textContent += msg + "\n";
  }

  let coinFlip;
  print("Coin Flip Redux: 10 flips:");
  for (let i = 0; i < 10; i++) {
    coinFlip = Math.floor(Math.random() * 2); // 0 or 1
    if (coinFlip === 0) {
      print("Heads");
    } else {
      print("Tails");
    }
  }
})();


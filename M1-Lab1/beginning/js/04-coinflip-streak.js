(() => {
  function print(...parts){
    const msg = parts.join(" ");
    console.log(msg);
    const r = document.getElementById('results');
    if (r) r.textContent += msg + "\n";
  }

  let coinFlip;
  let streak = 0;
  print("Coin Flip Streak: flipping until first Tails (Tails ends streak).");
  do {
    coinFlip = Math.floor(Math.random() * 2); 
    if (coinFlip === 0) {
      print("Heads");
      streak++;
    } else {
      print("Tails");
    }
  } while (coinFlip === 0);
  print("Heads streak:", streak);
})();

(() => {
  function print(...parts){
    const msg = parts.join(" ");
    console.log(msg);
    const r = document.getElementById('results');
    if (r) r.textContent += msg + "\n";
  }

  const coin = Math.floor(Math.random() * 2); 
  const choiceRaw = prompt("Heads or Tails? (type heads or tails)");
  if (choiceRaw === null) {
    print("User cancelled the choice.");
  } else {
    const choice = choiceRaw.trim().toLowerCase();
    const isHead = (coin === 0);

    if (isHead && choice === "heads") {
      alert("The flip was heads and you chose heads...you win!");
      print("The flip was heads and you chose heads...you win!");
    } else if (isHead && choice === "tails") {
      alert("The flip was heads but you chose tails...you lose!");
      print("The flip was heads but you chose tails...you lose!");
    } else if (!isHead && choice === "heads") {
      alert("The flip was tails but you chose heads...you lose!");
      print("The flip was tails but you chose heads...you lose!");
    } else if (!isHead && choice === "tails") {
      alert("The flip was tails and you chose tails...you win!");
      print("The flip was tails and you chose tails...you win!");
    } else {
      alert("Invalid choice. Please enter Heads or Tails (or heads/tails).");
      print("Invalid choice. Please enter 'heads' or 'tails'.");
    }
  }
})();

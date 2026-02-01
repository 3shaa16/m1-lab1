(() => {
  function print(...parts){
    const msg = parts.join(" ");
    console.log(msg);
    const r = document.getElementById('results');
    if (r) r.textContent += msg + "\n";
  }

  let line = "";
  print("Triangle:");
  for (let i = 1; i <= 7; i++) {
    line += "#";
    print(line);
  }
})();

// Einfacher, leichtgewichtiger Typing-Effekt für Hero Terminal (deutsche Strings)
(function(){
  const el = document.getElementById('terminal');
  if(!el) return;
  const lines = [
    "Wak‑Lab bereit. Willkommen im Hackerspace.",
    "HACKERSPACE · MAKERSPACE · CHAOSTREFF",
    "Nächster offener Abend: Mi 20:00",
    "Mitmachen: /mitmachen   |   Events: /events"
  ];
  let li = 0, ci = 0, forward = true;
  function tick(){
    const full = lines[li];
    el.textContent = full.slice(0, ci);
    if(forward){
      ci++;
      if(ci > full.length){ forward=false; setTimeout(tick,1200); return; }
    } else {
      ci--;
      if(ci < 0){ forward=true; li = (li+1) % lines.length; ci=0; }
    }
    setTimeout(tick, 40 + Math.random()*40);
  }
  tick();
})();

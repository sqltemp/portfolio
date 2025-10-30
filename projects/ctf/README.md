---
layout: default
title: Capture The Flag
---

<!-- CTF – page dédiée (placer ce fichier dans /projects/ctf/index.md) -->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="/assets/css/custom.css">

<section class="terminal-hero">
  <h1 class="hero-title">🏴‍☠️ Capture The Flag</h1>
  <p class="hero-sub">Sélection de CTF réalisés : méthodo, outils, flags trouvés et write-ups en PDF.</p>
  <nav class="hero-nav">
    <a href="/">Accueil</a>
    <a href="#web">Web</a>
    <a href="#pwn">Pwn</a>
    <a href="#forensic">Forensic</a>
    <a href="#crypto">Crypto</a>
    <a href="#misc">Misc</a>
  </nav>
</section>

<!-- ===== WEB ===== -->
<section class="terminal-section" id="web">
  <h2>🌐 Web</h2>
  <div class="projects-row">

    <div class="project-card">
      <img src="/assets/ctf/web-1.png" alt="CTF Web 1">
      <h3>&gt; SQLi Shop — Injection SQL basique</h3>
      <p>Exploitation d’une injection SQL pour contourner l’authentification et exfiltrer des données.</p>
      <p class="stack">Outils : Burp Suite · sqlmap · Firefox DevTools</p>
      <div class="tags"><span class="tag">easy</span><span class="tag">web</span><span class="tag">sqli</span></div>
      <a class="btn" href="/assets/reports/ctf-sqli-shop.pdf">Ouvrir le rapport</a>
    </div>

    <div class="project-card">
      <img src="/assets/ctf/web-2.png" alt="CTF Web 2">
      <h3>&gt; XSS Forum — Cross-Site Scripting</h3>
      <p>XSS stocké, prise de session administrateur (cookie theft) et propositions de mitigation.</p>
      <p class="stack">Outils : Burp · DOM Invader · CSP Evaluator</p>
      <div class="tags"><span class="tag">medium</span><span class="tag">web</span><span class="tag">xss</span></div>
      <a class="btn" href="/assets/reports/ctf-xss-forum.pdf">Ouvrir le rapport</a>
    </div>

    <div class="project-card">
      <img src="/assets/ctf/web-3.png" alt="CTF Web 3">
      <h3>&gt; Auth Logic — Bypass d’authentification</h3>
      <p>Bypass logique (validation token défaillante) puis escalade vers panneau d’admin.</p>
      <p class="stack">Outils : Burp · JWT Toolkit · Postman</p>
      <div class="tags"><span class="tag">medium</span><span class="tag">web</span><span class="tag">logic</span></div>
      <a class="btn" href="/assets/reports/ctf-auth-logic.pdf">Ouvrir le rapport</a>
    </div>

  </div>
</section>

<!-- ===== PWN / BINARY ===== -->
<section class="terminal-section" id="pwn">
  <h2>🧨 Pwn / Binary</h2>
  <div class="projects-row">

    <div class="project-card">
      <img src="/assets/ctf/pwn-1.png" alt="Pwn 1">
      <h3>&gt; Buffer Overflow — ret2win</h3>
      <p>Écrasement d’EIP et redirection contrôlée vers la fonction de victoire.</p>
      <p class="stack">Outils : gdb-gef · pwntools · checksec</p>
      <div class="tags"><span class="tag">medium</span><span class="tag">pwn</span><span class="tag">bo</span></div>
      <a class="btn" href="/assets/reports/ctf-bo-ret2win.pdf">Ouvrir le rapport</a>
    </div>

    <div class="project-card">
      <img src="/assets/ctf/pwn-2.png" alt="Pwn 2">
      <h3>&gt; Format String — Leak & overwrite</h3>
      <p>Fuite d’adresses et écriture contrôlée pour détourner le flux d’exécution.</p>
      <p class="stack">Outils : gdb · pwntools · ROPgadget</p>
      <div class="tags"><span class="tag">hard</span><span class="tag">pwn</span><span class="tag">fmt</span></div>
      <a class="btn" href="/assets/reports/ctf-format-string.pdf">Ouvrir le rapport</a>
    </div>

  </div>
</section>

<!-- ===== FORENSIC ===== -->
<section class="terminal-section" id="forensic">
  <h2>🔎 Forensic</h2>
  <div class="projects-row">

    <div class="project-card">
      <img src="/assets/ctf/forensic-1.png" alt="Forensic 1">
      <h3>&gt; PCAP Hunt — Exfiltration réseau</h3>
      <p>Analyse PCAP : extraction d’objets, reconstruction de flux, IOC et chronologie.</p>
      <p class="stack">Outils : Wireshark · Zeek · NetworkMiner</p>
      <div class="tags"><span class="tag">easy</span><span class="tag">forensic</span><span class="tag">pcap</span></div>
      <a class="btn" href="/assets/reports/ctf-pcap-hunt.pdf">Ouvrir le rapport</a>
    </div>

  </div>
</section>

<!-- ===== CRYPTO ===== -->
<section class="terminal-section" id="crypto">
  <h2>🔐 Crypto</h2>
  <div class="projects-row">

    <div class="project-card">
      <img src="/assets/ctf/crypto-1.png" alt="Crypto 1">
      <h3>&gt; RSA Basics — Clé faible</h3>
      <p>Factorisation via GCD sur clés réutilisées et récupération du message.</p>
      <p class="stack">Outils : RsaCtfTool · Python · Sage</p>
      <div class="tags"><span class="tag">easy</span><span class="tag">crypto</span><span class="tag">rsa</span></div>
      <a class="btn" href="/assets/reports/ctf-rsa-basics.pdf">Ouvrir le rapport</a>
    </div>

  </div>
</section>

<!-- ===== MISC ===== -->
<section class="terminal-section" id="misc">
  <h2>🧩 Misc</h2>
  <div class="projects-row">

    <div class="project-card">
      <img src="/assets/ctf/misc-1.png" alt="Misc 1">
      <h3>&gt; OSINT — Profilage rapide</h3>
      <p>Recoupement de traces publiques (images, métadonnées) pour identifier un individu.</p>
      <p class="stack">Outils : exiftool · Google dorks · Spiderfoot</p>
      <div class="tags"><span class="tag">medium</span><span class="tag">osint</span></div>
      <a class="btn" href="/assets/reports/ctf-osint-profiling.pdf">Ouvrir le rapport</a>
    </div>

  </div>
</section>

<!--
Dossiers attendus :
- /projects/ctf/index.md    ← cette page
- /assets/ctf/*.png         ← images d’illustration
- /assets/reports/*.pdf     ← vos rapports PDF (liens des boutons)
-->

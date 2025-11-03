<!--
README.md – Portfolio cybersécurité (style visuel à la Malachi Gamblin)
Mode d’emploi :
1) Copiez tout ce fichier dans votre README.md de repo GitHub.
2) Remplacez les zones [ENTRE CROCHETS] par vos infos.
3) Placez vos images dans /assets/ (profilepic.jpg, project*.png, logos…).
4) Si certains styles HTML sont trop “stricts” pour GitHub Mobile, utilisez la SECTION DE SECOURS (pur Markdown) plus bas.
-->
<meta name="viewport" content="width=device-width, initial-scale=1" />
<link rel="stylesheet" href="/assets/css/custom.css">


<!-- ===== HERO / BANNIÈRE ===== -->
<div align="center" style="background:#1f1f1f; padding:56px 20px; color:#fff; border-radius:14px;">
  <img src="assets/profilepic.jpg" alt="Photo de [VOTRE NOM]" width="150" style="border-radius:50%; border:4px solid #3fb950;">
  <h1 style="margin:18px 0 6px;">Thierry Matrat</h1>
  <p style="margin:0; font-size:18px; opacity:.9;">Analyste en cybersécurité • Blue/Red Team • Support techique et formation</p>
  <p style="margin:8px 0 0; font-size:14px; opacity:.85;">Projets, articles et ressources pour votre cybersécurité.</p>
  
  <!-- mini navigation -->
  <p style="margin-top:22px;">
    <a href="#a-propos" style="color:#3fb950; text-decoration:none; margin:0 10px;">À propos</a> ·
    <a href="#projets" style="color:#3fb950; text-decoration:none; margin:0 10px;">Projets</a> ·
    <a href="#competences" style="color:#3fb950; text-decoration:none; margin:0 10px;">Compétences</a> ·
    <a href="#certifications" style="color:#3fb950; text-decoration:none; margin:0 10px;">Certifications</a> ·
    <a href="#contact" style="color:#3fb950; text-decoration:none; margin:0 10px;">Contact</a>
  </p>
</div>

---

<!-- ===== À PROPOS ===== -->
<h2 id="a-propos">👋 À propos</h2>

Analyste en cybersécurité, je me consacre à rendre la cybersécurité accessible à tous par des formations adaptées, et à aider mes clients à renforcer leur posture de sécurité par des actions concrètes.


- 👉 Objectif du portfolio : mettre à disposition l'ensemble de mes notes de projets et de cours, via des cheatsheets claires et concises.
- 🔭 Sujets principaux : renforcement de la posture cyberdéfensive de PME, formations 'Cybersécurité 101 et défense contre les attaques par hameçonnage'  
- 💡 Mes intérêts : Blue/Red Team, Forensique, SIEM, EDR, Sécurité infonuagique, cartographie de menaces

---

<!-- ===== PROJETS (cartes) ===== -->
<h2 id="projets">🧩 Projets phares</h2>

<!-- SECTION PROJETS PHARES – ALIGNEMENT 3 CARTES & TEXTE BLANC -->
<!--div style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px; background-color:#000; padding:30px; border-radius:12px;"> -->
<div class="projects-row" style="display:flex; flex-wrap:wrap; justify-content:center; gap:20px; background-color:#000; padding:30px; border-radius:12px;">

  <!-- CARTE 1 -->
  <div style="flex:1 1 300px; min-width:220px; max-width:280px; background-color:#0d0d0d; border:1px solid #3fb950; border-radius:10px; padding:18px; color:#ffffff; font-family:'Courier New', monospace; box-shadow:0 0 10px rgba(63,185,80,0.2); text-align:center;display:flex;flex-direction:column;">
    <img src="assets/project1.png" alt="Sécurité des PME" style="width:100%; border-radius:6px; margin-bottom:12px; border:1px solid #3fb950;">
    <h3 style="margin:6px 0 10px; color:#ffffff;">> Développement de programmes de cybersécurité pour les PME</h3>
    <p style="margin:0 0 12px; line-height:1.5;">Inventaire actifs, scans (Nmap/Nessus), choix et configuration d'outils défensifs.</p>
    <p style="margin:0 0 12px; font-size:14px; opacity:.9;">Stack : Nmap · Nessus · Python</p>
    <a href="projects/secu-PME/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">Ouvrir le projet</a>
  </div>

  <!-- CARTE 2 -->
  <div style="flex:1 1 300px; min-width:220px; max-width:280px; background-color:#0d0d0d; border:1px solid #3fb950; border-radius:10px; padding:18px; color:#ffffff; font-family:'Courier New', monospace; box-shadow:0 0 10px rgba(63,185,80,0.2); text-align:center;display:flex;flex-direction:column;">
    <img src="assets/project2.png" alt="Formations" style="width:100%; border-radius:6px; margin-bottom:12px; border:1px solid #3fb950;">
    <h3 style="margin:6px 0 10px; color:#ffffff;">> Formation 'Cybersécurité 101'</h3>
    <p style="margin:0 0 12px; line-height:1.5;">Sensibilisation aux techniques de hameconnage via des activités ludiques et des périodes de discussion.</p>
    <p style="margin:0 0 12px; font-size:14px; opacity:.9;">Stack : support de formation </p>
    <a href="projects/formations-101/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">Ouvrir le projet</a>
  </div>

  <!-- CARTE 3 -->
  <div style="flex:1 1 300px; min-width:220px; max-width:280px; background-color:#0d0d0d; border:1px solid #3fb950; border-radius:10px; padding:18px; color:#ffffff; font-family:'Courier New', monospace; box-shadow:0 0 10px rgba(63,185,80,0.2); text-align:center;display:flex;flex-direction:column;">
    <img src="assets/project3.png" alt="A venir" style="width:100%; border-radius:6px; margin-bottom:12px; border:1px solid #3fb950;">
    <h3 style="margin:6px 0 10px; color:#ffffff;">> A Déterminer</h3>
    <p style="margin:0 0 12px; line-height:1.5;">A Déterminer.</p>
    <p style="margin:0 0 12px; font-size:14px; opacity:.9;">Stack : A Déterminer · A Déterminer · A Déterminer </p>
    <a href="projects/a-venir/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">Ouvrir le projet</a>
  </div>

</div>


<!-- ===== AUTRES PROJETS (cartes) ===== -->
<h3 id="Autres projets">➕ Autres projets (write-ups CTF, articles, cheatsheets et ressources diverses par thème…)</h3>

<div class="projects-row" style="
  display:flex; 
  flex-wrap:nowrap; 
  justify-content:space-between; 
  gap:14px; 
  background-color:#000; 
  padding:24px; 
  border-radius:12px;
  overflow-x:auto; 
  -webkit-overflow-scrolling:touch;
">

  <!-- STYLE BLEU / CYBER -->
  <!-- CARTE 4 -->
  <div style="
    flex:0 0 20%; 
    max-width:20%; 
    background-color:#0a0f16; 
    border:1px solid #3fb950; 
    border-radius:10px; 
    padding:14px; 
    color:#e9f1ff; 
    font-family:'Courier New', monospace; 
    box-shadow:0 0 10px rgba(79,179,255,0.18); 
    text-align:center;
    display:flex; 
    flex-direction:column;
  ">
    <!--img src="assets/project1.png" alt="CTFs" style="width:68%; border-radius:6px; margin-bottom:10px; border:1px solid #4fb3ff;"-->
    <p style="margin:0 0 10px; line-height:1.45;">Write-ups de divers CTFs.</p>
    <a href="projects/ctf/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">CTF</a>
  </div>

  <!-- CARTE 5 -->
  <div style="
    flex:0 0 20%; 
    max-width:20%; 
    background-color:#0a0f16; 
    border:1px solid #3fb950; 
    border-radius:10px; 
    padding:14px; 
    color:#e9f1ff; 
    font-family:'Courier New', monospace; 
    box-shadow:0 0 10px rgba(79,179,255,0.18); 
    text-align:center;
    display:flex; 
    flex-direction:column;
  ">
    <!--img src="assets/project2.png" alt="Articles" style="width:68%; border-radius:6px; margin-bottom:10px; border:1px solid #4fb3ff;"-->
    <p style="margin:0 0 10px; line-height:1.45;">Articles sur divers sujets.</p>
    <a href="projects/formations-101/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">Articles</a>
  </div>

  <!-- CARTE 6 -->
  <div style="
    flex:0 0 20%; 
    max-width:20%; 
    background-color:#0a0f16; 
    border:1px solid #3fb950; 
    border-radius:10px; 
    padding:14px; 
    color:#e9f1ff; 
    font-family:'Courier New', monospace; 
    box-shadow:0 0 10px rgba(79,179,255,0.18); 
    text-align:center;
    display:flex; 
    flex-direction:column;
  ">
    <!--img src="assets/project3.png" alt="Cheatsheets" style="width:68%; border-radius:6px; margin-bottom:10px; border:1px solid #4fb3ff;"-->
    <p style="margin:0 0 10px; line-height:1.45;">Fiches pratiques.</p>
    <a href="projects/a-venir/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">Cheatsheets</a>
  </div>

  <!-- CARTE 7 -->
  <div style="
    flex:0 0 20%; 
    max-width:20%; 
    background-color:#0a0f16; 
    border:1px solid #3fb950; 
    border-radius:10px; 
    padding:14px; 
    color:#e9f1ff; 
    font-family:'Courier New', monospace; 
    box-shadow:0 0 10px rgba(79,179,255,0.18); 
    text-align:center;
    display:flex; 
    flex-direction:column;
  ">
    <!--img src="assets/project3.png" alt="Ressources" style="width:68%; border-radius:6px; margin-bottom:10px; border:1px solid #4fb3ff;"-->
    <p style="margin:0 0 10px; line-height:1.45;">Bibliothèque de ressources.</p>
    <a href="projects/a-venir/" style="display:inline-block; margin-top:auto; padding:6px 10px; background-color:#3fb950; color:#ffffff; text-decoration:none; border-radius:4px; font-weight:bold;">Ressources</a>
  </div>

</div>

---

<!-- ===== COMPÉTENCES ===== -->
<section class="terminal-section" id="competences" style="text-align:center; margin: 0 auto; max-width: 900px;">
  <h2>🛠️ Compétences</h2>
  <p style="text-align:center; line-height:1.6; font-size:1.1em;">
  - Défense / Blue Team : SIEM & IPS (Splunk, MS Sentinel, Wazuh, Snort), EDR (Bit Defender Gravity Zone, MS Defender for Endpoints)<br>
  - Offensif / Red Team : Reconnaissance & Penetration (Nmap, BurpSuite, Metasploit, mimikatz)<br>
  - Langages & Scripting : C#, C++, Python, Bash, PowerShell, JavaScript<br>
  - Systèmes & Réseau : Linux, Windows, MacOS, iOS, Android, TCP/IP, DNS, Wireshark<br>
  - Normes & Standards : NIST CSF2.0, OSSTMM, ISO27001, IEC62443
  </p>
</section>

---

<!-- ===== CERTIFICATIONS ===== -->
<section class="terminal-section" id="certifications" style="text-align:center; margin: 0 auto; max-width: 900px; padding: 40px 20px;">
  <h2>🎓 Certifications & formations</h2>
  <p style="text-align:center; line-height:1.6; font-size:1.1em;">
    - Professionnal Certificate in Cybersecurity (Massachusetts Institute of Technology, 2022) – 
    <a href="https://certificates.emeritus.org/551ef89b-003f-456c-b6ae-f3fac29734db#acc.oCvBfZWQ" target="_blank" rel="noopener noreferrer">MIT</a><br>
    - Security+ (CompTIA, 2025) – 
    <a href="https://www.credly.com/badges/64372dff-c123-469f-8ef0-38c62923a272" target="_blank" rel="noopener noreferrer">Security+</a><br>
    - Maîtrise en Informatique (Conservatoire National des Arts & Métiers, France, 2004)<br>
    - Formations notables : TryHackMe (Certificats 
    <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-ZVVQEKCLAQ.pdf" target="_blank" rel="noopener noreferrer">Blue Team</a>, 
    <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-KGKMGGWDIB.pdf" target="_blank" rel="noopener noreferrer">Redteaming</a>, 
    <a href="https://tryhackme-certificates.s3-eu-west-1.amazonaws.com/THM-CVEG9XZNC6.pdf" target="_blank" rel="noopener noreferrer">Jr Penetration Tester</a>)
  </p>
</section>


---
<section class="terminal-section" id="contact" style="text-align:center; margin: 0 auto; max-width: 900px;">
<h2 id="contact">📫 Contact</h2>
<p style="text-align:center; line-height:1.6; font-size:1.1em;">
- **Email** : contact@sqltemp.com  
- **LinkedIn** : [https://www.linkedin.com](https://www.linkedin.com/in/thierrymatrat/)
- **CV** : [CV Thierry Matrat](assets/CV_ThierryMatrat.pdf)

---

